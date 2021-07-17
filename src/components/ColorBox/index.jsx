import React, { useState } from 'react';
import './ColorBox.scss'

ColorBox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    // const initColor = localStorage.getItem('box_color') || 'deeppink'; // get data in localstorage
    // console.log(initColor)
    // const [color, setColor] = useState(initColor);
    // This only use when reload page. It use 1 time => odd
    // ==> Change to callback(error function)
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink'; // get data in localstorage
        console.log(initColor)
        return initColor;
    });
    function handleBoxClick() {
        // Get random color -> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;