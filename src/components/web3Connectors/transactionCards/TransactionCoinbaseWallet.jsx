import { coinbaseWallet, hooks } from '../connectors/coinbaseWallet'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../App.css'
import Card from '../../game/outCanvas/card/Card'
import { getContract } from "../../web3Connectors/transactionCards/contract"
import { claimToken, burnToken } from './transaction'



export default function TransactionCoinbaseWallet(props) {

  const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

  const chainId = useChainId()
  const accounts = useAccounts()
  const provider = useProvider()

  // attempt to connect eagerly on mount
  useEffect(() => {
    void coinbaseWallet.connectEagerly()
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
      photo={'/cardPhotos/coinbase.jpg'}
      url={'https://www.coinbase.com/es/wallet/tutorials'}
      urlText={' Coinbase Wallet'}
    />
  )
}

TransactionCoinbaseWallet.prototype = {
  tokens: PropTypes.number.isRequired
}