import {getContract} from '../../web3Connectors/transactionCards/contract';

// writeToContractUsingWeb3React
const claimToken = async (provider, accounts, chainId, amount) => {
	try {
		const myContract = getContract(provider, accounts, chainId);
		// Metamask calculates gas, but, for walletConnect and coinbase we need to set gas limit
		const overrides = {
			gasLimit: 230000,
		};
		const txResponse = await myContract.mint(
			accounts[0],
			amount,
			overrides
		);
		const txReceipt = await txResponse.wait();
		console.log(txReceipt);
		// alert(txReceipt);
	} catch (ex) {
		console.log(ex);

		if (ex.code === 4001) return alert('User denied transaction signature');
		return alert('"Connect / Disconnect" your wallet and try again.');
	}
};

const burnToken = async (provider, accounts, chainId, amount) => {
	try {
		const myContract = getContract(provider, accounts, chainId);
		// Metamask calculates gas, but, for walletConnect and coinbase we need to set gas limit
		const overrides = {
			gasLimit: 230000,
		};
		const txResponse = await myContract.burn(amount, overrides);
		const txReceipt = await txResponse.wait();
		console.log(txReceipt);
		// alert(txReceipt);
	} catch (ex) {
		console.log(ex);

		if (ex.code === 4001) return alert('User denied transaction signature');
		return alert('"Connect / Disconnect" your wallet and try again.');
	}
};

export {claimToken, burnToken};
