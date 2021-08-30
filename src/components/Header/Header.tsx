import React from 'react'
import './Header.scss'
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher'
import Logo from '../Logo/Logo'

const Header:React.FC = () => (
  <div className="header">
    <Logo />
    <CurrencySwitcher />
  </div>
)

export default Header
