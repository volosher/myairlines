import React from 'react'
import { Input as Vaza } from '../UI/input/Input'
import './TicketsSearchBar.scss'
import Button from '../UI/Button/Button'

const TicketsSearchBar: React.FC = () => (
  <div className="search-bar">
    <Input
      text="From"
    />
    <Vaza
      text="To"
    />
    <Input
      text="Depart"
    />
    <Input
      text="Return"
    />
    <Input
      text="Passengers"
    />
    <Button />
  </div>
)

export default TicketsSearchBar
