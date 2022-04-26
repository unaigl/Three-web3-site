import { Contract } from '@ethersproject/contracts';
export const contractAbi = [
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// BSC testnet "0xAad4523aA5d3cf26ADA628954D80961d03936c97";
// BSC Mumbai "0x82a52450D2753be0330459cdAB2259C378a14DD3";

export const contractAddress = [
  [97, "0xAad4523aA5d3cf26ADA628954D80961d03936c97"],
  [80001, "0x82a52450D2753be0330459cdAB2259C378a14DD3"],
];

export const getContract = (chainId, library, account) => {
  const signer = library.getSigner(account).connectUnchecked();
  
  var crtAddress;
  for (let i = 0; i < contractAddress.length; i++) {
    // Y si hay millones dentro de contractAddress?
    if (contractAddress[i][0] == chainId) {
      crtAddress = contractAddress[i][1];
    }
  }
  
  var contract = new Contract(crtAddress, contractAbi, signer);
  return contract;
};