import React from 'react';

function Counter(props) {
    const [counter, setCounter] = React.useState(0);
    return (
        <div>
            <h1>This is counter</h1>
            <div id='counter-value'>{counter}</div>
            <button id='increment-btn' onClick={() => { setCounter(counter + 1) }}>Increment</button>
            <button id='decrement-btn' onClick={() => { setCounter(counter === 0 ? 0 : counter - 1) }}>Decrement</button>
        </div>
    );
}

export default Counter;