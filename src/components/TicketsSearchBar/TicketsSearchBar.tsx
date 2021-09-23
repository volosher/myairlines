import React, {
  useCallback, useMemo, useState, useRef,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import {
  Field, Form, FieldRenderProps, useFormState,
} from 'react-final-form'

import { ValueType } from 'react-select'
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

type Props = FieldRenderProps<string, any>

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
      console.log('query =', query)
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
      getFlights(currency,
        store.getState().destination.from,
        store.getState().destination.to,
        store.getState().departReturn.depart).then((result) => {
        setFlights(result)
      })
    }, [],
  )

  // const ReactSelectFromAdapter: React.FC<Props> = ({ input, meta, rest }:Props) => (

  //   <SearchInput
  //     {...input}
  //     {...rest}
  //     placeholder="From"
  //     handleChange={handlerChangeFrom}
  //     options={fromOptions}
  //     handlerSearch={handlerSearch}
  //     onChange={(event:React.SyntheticEvent) => {
  //       input.onChange(event)
  //     }}
  //   />
  // )
  //   type Option = {
  //     label: string;
  //     value: string;
  // }

  // const NewSelectAdapter = ({ input, options, ...rest }: FieldRenderProps<string, HTMLElement>) => {

  //   const handlerSearch = useCallback(
  //     (query) => {
  //       console.log('query =', query)
  //       getCity(query).then((result) => {
  //         setCities(result.Places)
  //       })
  //     },
  //     [],
  //   )
  // }

  // const ReactSelectFromAdapter: React.FC<Props> = ({ input, ...rest }:Props) => (

  //   <SearchInput
  //     {...input}
  //     {...rest}
  //     placeholder="From"
  //     handleChange={handlerChangeFrom}
  //     options={fromOptions}
  //     handlerSearch={handlerSearch}
  //   />
  // )
  // const ReactSelectToAdapter: React.FC<Props> = ({ input, rest }:Props) => (
  //   <SearchInput
  //     {...input}
  //     {...rest}
  //     onChange={(event:React.SyntheticEvent) => {
  //       input.onChange(event)
  //     }}
  //     placeholder="To"
  //     handleChange={handlerChangeTo}
  //     options={fromOptions}
  //     handlerSearch={handlerSearch}

  //   />
  // )

  const DepartAdapter: React.FC<Props> = ({ input, ...rest }:Props) => (
    <DateInput
      {...input}
      {...rest}
      selected={startDate}
      handleChange={handlerChangeDepart}
      placeholder="Depart"
    />
  )

  const ReturnAdapter: React.FC<Props> = ({ input, ...rest }:Props) => (
    <DateInput
      {...input}
      {...rest}
      selected={endDate}
      handleChange={handlerChangeReturn}
      placeholder="Return"
    />
  )

  const PassengersAdapter: React.FC<Props> = ({ input, ...rest }:Props) => (
    <Input
      {...input}
      {...rest}
      text="Passengers"
    />
  )

  // const PassengersAdapter: React.FC<Props> = ({ input, inputOnChange }:Props) => {
  //   const inputProps = {
  //     ...input,
  //     onChange: (e: React.SyntheticEvent): void => {
  //       input.onChange(e)
  //       // eslint-disable-next-line no-unused-expressions
  //       inputOnChange && inputOnChange(e)
  //     },
  //   }
  //   return (
  //     <Input
  //       {...inputProps}
  //       text="Passengers"
  //     />
  //   )
  // }

  const onSubmit = () => {
    console.log('Form submitted')
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ }}
      render={({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit}>
          <div className="search-bar">
            <Field name="from">
              {({ input, meta, rest }) => (
                <SearchInput
                  {...input}
                  {...rest}
                  placeholder="From"
                  handleChange={handlerChangeFrom}
                  options={fromOptions}
                  handlerSearch={handlerSearch}
                  onChange={(event:React.SyntheticEvent) => {
                    input.onChange(event) // final-form's onChange
                  }}
                />
              )}
            </Field>

            <Field name="to">
              {({ input, meta, rest }) => (
                <SearchInput
                  {...input}
                  {...rest}
                  placeholder="To"
                  handleChange={handlerChangeTo}
                  options={fromOptions}
                  handlerSearch={handlerSearch}
                  onChange={(event:React.SyntheticEvent) => {
                    input.onChange(event) // final-form's onChange
                  }}
                />
              )}
            </Field>

            {/* <Field
              name="from"
              component={ReactSelectFromAdapter}

            /> */}
            {/* <Field
              name="to"
              component={ReactSelectToAdapter}

            /> */}
            <Field
              name="Depart"
              component={DepartAdapter}
            />

            <Field
              name="Return"
              component={ReturnAdapter}
            />
            <Field
              name="passengers"
              component={PassengersAdapter}
            />

            <Button
              handleChange={handlerChangeFlights}
            />
            <Tickets
              flights={flights}
            />
          </div>

        </form>
      )}
    />

  )
}
