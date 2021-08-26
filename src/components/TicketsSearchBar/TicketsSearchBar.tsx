import React from 'react';
import MyInput from "../UI/input/MyInput";
import styles from './TicketsSearchBar.module.scss'
import MyButton from "../UI/MyButton/MyButton";
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
            <MyButton/>
        </div>
    );
};

export default TicketsSearchBar;