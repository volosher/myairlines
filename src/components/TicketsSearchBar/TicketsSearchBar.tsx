import React from 'react'
import { Input } from '../UI/input/Input'
import './TicketsSearchBar.scss'
import { Button } from '../UI/Button/Button'
import { getPost } from '../../api/postApi'
import { SelectInputFrom } from '../SelectInput/SelectInputFrom'
import { SelectInputTo } from '../SelectInput/SelectInputTo'

getPost()

export const TicketsSearchBar: React.FC = () => (

  <div className="search-bar">
    <SelectInputFrom />
    <SelectInputTo />
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
