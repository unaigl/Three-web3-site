import { useEffect } from 'react'
import PropTypes from 'prop-types'

import '../../App.css'
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

  // TODO Que puedan dar a un boton para que se active el boton de claim. Hace falta el amount para cuando tienen 0 tokens
  // TODO falla el burn, DEJE de pensar en el array de accounts, ya que en getSigner no queda claro, REVOSARLO
  // let amount;
  // if (props.tokens > 1) amount = props.tokens

  // write To Contract Using Connectors Hooks
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
      text={<><p>You are able to use several CHAINS using Metamask! </p>
        <b>Claim or Burn ONE token for each transaction</b></>}
    />
  )
}
TransactionMetaMask.prototype = {
  tokens: PropTypes.number.isRequired,
  setbuttonOpenModal: PropTypes.func.isRequired,
  buttonOpenModal: PropTypes.bool.isRequired,

}