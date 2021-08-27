import React from 'react'

const myStyle = {
  width: '60px',
  padding: '4px 9px',
  borderRadius: '20px',
  border: '1px solid white',
  background: 'transparent',
  color: 'white',
  appearance: 'none' as const,

}

const CurrencySwitcher:React.FC = () => (
  <div>
    <select className="form-select" style={myStyle} aria-label="Currency switcher">
      <option value="USD" selected>USD</option>
      <option value="EUR">EUR</option>
      <option value="UAH">UAH</option>
      <option value="BYN">BYN</option>
    </select>
  </div>
)

export default CurrencySwitcher
