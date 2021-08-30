import React from 'react'
import './Button.scss'

const MyButton:React.FC = () => (
  <div className="search-btn">
    <button type="button" className="btn btn-primary search-btn__orange">Search flights</button>
  </div>
)

export default MyButton
