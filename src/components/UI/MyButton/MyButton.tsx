import React from 'react'
import styles from './MyButton.module.css'

const mystyle = {
  width: '200px',
  height: '60px',
  fontSize: '1.3rem',
  background: 'darkorange',
}

const MyButton:React.FC = () => (
  <div className={styles.mybtn}>
    <button type="button" className="btn btn-primary" style={mystyle}>Search flights</button>
  </div>
)

export default MyButton
