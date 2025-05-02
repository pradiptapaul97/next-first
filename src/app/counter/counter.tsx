'use client'

import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
