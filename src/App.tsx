import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import { Header } from './components/Header/Header'
import { MainPage } from './components/MainPage/MainPage'

import './App.scss'

export const App: React.FC = () => (
  <div className="app">
    <Header />
    <MainPage />
  </div>
)
