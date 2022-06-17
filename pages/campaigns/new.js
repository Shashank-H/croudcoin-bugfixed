import React,{Component} from 'react';
import Layout from '../../components/Layout';
import {Form,Button,Input,Message,Segment} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';

class CampaignNew extends Component{
  state ={
    minimumContribution : '',
    errorMessage : '',
    loading : false
  };

  onSubmit = async (event) =>{
    event.preventDefault();
    this.setState({loading : true, errorMessage : ''});
    window.ethereum.enable();
    try{
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution)
                    .send({
                      from : accounts[0]
      });
      Router.pushRoute('/');
    }catch(err){
      this.setState({errorMessage : err.message});
    }
    this.setState({loading : false});
  };
  render(){
    return (
      <Layout>
        <Segment inverted>
        <h3> Create a Campaign!!</h3>
        <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label><Segment inverted>Minimum Contribution</Segment></label>
            <Input
              label='wei'
              labelPosition ='right'
              value = {this.state.minimumContribution}
              onChange = {event => this.setState({minimumContribution : event.target.value})}
            />
          </Form.Field>
          <Message error header= "Oops!!" content = {this.state.errorMessage}/>
          <Button primary loading= {this.state.loading}> Create</Button>
        </Form>
      </Segment>
      </Layout>
    );
  }
}

export default CampaignNew;
