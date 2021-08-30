import React from 'react'
import './CurrencySwitcher.scss'

const CurrencySwitcher:React.FC = () => (
  <div>
    <select className="form-select cur-switch__select" aria-label="Currency switcher">
      <option value="USD" selected>USD</option>
      <option value="EUR">EUR</option>
      <option value="UAH">UAH</option>
      <option value="BYN">BYN</option>
    </select>
  </div>
)

export default CurrencySwitcher
