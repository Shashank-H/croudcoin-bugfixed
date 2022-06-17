import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const campaignFactoryInterface = `[
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "deployedCampaigns",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDeployedCampaigns",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "minimum",
        "type": "uint256"
      }
    ],
    "name": "createCampaign",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]`

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactoryInterface),
  '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
);

export default instance;
