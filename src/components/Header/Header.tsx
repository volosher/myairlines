import React from 'react';
import styles from './Header.module.scss'

import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <CurrencySwitcher/>
        </div>
    );
};

export default Header;