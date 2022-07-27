import { useEffect } from 'react'
import { hooks, metaMask } from '../connectors/metaMask'
import { Accounts } from '../Accounts'
import { Chain } from '../Chain'
import { ConnectWithSelect } from '../ConnectWithSelect'
import { Status } from '../Status'
import '../../App.css'

const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function MetaMaskCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly()

  }, [])

  return (
    <div
    // style={{ "display": "'flex'", "flexDirection": "'column'", "justifyContent": "space-between", "minWidth": "'5000px'", "maxWidth": "'5000px'", "width": "'1000px'", "padding": "'1rem'", "margin": "'20px'", "overflow": "'auto'", "border": "'1px solid'", "borderRadius": "'1rem'" }}
    >
      <div className="wallet-card">
        <h5>MetaMask</h5>
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <div style={{ marginBottom: '1rem' }} />
        <Chain chainId={chainId} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>

      <div style={{ marginBottom: '1rem' }} />
      <ConnectWithSelect
        connector={metaMask}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
      {/* <h5>{console.log('MMchainId', chainId)}</h5> */}
    </div>
  )
}
