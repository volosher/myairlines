import React from 'react';
import 'bootstrap/scss/bootstrap.scss'


interface MyInputProps {
    text: string,
}

const myStyle = {
    width: '200px',
    height: '60px',

}


const MyInput: React.FC<MyInputProps> = ({text}) => {
    return (
        <div>
            <input type="text" className="form-control" style={myStyle} placeholder={text} aria-label="First name"/>
        </div>
    );
};

export default MyInput;