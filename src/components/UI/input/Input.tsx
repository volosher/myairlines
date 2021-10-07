import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import './Input.scss'

interface InputPlaceholder {
  placeholder: string
  name: string
  value: string
  onChange: (e: React.SyntheticEvent) => void
}

export const Input: React.FC<InputPlaceholder> = ({ ...props }: InputPlaceholder) => (
  <div className="search-bar__item">
    <input
      {...props}
      type="text"
      className="form-control search-bar__input"
      aria-label="First name"
    />
  </div>
)
