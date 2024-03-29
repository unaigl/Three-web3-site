import PropTypes from 'prop-types'
import { useEffect } from 'react'
import '../../../App.css'
import Card from '../../game/outCanvas/card/Card'
import { coinbaseWallet, hooks } from '../connectors/coinbaseWallet'
import { burnToken, claimToken } from './transaction'



export default function TransactionCoinbaseWallet(props) {

  // const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks
  const { useChainId, useAccounts, useProvider } = hooks

  const chainId = useChainId()
  const accounts = useAccounts()
  const provider = useProvider()

  // attempt to connect eagerly on mount
  useEffect(() => {
    void coinbaseWallet.connectEagerly()
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
      photo={'/cardPhotos/coinbase.jpg'}
      url={'https://www.coinbase.com/es/wallet/tutorials'}
      urlText={' Coinbase Wallet'}
    />
  )
}

TransactionCoinbaseWallet.prototype = {
  tokens: PropTypes.number.isRequired,
  setbuttonOpenModal: PropTypes.func.isRequired,
  buttonOpenModal: PropTypes.func.isRequired,

}