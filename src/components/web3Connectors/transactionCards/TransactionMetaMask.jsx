import PropTypes from 'prop-types'
import { useEffect } from 'react'

import '../../../App.css'
import Card from '../../game/outCanvas/card/Card'
import { hooks, metaMask } from '../connectors/metaMask'
import { burnToken, claimToken } from './transaction'

import Modal from '../../game/outCanvas/modals/Modal'

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
    <>
      {props.buttonOpenModal && <Modal />}
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
    </>
  )
}
TransactionMetaMask.prototype = {
  tokens: PropTypes.number.isRequired,
  setbuttonOpenModal: PropTypes.func.isRequired,
  buttonOpenModal: PropTypes.bool.isRequired,

}