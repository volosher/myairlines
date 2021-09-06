import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import 'bootstrap/scss/bootstrap.scss'
import './SelectInput.scss'
import Select from 'react-select'
import { getCity, ICityItem } from '../../api/rapidApi'

const componentStyle = {
  DropdownIndicator: null,
}

interface IProps {
    placeholder: string,

}

type SelectOption = {
    label: string
    value: string
  }

export const SelectInputFrom:React.FC = () => {
  const dispatch = useDispatch()
  const customStyles = {
    control: (base: any) => ({
      ...base,
      height: 60,
      minHeight: 60,
    }),
  }

  const isSelectOption = (v: any): v is SelectOption => {
    if ((v as SelectOption).value !== undefined) return v.value
    return false
  }

  const [cities, setCities] = useState<ICityItem[]>([])
  const [query, setQuery] = useState('')

  const options = cities.map((item) => ({
    value: item.PlaceName,
    label: item.PlaceName,
  }))

  useEffect(() => {
    if (query) {
      getCity(query).then((result) => {
        setCities(result.Places)
      })
    }
  }, [query])

  const handlerInputValue = (value:string) => {
    setQuery(value)
  }

  console.log('query', query)
  console.log('cities', cities)

  return (

    <div className="input-select">
      <Select
        styles={customStyles}
        options={options}
        components={componentStyle}
        onInputChange={handlerInputValue}
        placeholder="From"
        onChange={(v) => {
          if (isSelectOption(v)) {
            dispatch({ type: 'GET_FROM', payload: v.value })
          }
        }}
      />
    </div>
  )
}
