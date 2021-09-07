import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../UI/input/Input'
import './TicketsSearchBar.scss'
import { Button } from '../UI/Button/Button'
import { getPost } from '../../api/postApi'
import { DestinationActionsTypes } from '../../store/reducers/Destination/DestinationTypes'
import { getCity, ICityItem } from '../../api/rapidApi'
import { SearchInput } from '../SearchInput/SearchInput'

getPost()

export const TicketsSearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const [cities, setCities] = useState<ICityItem[]>([])

  const fromOptions = useMemo(() => cities.map((item) => ({
    value: item.PlaceName,
    label: item.PlaceName,
  })), [cities])

  const handlerChangeFrom = useCallback(
    (v) => {
      dispatch({ type: DestinationActionsTypes.GET_FROM, payload: v.value })
    },
    [],
  )

  const handlerChangeTo = useCallback(
    (v) => {
      dispatch({ type: DestinationActionsTypes.GET_TO, payload: v.value })
    },
    [],
  )

  const handlerSearch = useCallback(
    (query) => {
      getCity(query).then((result) => {
        setCities(result.Places)
      })
    },
    [],
  )

  return (
    <div className="search-bar">
      <SearchInput
        placeholder="From"
        handleChange={handlerChangeFrom}
        options={fromOptions}
        handlerSearch={handlerSearch}
      />
      <SearchInput
        placeholder="To"
        handleChange={handlerChangeTo}
        options={fromOptions}
        handlerSearch={handlerSearch}
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
}
