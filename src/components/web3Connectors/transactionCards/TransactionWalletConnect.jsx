import { hooks, walletConnect } from '../connectors/walletConnect'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../App.css'
import Card from '../../game/outCanvas/card/Card'
import { getContract } from "../../web3Connectors/transactionCards/contract"
import { claimToken, burnToken } from './transaction'


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
    claimToken(provider, accounts, chainId, /* amount || */ 1)
  }
  const burnTokenTx = () => {
    burnToken(provider, accounts, chainId, 1)
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