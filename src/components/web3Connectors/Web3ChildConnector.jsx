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


function getName(connector) {
  if (connector instanceof MetaMask) return 'MetaMask'
  if (connector instanceof WalletConnect) return 'WalletConnect'
  if (connector instanceof CoinbaseWallet) return 'Coinbase Wallet'
  if (connector instanceof Network) return 'Network'
  return 'Unknown'
}

export default function Web3ChildConnector() {

  // este connector es equivalente a library
  // este "connector" es un objeto Metamask  
  const { connector, chainId, error } = useWeb3React();
  console.log(`Priority Connector is: ${getName(connector)}`);
  // use WalletConnect object to listen handleChainChanged

  // TODO errores
  // const [errors, seterrors] = useState({ error: '' })
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
      style={{ top: '-500px', background: 'rgba(33,33,33,0.6)', margin: '100px', padding: '30px', display: 'block' }}
    >
      <b style={{ bottom: '300px' }}>{errorMessage}</b>
      <MetaMaskCard  // Todas las funcionalidades las sacaremos de los conectores, mediante hooks. Supongo que las biblios de las wallets se han
      // desarrollado mas y mas
      />
      <br />
      <WalletConnectCard />
      <br />
      <CoinbaseWalletCard />
      {/* <NetworkCard /> */}
    </div>
  );
}
