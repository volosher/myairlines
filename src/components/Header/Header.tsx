import React from 'react'
import './Header.scss'
import { CurrencySwitcher } from '../CurrencySwitcher/CurrencySwitcher'
import { Logo } from '../Logo/Logo'

export const Header:React.FC = () => (
  <div className="header">
    <Logo />
    <CurrencySwitcher />
  </div>
)
