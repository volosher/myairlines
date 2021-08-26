import React from 'react';
import 'bootstrap/scss/bootstrap.scss'
import styles from './Logo.module.scss'
const Logo = () => {
    return (
        <div className={styles.logo}>
            <a href="#" className={styles.logo__link}><h4>MyAirLines</h4></a>
        </div>
    );
};

export default Logo;