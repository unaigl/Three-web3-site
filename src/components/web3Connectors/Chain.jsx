import { Web3ReactHooks } from '@web3-react/core'
import { CHAINS } from './chains'

export function Chain(chainId) {
  if (chainId === undefined) return null

  const name = chainId ? CHAINS[chainId]?.name : undefined

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
    <div
      className='justify-content-center align-items-center'

    >
      Chain Id: {chainId.chainId}
    </div>
  )
}
