import { useEffect } from 'react'
import { hooks, walletConnect } from '../connectors/walletConnect'
import { Accounts } from '../Accounts'
import { Chain } from '../Chain'
import { ConnectWithSelect } from '../ConnectWithSelect'
import { Status } from '../Status'


import '../../../App.css'


const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function WalletConnectCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void walletConnect.connectEagerly()
  }, [])

  return (
    <div className="wallet-card">

      <div>
        <h5>WalletConnect</h5>
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <div style={{ marginBottom: '1rem' }} />
        <Chain chainId={chainId} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <div style={{ marginBottom: '1rem' }} />
      <ConnectWithSelect
        connector={walletConnect}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />

    </div>
  )
}
