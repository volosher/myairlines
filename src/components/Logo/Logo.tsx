import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import styles from './Logo.module.scss'

const Logo:React.FC = () => (
  <div className={styles.logo}>
    <a href="https://github.com" className={styles.logo__link}><h4>MyAirLines</h4></a>
  </div>
)

export default Logo
