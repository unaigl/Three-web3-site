import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

// Ropstein 3 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/eth/ropsten
// Rinkeby 4 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/eth/rinkeby
// ETH 1 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/eth/mainnet
// BSC 56 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/bsc/mainnet
// BSC testnet 97 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/bsc/testnet
// Mumbai 137 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/polygon/mainnet
// Matic testnet 80001 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/polygon/mumbai
// AVAX 43114 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/avalanche/mainnet
// AVAX testnet 43113 https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/avalanche/testnet

const RPC_URLS = {
    1: "https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
  //   4: "https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
  97: "https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/bsc/testnet",
  80001: "https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/polygon/mumbai",
};

//metamask
export const injected = new InjectedConnector({
	supportedChainIds: [ 1, 3, 4, 5, 42, 97, 56, 80001, 137 ]
});


export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1],
    97: RPC_URLS[97],
    80001: RPC_URLS[80001],
    56: RPC_URLS[56],
    137: RPC_URLS[137],
    4: RPC_URLS[4],
  },
  qrcode: true,
  pollingInterval: 15000,
});


export function resetWalletConnector(connector) {
	if (connector && connector instanceof WalletConnectConnector) {
		connector.walletConnectProvider = undefined;
	}
}

// coinbase
export const walletlink = new WalletLinkConnector({
	url: RPC_URLS[1],
	appName: 'demo-app',
	supportedChainIds: [ 1, 4, 97, 56, 80001, 137 ]
});