import React, { useEffect } from 'react'
import 'bootstrap/scss/bootstrap.scss'
import { TicketsSearchBar } from '../TicketsSearchBar/TicketsSearchBar'
import './MainPage.scss'

export const MainPage: React.FC = () => (

  <div className="main-page">
    <div className="title">
      <p className="fs-1 fw-bold ">Search for cheap airline tickets</p>
      <p className="fs-5 fw-normal ">The best way to buy cheap flights</p>
    </div>
    <TicketsSearchBar />

  </div>
)
