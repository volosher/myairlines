import React from 'react'
import './Button.scss'

interface IProps {
  handleChange: ()=> void,
}

export const Button:React.FC<IProps> = ({ handleChange }:IProps) => {
  const handleMouseEvent = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    handleChange()
  }

  return (
    <div className="search-btn">
      <button
        type="button"
        className="btn btn-primary search-btn__orange"
        onClick={handleMouseEvent}
      >
        Search flights

      </button>
    </div>
  )
}
