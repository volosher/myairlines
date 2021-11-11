import React from 'react'
import './DateInput.scss'
import DatePicker from 'react-datepicker'
import { addMonths } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

interface IProps {
    selected: Date | null | undefined,
   handleChange: (
        date: Date | [Date | null, Date | null] | /* for selectsRange */ null,
        event: React.SyntheticEvent | undefined,
    )=> void,
    placeholder: string | undefined,

   }

export const DateInput:React.FC<IProps> = ({
  selected, handleChange, placeholder,
}:IProps) => (
  <div className="input-date">
    <DatePicker
      onChange={handleChange}
      placeholderText={placeholder}
      selected={selected}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      showDisabledMonthNavigation
    />
  </div>

)
