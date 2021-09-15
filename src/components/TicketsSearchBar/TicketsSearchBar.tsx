import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Input } from '../UI/input/Input'
import './TicketsSearchBar.scss'
import { Button } from '../UI/Button/Button'
import { DestinationActionsTypes } from '../../store/reducers/Destination/DestinationTypes'
import {
  getCity, ICityItem, getFlights, IFlight,
} from '../../api/rapidApi'
import { SearchInput } from '../SearchInput/SearchInput'
import { DateInput } from '../DateInput/DateInput'
import { DepartReturnActionsTypes } from '../../store/reducers/DepartReturn/DepartReturnReducerTypes'
import { store, RootState } from '../../store'
import { Tickets } from '../Tickets/Tickets'

export const TicketsSearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const [cities, setCities] = useState<ICityItem[]>([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [flights, setFlights] = useState<IFlight>()

  const fromOptions = useMemo(() => cities.map((item) => ({
    value: item.PlaceId,
    label: item.PlaceName,
    id: item.PlaceId,
  })), [cities])

  const handlerChangeFrom = useCallback(
    (v) => {
      // const cityID = cities.filter((city) => city.PlaceName === v.value)
      // let cityID = ''
      // cities.forEach((elem) => {
      //   if (elem.PlaceName === v.value) {
      //     cityID = elem.PlaceId
      //   }
      // })

      dispatch({ type: DestinationActionsTypes.GET_FROM, payload: v.value })

      setCities([])
    },
    [cities],
  )

  const handlerChangeTo = useCallback(
    (v) => {
      dispatch({ type: DestinationActionsTypes.GET_TO, payload: v.value })
      setCities([])
    },
    [cities],
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

  const currency = useSelector((state:RootState) => state.currency.selected)

  const handlerChangeFlights = useCallback(
    () => {
      console.log('In state currency = ', store.getState().currency.selected)
      console.log('In state destination from = ', store.getState().destination.from)
      console.log('In state destination to = ', store.getState().destination.to)
      console.log('In state data = ', store.getState().departReturn.depart)

      getFlights(currency,
        store.getState().destination.from,
        store.getState().destination.to,
        store.getState().departReturn.depart).then((result) => {
        setFlights(result)
      })
    }, [],
  )

  return (
    <>
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
        <Button
          handleChange={handlerChangeFlights}
        />
        <Tickets
          flights={flights}
        />
      </div>
    </>

  )
}
