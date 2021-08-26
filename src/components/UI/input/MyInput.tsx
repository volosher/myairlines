import React from 'react';
import 'bootstrap/scss/bootstrap.scss'
import styles from './MyInput.module.scss'

interface MyInputProps {
    text: string,
}

const myStyle = {
    width: '200px',
    height: '60px',

}


const MyInput: React.FC<MyInputProps> = ({text}) => {
    return (
        <div className={styles.myinput}>
            <input type="text" className="form-control" style={myStyle} placeholder={text} aria-label="First name"/>
        </div>
    );
};

export default MyInput;