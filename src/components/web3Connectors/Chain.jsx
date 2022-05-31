import { Web3ReactHooks } from '@web3-react/core'
import { CHAINS } from './chains'

export function Chain(chainId) {
  if (chainId === undefined) return null

  const name = chainId ? CHAINS[chainId]?.name : undefined
  console.log('chainId', chainId.chainId)
  console.log('NAME', name)

  if (name) {
    return (
      <div>
        Chain:{' '}
        <h3>{name}</h3>
        <h4>{chainId.chainId}</h4>
      </div>
    )
  }

  return (
    <div>
      Chain Id: <div>{chainId.chainId}</div>
    </div>
  )
}
