import React from 'react';
import ColorBox from './ColorBox'
import './Palette.css'

const Palette = ({ colors }) => {
    const colorBoxes = colors.map(color => {
        return <ColorBox colorName={color.name} background={color.color} />
    })
    return (
        <div className="Palette">
            {/* TODO: Navbar */}
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            {/* TODO: Footer */}
        </div>
    );
};

export default Palette;