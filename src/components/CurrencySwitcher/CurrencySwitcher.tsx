import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getCurrency, ICurrencyItem } from '../http/rapidApi'
import './CurrencySwitcher.scss'

export const CurrencySwitcher:React.FC = () => {
  const dispatch = useDispatch()
  const selectedCurrency = useTypedSelector((state) => state.selected)

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
        className="form-select cur-switch__select"
        aria-label="Currency switcher"
        onChange={selectedCurrencyHandler}
      >
        {currencies.map((item) => <option selected={selectedCurrency === item.Code} value={item.Code} key={item.Code}>{item.Code}</option>)}
      </select>
      <h1>{selectedCurrency}</h1>

    </div>
  )
}
