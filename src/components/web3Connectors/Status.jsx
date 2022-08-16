import { Web3ReactHooks } from '@web3-react/core'

export function Status({
  isActivating,
  error,
  isActive,
}) {
  return (
    <div>
      {error ? (
        <>
          🔴 You has denied
        </>
      ) : isActivating ? (
        <>🟡 Connecting</>
      ) : isActive ? (
        <>🟢 Connected</>
      ) : (
        <>⚪️ Disconnected</>
      )}
    </div>
  )
}
