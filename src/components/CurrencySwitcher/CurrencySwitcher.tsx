import React, { useState, useEffect } from 'react'
import { getCurrency, ICurrencyItem } from '../http/rapidApi'
import './CurrencySwitcher.scss'

export const CurrencySwitcher:React.FC = () => {
  const [currencies, setCurrencies] = useState<ICurrencyItem[]>([])

  useEffect(() => {
    getCurrency().then((result) => {
      setCurrencies(result.Currencies)
    })
  }, [])

  return (

    <div>
      <select className="form-select cur-switch__select" aria-label="Currency switcher">
        {currencies.map((item) => <option value={item.Code} key={item.Code}>{item.Code}</option>)}
      </select>
    </div>
  )
}
