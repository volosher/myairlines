import React from 'react';
import styles from './Header.module.scss'

import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";

const Header = () => {
    return (
        <div className={styles.header}>
            <CurrencySwitcher/>
        </div>
    );
};

export default Header;