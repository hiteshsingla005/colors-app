import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css'

const ColorBox = (props) => {
    const [isCopied, setIsCopied] = useState(false);
    const { colorName, background } = props;

    const handleCopyToClipboard = () => {console.log("inside")
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500)
    }

    return (
        <CopyToClipboard text={background} onCopy={handleCopyToClipboard}>
            <div style={{ background }} className="color-box-container">
                <div style={{ background }} className={`copy-overlay ${isCopied && "show"}`}></div>
                <div className={`copy-overlay-content ${isCopied && "show"}`}>
                    <h1>copied!</h1>
                    <p>{background}</p>
                </div>
                <div className="copy-button-container">
                    <button className="copy-button">COPY</button>
                </div>
                <div className="info-container">
                    <span className="color-name">{colorName}</span>
                    <span className="see-more">More</span> 
                </div>
            </div>
        </CopyToClipboard>
    );
};

export default ColorBox;