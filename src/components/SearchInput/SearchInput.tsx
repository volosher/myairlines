import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import 'bootstrap/scss/bootstrap.scss'
import './SearchInput.scss'
import Select, { OptionTypeBase, ValueType } from 'react-select'
import { getCity, ICityItem } from '../../api/rapidApi'
import { DestinationActionsTypes } from '../../store/reducers/Destination/DestinationTypes'

const componentStyle = {
  DropdownIndicator: null,
}

interface IProps {
    placeholder: string,
    options: OptionTypeBase[]
    handleChange: (value: ValueType<OptionTypeBase, boolean>)=>void,
    handlerSearch: (query: string) => void

}

export const SearchInput:React.FC<IProps> = ({
  placeholder, handleChange, options, handlerSearch,
}: IProps) => {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      height: 60,
      minHeight: 60,
    }),
  }

  const [query, setQuery] = useState('')

  useEffect(() => {
    if (query) {
      handlerSearch(query)
    }
  }, [query])

  const handlerInputValue = (value:string) => {
    setQuery(value)
  }

  return (

    <div className="input-select">
      <Select
        styles={customStyles}
        options={options}
        components={componentStyle}
        onInputChange={handlerInputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
