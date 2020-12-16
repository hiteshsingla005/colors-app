import React from 'react';
import './ColorBox.css'

const ColorBox = (props) => {
    const { colorName, background } = props
    return (
        <div style={{ background }} className="color-box-container">
            <div className="copy-button-container">
                <button className="copy-button">COPY</button>
            </div>
            <div className="info-container">
                <span className="color-name">{colorName}</span>
                <span className="see-more">More</span> 
            </div>
        </div>
    );
};

export default ColorBox;