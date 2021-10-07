import React, {
  useCallback, useMemo, useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Form, Field } from 'react-final-form'
import { Input } from '../UI/input/Input'
import './TicketsSearchBar.scss'
import { DestinationActionsTypes } from '../../store/reducers/Destination/DestinationTypes'
import {
  getCity, ICityItem, getFlights, IFlight,
} from '../../api/rapidApi'
import { SearchInput } from '../SearchInput/SearchInput'
import { DateInput } from '../DateInput/DateInput'
import { DepartReturnActionsTypes } from '../../store/reducers/DepartReturn/DepartReturnReducerTypes'
import { store, RootState } from '../../store'
import { Tickets } from '../Tickets/Tickets'
import { FlightsActionsTypes } from '../../store/reducers/Flights/FlightsReducerTypes'

export const TicketsSearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const [cities, setCities] = useState<ICityItem[]>([])
  const [chosenCityFrom, setChosenCityFrom] = useState(null)
  const [chosenCityTo, setChosenCityTo] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [flights, setFlights] = useState<IFlight>()

  console.log('flights = ', flights)

  const fromOptions = useMemo(() => cities.map((item) => ({
    value: item.PlaceId,
    label: item.PlaceName,
    id: item.PlaceId,
  })), [cities])

  const handlerChangeFrom = useCallback(
    (v) => {
      dispatch({ type: DestinationActionsTypes.GET_FROM, payload: v.value })
      setChosenCityFrom(v)
      setCities([])
    },
    [cities],
  )

  const handlerChangeTo = useCallback(
    (v) => {
      dispatch({ type: DestinationActionsTypes.GET_TO, payload: v.value })
      setChosenCityTo(v)
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

  const currency = useSelector((state: RootState) => state.currency.selected)

  const handlerChangeFlights = useCallback(
    () => {
      getFlights(currency,
        store.getState().destination.from,
        store.getState().destination.to,
        store.getState().departReturn.depart).then((result) => {
        setFlights(result)
        dispatch({ type: FlightsActionsTypes.GET_FLIGHTS, payload: result })
      })
    }, [],
  )

  const required = (value: any) => ((value ? undefined : 'Required'))

  const animate = () => {
    const title: HTMLElement | null = document.querySelector('.title')
    const searchBar: HTMLElement | null = document.querySelector('.main-page')
    if (title === null && title === null) {
      return
    }
    title.classList.add('hide')
    searchBar?.classList.add('move-up')
  }

  const onSubmit = () => {
    handlerChangeFlights()
    animate()
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit, form, submitting,
      }) => (
        <>
          <form onSubmit={handleSubmit}>
            <div className="search-bar">
              <Field<string> name="from" validate={required}>
                {({ input, meta, rest }) => {
                  input.onChange(chosenCityFrom)
                  return (
                    <div>
                      <SearchInput
                        {...input}
                        {...rest}
                        name={input.name}
                        city={input.value}
                        placeholder="From"
                        handleChange={handlerChangeFrom}
                        options={fromOptions}
                        handlerSearch={handlerSearch}
                        onChange={(event: React.SyntheticEvent) => {
                          input.onChange(event)
                        }}
                      />
                      {meta.error && meta.touched && <span style={{ color: 'red', fontSize: '12px' }}>{meta.error}</span>}
                    </div>
                  )
                }}

              </Field>
              <Field<string> name="to" validate={required}>
                {({ input, meta, rest }) => {
                  input.onChange(chosenCityTo)
                  return (
                    <div>
                      <SearchInput
                        {...input}
                        {...rest}
                        name={input.name}
                        city={input.value}
                        placeholder="To"
                        handleChange={handlerChangeTo}
                        options={fromOptions}
                        handlerSearch={handlerSearch}
                        onChange={(event: React.SyntheticEvent) => {
                          input.onChange(event)
                        }}
                      />
                      {meta.error && meta.touched && <span style={{ color: 'red', fontSize: '12px' }}>{meta.error}</span>}
                    </div>
                  )
                }}

              </Field>

              <Field<string> name="Depart" validate={required}>
                {({ input, meta }) => {
                  input.onChange(startDate)
                  return (
                    <div>
                      <DateInput
                        handleChange={handlerChangeDepart}
                        selected={startDate}
                        placeholder="Depart"
                      />
                      {meta.error && meta.touched && <span style={{ color: 'red', fontSize: '12px' }}>{meta.error}</span>}
                    </div>
                  )
                }}

              </Field>
              <Field<string> name="Return" validate={required}>
                {({ input, meta }) => {
                  input.onChange(endDate)
                  return (
                    <div>
                      <DateInput
                        handleChange={handlerChangeReturn}
                        selected={endDate}
                        placeholder="Return"
                      />
                      {meta.error && meta.touched && <span style={{ color: 'red', fontSize: '12px' }}>{meta.error}</span>}
                    </div>
                  )
                }}

              </Field>

              <Field<string> name="passengers" validate={required}>
                {({ input, meta, rest }) => (
                  <div>
                    <Input
                      {...input}
                      {...rest}
                      placeholder="Passengers"
                      name={input.name}
                      value={input.value}
                      onChange={(event: React.SyntheticEvent): void => {
                        input.onChange(event)
                      }}
                    />
                    {meta.error && meta.touched && <span style={{ color: 'red', fontSize: '12px' }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">

                <button className="btn btn-primary searchBtn" type="submit" disabled={submitting}>
                  Search flights
                </button>
              </div>
              {/* <Button
              // handleChange={handlerChangeFlights}
              submitting={false}

            /> */}

            </div>

          </form>
          <div>
            <Tickets
              flights={flights}
            />
          </div>
        </>
      )}
    />

  )
}
