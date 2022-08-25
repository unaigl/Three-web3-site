import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect, WalletConnectConnector } from '@web3-react/walletconnect'
import { useState, useEffect } from "react";

import CoinbaseWalletCard from './connectCard/CoinbaseWalletCard'
import NetworkCard from './connectCard/NetworkCard'
import WalletConnectCard from './connectCard/WalletConnectCard'
import MetaMaskCard from './connectCard/MetaMaskCard'
import { URLS } from "./chains";

import "../../App.css"

export default function Web3ChildConnector() {

  const { connector, chainId, error } = useWeb3React();
  const [errorMessage, seterrorMessage] = useState('')
  useEffect(() => {
    const fetchChainId = async () => {
      try {
        const chainId = Object.keys(URLS).map((_chainId) => Number(_chainId))
        if (Boolean(connector.supportedChainIds) && !connector.supportedChainIds.includes(chainId)) {
          throw new UnsupportedChainIdError(chainId, connector.supportedChainIds);
        }
        seterrorMessage('You can connect Metamask, coinbase or wallet connect at same time (use different chains for each wallet at same time)')
        return errorMessage
      } catch (error) {

        seterrorMessage('')
        return errorMessage
      }
    }
    fetchChainId()
      .catch(console.error);
  }, [chainId])

  return (
    <div
      className='wallet-modal'
    >
      <b style={{ bottom: '300px' }}>{errorMessage}</b>
      <MetaMaskCard
      />
      <br />
      <WalletConnectCard />
      <br />
      <CoinbaseWalletCard />
      {/* <NetworkCard /> */}
    </div>
  );
}
