import React from 'react';
import MyInput from "../UI/input/MyInput";
import styles from './TicketsSearchBar.module.scss'
const TicketsSearchBar = () => {
    return (
        <div className={styles.searchbar}>
            <MyInput
                text={'From'}
            />
            <MyInput
                text={'To'}
            />
            <MyInput
                text={'Depart'}
            />
            <MyInput
                text={'Return'}
            />
            <MyInput
                text={'Passengers'}
            />
        </div>
    );
};

export default TicketsSearchBar;