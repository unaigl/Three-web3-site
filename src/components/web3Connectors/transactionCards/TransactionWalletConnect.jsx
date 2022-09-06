import PropTypes from 'prop-types'
import { useEffect } from 'react'
import '../../../App.css'
import Card from '../../game/outCanvas/card/Card'
import { hooks, walletConnect } from '../connectors/walletConnect'
import { burnToken, claimToken } from './transaction'


export default function TransactionWalletConnect(props) {

  const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

  const chainId = useChainId()
  const accounts = useAccounts()
  const provider = useProvider()

  // attempt to connect eagerly on mount
  useEffect(() => {
    void walletConnect.connectEagerly()
  }, [])

  const claimTokenTx = () => {
    if (chainId === 97 || chainId === 80001) {
      claimToken(provider, accounts, chainId, /* amount || */ 1)
    } else {
      scrollTo(0, 0)
      props.setbuttonOpenModal(true)
      alert('Currently tokens are only available in BSC or Polygon Testnets')
    }
  }
  const burnTokenTx = () => {
    if (chainId === 97 || chainId === 80001) {
      burnToken(provider, accounts, chainId, 1)
    } else {
      scrollTo(0, 0)
      props.setbuttonOpenModal(true)
      alert('Currently tokens are only available in BSC or Polygon Testnets')
    }
  }

  return (
    <Card
      accounts={accounts}
      setbuttonOpenModal={props.setbuttonOpenModal}
      buttonOpenModal={props.buttonOpenModal}
      disabled={props.tokens}
      buttonContent={'Claim'}
      buttonTwoContent={'Burn'}
      claim={claimTokenTx}
      burn={burnTokenTx}
      photo={'/cardPhotos/walletConnect.jpg'}
      url={'https://academy.binance.com/es/articles/how-to-use-walletconnect'}
      urlText={' Wallet Connect'}
    />
  )
}
TransactionWalletConnect.prototype = {
  tokens: PropTypes.number.isRequired
}