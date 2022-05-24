import {useWeb3React} from '@web3-react/core';
import {
	injected,
	walletconnect,
	resetWalletConnector,
	walletlink,
} from './Helpers/connectors';
import {getContract} from './Helpers/contract';
import React from 'react';

const Web3ReactConnectionComponent = () => {
	// connector, library, chainId, account, activate, deactivate
	// connector
	const web3reactContext = useWeb3React();
	// web3react
	const writeToContractUsingWeb3React = async () => {
		try {
			// const randomNumber = Math.floor(Math.random() * 100);
			const myContract = getContract(
				web3reactContext.chainId,
				web3reactContext.library,
				web3reactContext.account
			);
			const overrides = {
				gasLimit: 230000,
			};
			const response = await myContract.store(
				/* randomNumber, */ overrides
			);
			console.log(response);
			alert('write LUNES');
		} catch (ex) {
			console.log(ex);
			alert(ex);
		}
	};

	const disconnectMetamaskSimple = () => {
		try {
			web3reactContext.deactivate();
		} catch (ex) {
			console.log(ex);
		}
	};

	// web3react context
	const checkInfoSimple = async () => {
		try {
			console.log('web3reactContext');
			console.log(web3reactContext);
		} catch (ex) {
			console.log(ex);
		}
	};

	// web3react metamask
	const connectMetamaskSimple = async () => {
		try {
			await web3reactContext.activate(injected);
		} catch (ex) {
			console.log(ex);
		}
	};

	// web3react walletconnect
	const connectWalletConnectSimple = async () => {
		try {
			resetWalletConnector(walletconnect);
			const response = await web3reactContext.activate(walletconnect);
			console.log(response);
			console.log('esperando');
		} catch (ex) {
			console.log(ex);
		}
	};

	// web3react coinbase
	const connectCoinbaseSimple = async () => {
		try {
			const response = await web3reactContext.activate(walletlink);
			console.log(response);
			console.log('esperando');
		} catch (ex) {
			console.log(ex);
		}
	};

	return (
		<>
			{web3reactContext.account ? (
				<p className='nav-link'>{web3reactContext.account}</p>
			) : (
				<p className='nav-link'>0x..................</p>
			)}
			<li className='nav-item'>
				<button className='nav-link' onClick={connectMetamaskSimple}>
					Connect
				</button>
			</li>
			<li className='nav-item'>
				<button className='nav-link' onClick={disconnectMetamaskSimple}>
					DisConnect
				</button>
			</li>
			<li className='nav-item'>
				<button
					className='nav-link'
					onClick={writeToContractUsingWeb3React}
				>
					Write
				</button>
			</li>
			<li className='nav-item'>
				<button className='nav-link' onClick={checkInfoSimple}>
					Info
				</button>
			</li>
			<li className='nav-item'>
				<button
					className='nav-link'
					onClick={connectWalletConnectSimple}
				>
					WalletConnect
				</button>
			</li>
			<li className='nav-item'>
				<button className='nav-link' onClick={connectCoinbaseSimple}>
					Coinbase
				</button>
			</li>
		</>
	);
};
export default Web3ReactConnectionComponent;
