import { useEffect } from 'react'
import { hooks, network } from '../connectors/network'
import { Accounts } from '../Accounts'
import { Chain } from '../Chain'
import { ConnectWithSelect } from '../ConnectWithSelect'
import { Status } from '../Status'
import '../../../App.css'


const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function NetworkCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate()
  }, [])

  return (
    <div className="wallet-card">
      <div>
        <h5>Network</h5>
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <div style={{ marginBottom: '1rem' }} />
        <Chain chainId={chainId} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <div style={{ marginBottom: '1rem' }} />
      <ConnectWithSelect
        connector={network}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
    </div>
  )
}
