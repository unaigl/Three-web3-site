const ETH = {
	name: 'Ether',
	symbol: 'ETH',
	decimals: 18,
};

const MATIC = {
	name: 'Matic',
	symbol: 'MATIC',
	decimals: 18,
};

function isExtendedChainInformation(chainInformation) {
	return !!chainInformation.nativeCurrency;
}

export function getAddChainParameters(chainId) {
	const chainInformation = CHAINS[chainId];
	if (isExtendedChainInformation(chainInformation)) {
		return {
			chainId,
			chainName: chainInformation.name,
			nativeCurrency: chainInformation.nativeCurrency,
			rpcUrls: chainInformation.urls,
			blockExplorerUrls: chainInformation.blockExplorerUrls,
		};
	} else {
		return chainId;
	}
}

export const CHAINS = {
	1: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://mainnet.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
			import.meta.env.VITE_APP_ALCHEMY_KEY
				? `https://eth-mainnet.alchemyapi.io/v2/${
						import.meta.env.VITE_APP_ALCHEMY_KEY
				  }`
				: undefined,
			'https://cloudflare-eth.com',
		].filter((url) => url !== undefined),
		name: 'Mainnet',
	},
	3: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://ropsten.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
		].filter((url) => url !== undefined),
		name: 'Ropsten',
	},
	4: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://rinkeby.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
		].filter((url) => url !== undefined),
		name: 'Rinkeby',
	},
	5: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://goerli.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
		].filter((url) => url !== undefined),
		name: 'Görli',
	},
	42: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://kovan.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
		].filter((url) => url !== undefined),
		name: 'Kovan',
	},
	// Optimism
	10: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://optimism-mainnet.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
			'https://mainnet.optimism.io',
		].filter((url) => url !== undefined),
		name: 'Optimism',
		nativeCurrency: ETH,
		blockExplorerUrls: ['https://optimistic.etherscan.io'],
	},
	69: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://optimism-kovan.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
			'https://kovan.optimism.io',
		].filter((url) => url !== undefined),
		name: 'Optimism Kovan',
		nativeCurrency: ETH,
		blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
	},
	// Arbitrum
	42161: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://arbitrum-mainnet.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
			'https://arb1.arbitrum.io/rpc',
		].filter((url) => url !== undefined),
		name: 'Arbitrum One',
		nativeCurrency: ETH,
		blockExplorerUrls: ['https://arbiscan.io'],
	},
	421611: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://arbitrum-rinkeby.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
			'https://rinkeby.arbitrum.io/rpc',
		].filter((url) => url !== undefined),
		name: 'Arbitrum Testnet',
		nativeCurrency: ETH,
		blockExplorerUrls: ['https://testnet.arbiscan.io'],
	},
	// Polygon
	137: {
		urls: [
			import.meta.env.VITE_APP_INFURA_KEY
				? `https://polygon-mainnet.infura.io/v3/${
						import.meta.env.VITE_APP_INFURA_KEY
				  }`
				: undefined,
			'https://polygon-rpc.com',
		].filter((url) => url !== undefined),
		name: 'Polygon Mainnet',
		nativeCurrency: MATIC,
		blockExplorerUrls: ['https://polygonscan.com'],
	},
	80001: {
		// TODO modificado
		// urls: [import.meta.env.VITE_APP_INFURA_KEY ? `https://polygon-mumbai.infura.io/v3/${import.meta.env.VITE_APP_INFURA_KEY}` : undefined].filter(
		//   (url) => url !== undefined
		// ),
		urls: [
			`https://speedy-nodes-nyc.moralis.io/ef66cc6d4d85140fd7994b1d/polygon/mumbai`,
		],
		name: 'Polygon Mumbai',
		nativeCurrency: MATIC,
		blockExplorerUrls: ['https://mumbai.polygonscan.com'],
	},
};

export const URLS = Object.keys(CHAINS).reduce((accumulator, chainId) => {
	const validURLs = CHAINS[Number(chainId)].urls;

	if (validURLs.length) {
		accumulator[Number(chainId)] = validURLs;
	}

	return accumulator;
}, {});

(() => {
	console.log('URLS', URLS);
})();
