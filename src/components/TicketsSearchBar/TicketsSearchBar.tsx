import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { Input } from '../UI/input/Input'
import './TicketsSearchBar.scss'
import { Button } from '../UI/Button/Button'
import { DestinationActionsTypes } from '../../store/reducers/Destination/DestinationTypes'
import { getCity, ICityItem } from '../../api/rapidApi'
import { SearchInput } from '../SearchInput/SearchInput'
import { DateInput } from '../SearchInput/DateInput/DateInput'
import { DepartReturnActionsTypes } from '../../store/reducers/DepartReturn/DepartReturnReducerTypes'

export const TicketsSearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const [cities, setCities] = useState<ICityItem[]>([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const fromOptions = useMemo(() => cities.map((item) => ({
    value: item.PlaceName,
    label: item.PlaceName,
  })), [cities])

  const handlerChangeFrom = useCallback(
    (v) => {
      dispatch({ type: DestinationActionsTypes.GET_FROM, payload: v.value })
      setCities([])
    },
    [],
  )

  const handlerChangeTo = useCallback(
    (v) => {
      dispatch({ type: DestinationActionsTypes.GET_TO, payload: v.value })
      setCities([])
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

  const handlerChangeDepart = useCallback(
    (date) => {
      const departDate = moment(date).format().substring(0, 10)
      dispatch({ type: DepartReturnActionsTypes.SET_DEPART, payload: departDate })
      setStartDate(date)
    },
    [],
  )
  const handlerChangeReturn = useCallback(
    (date) => {
      const returnDate = moment(date).format().substring(0, 10)
      dispatch({ type: DepartReturnActionsTypes.SET_RETURN, payload: returnDate })
      setEndDate(date)
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
      <DateInput
        selected={startDate}
        handleChange={handlerChangeDepart}
        placeholder="Depart"
      />

      <DateInput
        selected={endDate}
        handleChange={handlerChangeReturn}
        placeholder="Return"
      />
      <Input
        text="Passengers"
      />
      <Button />
    </div>
  )
}
