import { useEffect } from 'react'
import PropTypes from 'prop-types'

import '../../../App.css'
import Card from '../../game/outCanvas/card/Card'
import { getContract } from "../../web3Connectors/transactionCards/contract"
import { hooks, metaMask } from '../connectors/metaMask'
import { claimToken, burnToken } from './transaction'


export default function TransactionMetaMask(props) {

  const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

  const chainId = useChainId()
  const accounts = useAccounts()
  const provider = useProvider()

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly()
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
      photo={'/cardPhotos/metamask.jpg'}
      url={'https://dev.to/metamask/a-guide-to-metamask-ecosystem-leading-ethereum-blockchain-wallet-59k7'}
      urlText={' Metamask'}
    />
  )
}
TransactionMetaMask.prototype = {
  tokens: PropTypes.number.isRequired,
  setbuttonOpenModal: PropTypes.func.isRequired,
  buttonOpenModal: PropTypes.bool.isRequired,

}