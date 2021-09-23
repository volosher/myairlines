import React, { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'
import 'bootstrap/scss/bootstrap.scss'
import './SearchInput.scss'
import Select, { OptionTypeBase, ValueType } from 'react-select'
import { FieldRenderProps } from 'react-final-form'

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

  const debouncedSave = useCallback(
    debounce((nextValue) => setQuery(nextValue), 500),
    [],
  )

  useEffect(() => {
    if (query) {
      handlerSearch(query)
    }
  }, [query])

  const handlerInputValue = (value:string) => {
    debouncedSave(value)
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
