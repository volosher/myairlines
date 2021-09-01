import React, { useState, useEffect } from 'react'
import { getCurrency, ICurrencyItem } from './http/rapidApi'

export const TestHttp: React.FC = () => {
  const [currencies, setCurrencies] = useState<ICurrencyItem[]>([])

  useEffect(() => {
    getCurrency().then((result) => {
      setCurrencies(result.Currencies)
    })
  }, [])

  return (
    <div>
      {currencies.map((item) => item.Code) || 'no values'}
    </div>
  )
}
