import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getCurrency, ICurrencyItem } from '../../api/rapidApi'
import './CurrencySwitcher.scss'

export const CurrencySwitcher:React.FC = () => {
  const dispatch = useDispatch()
  const selectedCurrency = useTypedSelector((state) => state.currency.selected)

  const selectedCurrencyHandler = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLInputElement
    dispatch({ type: 'GET_CURRENCY', payload: target.value })
  }

  const [currencies, setCurrencies] = useState<ICurrencyItem[]>([])

  useEffect(() => {
    getCurrency().then((result) => {
      setCurrencies(result.Currencies)
    })
  }, [])

  return (

    <div>
      <select
        id="currency-select"
        value={selectedCurrency}
        className="form-select cur-switch__select"
        aria-label="Currency switcher"
        onChange={selectedCurrencyHandler}
      >
        {currencies.map((item) => <option value={item.Code} key={item.Code}>{item.Code}</option>)}
      </select>
    </div>
  )
}
