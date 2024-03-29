import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { useCallback, useState } from 'react'
import { CHAINS, getAddChainParameters, URLS } from './chains'

import '../../App.css'

function Select({
  chainId,
  switchChain,
  displayDefault,
  chainIds,
}) {
  return (
    <div className="col-md-8 form-group justify-content-center">
      <select
        className="form-select select-menu"
        id="exampleSelect1"
        value={chainId}
        onChange={(event) => {
          switchChain?.(Number(event.target.value))
        }}
        disabled={switchChain === undefined}
      >
        {displayDefault ? <option value={-1}>-- Select a Chain</option> : null}
        {chainIds.map((chainId, key) => (
          <option key={chainId} value={chainId}>
            {CHAINS[chainId]?.name ?? chainId}
          </option>
        ))}
      </select>
    </div>
  )
}

export function ConnectWithSelect({
  connector,
  chainId,
  isActivating,
  error,
  isActive,
}) {
  const isNetwork = connector instanceof Network || chainId
  const displayDefault = !isNetwork
  const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map((chainId) => Number(chainId))

  const [desiredChainId, setDesiredChainId] = useState(isNetwork ? 1 : -1)

  const switchChain = useCallback(
    async (desiredChainId) => {

      setDesiredChainId(desiredChainId)
      // if we're already connected to the desired chain, return
      if (desiredChainId === chainId) return
      // if they want to connect to the default chain and we're already connected, return
      if (desiredChainId === -1 && chainId !== undefined) return

      if (connector instanceof WalletConnect || connector instanceof Network) {
        await connector.activate(desiredChainId === -1 ? undefined : desiredChainId)
      } else {
        await connector.activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
      }
    },
    [connector, chainId]
  )

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Select
          chainId={desiredChainId}
          switchChain={switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <button
          className='btn btn-primary btn-sm'
          onClick={() =>
            connector instanceof WalletConnect || connector instanceof Network
              ? void connector.activate(desiredChainId === -1 ? undefined : desiredChainId)
              : void connector.activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
          }
        >
          Connect
        </button>
      </div>
    )
  } else if (isActive) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Select
          chainId={desiredChainId === -1 ? -1 : chainId}
          switchChain={switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <button
          className='btn btn-warning btn-sm'
          onClick={() => void connector.deactivate()}
        >
          Disconnect
        </button>
      </div>
    )
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Select
          chainId={desiredChainId}
          switchChain={isActivating ? undefined : switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <button
          className='btn btn-primary btn-sm'
          onClick={
            isActivating
              ? undefined
              : () =>
                connector instanceof WalletConnect || connector instanceof Network
                  ? connector.activate(desiredChainId === -1 ? undefined : desiredChainId)
                  : connector.activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
          }
          disabled={isActivating}
        >
          Connect
        </button>
      </div>
    )
  }
}
