import React from 'react'
import { Input } from '../UI/input/Input'
import './TicketsSearchBar.scss'
import { Button } from '../UI/Button/Button'

export const TicketsSearchBar: React.FC = () => (
  <div className="search-bar">
    <Input
      text="From"
    />
    <Input
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
