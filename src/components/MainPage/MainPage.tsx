import React from 'react';
import 'bootstrap/scss/bootstrap.scss'
import TicketsSearchBar from "../TicketsSearchBar/TicketsSearchBar";

const myStyle = {
    textAlign: 'center' as "center",
    color: 'white',
    paddingTop: '80px',
}

const MainPage = () => {
    return (
        <div style={myStyle}>
            <p className="fs-1 fw-bold">Search for cheap airline tickets</p>
            <p className="fs-5 fw-normal">The best way to buy cheap flights</p>
            <TicketsSearchBar/>
        </div>
    );
};


export default MainPage;