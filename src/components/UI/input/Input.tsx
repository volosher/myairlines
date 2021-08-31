import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import './Input.scss'

interface InputPlaceholder {
    text: string,
}

export const Input: React.FC<InputPlaceholder> = ({ text }: InputPlaceholder) => (
  <div className="search-bar__item">
    <input type="text" className="form-control search-bar__input" placeholder={text} aria-label="First name" />
  </div>
)
