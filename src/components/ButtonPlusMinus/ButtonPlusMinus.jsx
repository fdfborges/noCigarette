import React, { useState } from 'react';
import './ButtonPlusMinus.scss';

export default function ButtonPlusMinus({ minValue = 0, maxValue = 100 }) {

    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        setCount((prevState) => {
            if (prevState < maxValue) {
                return prevState + 1;
            }
            return prevState;
        });
    };

    const handleDecrementCounter = () => {
        setCount((prevState) => {
            if (prevState > minValue) {
                return prevState - 1;
            }
            return prevState; 
        });
    };

    return (
        <div className="ContainerButtonPlusMinus">
            <button onClick={handleDecrementCounter}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrementCounter}>+</button>
        </div>
    );
}