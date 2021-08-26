import React from 'react';
import 'bootstrap/scss/bootstrap.scss'
import styles from './Logo.module.scss'
const Logo = () => {
    return (
        <div className={styles.logo}>
            <h4>MyAirLines</h4>
        </div>
    );
};

export default Logo;