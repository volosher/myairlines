import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import styles from './MyInput.module.scss'

interface InputPlaceholder {
    text: string,
}

const myStyle = {
  width: '200px',
  height: '60px',

}

const MyInput: React.FC<InputPlaceholder> = ({ text }: InputPlaceholder) => (
  <div className={styles.myinput}>
    <input type="text" className="form-control" style={myStyle} placeholder={text} aria-label="First name" />
  </div>
)

export default MyInput
