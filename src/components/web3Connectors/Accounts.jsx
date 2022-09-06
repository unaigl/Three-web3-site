import { formatEther } from '@ethersproject/units'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function useBalances(
  provider,
  accounts,
  setshowWallet
) {
  const [balances, setBalances] = useState()

  useEffect(() => {
    if (provider && accounts?.length) {
      let stale = false

      void Promise.all(accounts.map((account) => provider.getBalance(account))).then((balances) => {
        if (!stale) {
          setBalances(balances)
        }
      })
      return () => {
        stale = true
        setBalances(undefined)
      }
    }
  }, [provider, accounts])

  return balances
}

export function Accounts({
  accounts,
  provider,
  ENSNames,
}) {
  const balances = useBalances(provider, accounts)

  if (accounts === undefined) return <div>
    Accounts:{' '}
    <b>
      <ul>
        0x
        <br />
        {`Ξ0.000`}
      </ul>

    </b>
  </div>



  return (
    <div>
      Accounts:{' '}
      <b>
        {accounts.length === 0
          ? 'None'
          : accounts?.map((account, i) => (
            <ul key={account} style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {ENSNames?.[i] ?? account}
              <br />
              {balances?.[i] ? ` Ξ${Number.parseFloat(formatEther(balances[i])).toFixed(6)}` : null}
            </ul>
          ))}
      </b>
    </div>
  )
}