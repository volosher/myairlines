import React from 'react'
import './Button.scss'

// interface IProps {
//   handleChange: ()=> void,
//   submitting: boolean
// }
interface IProps {
   submitting: boolean
}

// export const Button:React.FC<IProps> = ({ handleChange, submitting }:IProps) => {
//   const handleMouseEvent = (event: React.MouseEvent<HTMLElement>) => {
//     event.preventDefault()
//     handleChange()
//   }

export const Button:React.FC<IProps> = ({ submitting }:IProps) => {
  const handleMouseEvent = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    // handleChange()
  }

  return (
    <div className="search-btn">
      <button
        disabled={submitting}
        type="submit"
        className="btn btn-primary search-btn__orange"
        onClick={handleMouseEvent}
      >
        Search flights

      </button>
    </div>
  )
}
