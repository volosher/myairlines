import React from 'react';

const myStyle = {
    width: '90px',
    borderRadius: '20px',
}

const CurrencySwitcher = () => {
    return (
        <div>
            <select  className="form-select" style={myStyle} aria-label="Currency switcher">
                <option value="USD" selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="UAH">UAH</option>
                <option value="BYN">BYN</option>
            </select>
        </div>
    );
};

export default CurrencySwitcher;