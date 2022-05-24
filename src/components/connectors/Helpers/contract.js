import {Contract} from '@ethersproject/contracts';
export const contractAbi = [
	{
		inputs: [],
		name: 'retrieve',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'store',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];

// Tenemos el mismo contrato en cada chain
// BSC testnet "0xAad4523aA5d3cf26ADA628954D80961d03936c97";
// BSC Mumbai "0x82a52450D2753be0330459cdAB2259C378a14DD3";

class ErrorNoChain extends Error {
	LUNESSSS;
}

export const contractAddress = [
	[97, '0xAad4523aA5d3cf26ADA628954D80961d03936c97'],
	[80001, '0x82a52450D2753be0330459cdAB2259C378a14DD3'],
];

export const getContract = (chainId, library, account) => {
	const signer = library.getSigner(account).connectUnchecked();

	let crtAddress;
	for (let i = 0; i < contractAddress.length; i++) {
		// Comparamos el chain para asignas el contrato de esa cadena
		if (contractAddress[i][0] == chainId) {
			crtAddress = contractAddress[i][1];
		}
	}

	const contract = new Contract(crtAddress, contractAbi, signer);
	return contract;
};