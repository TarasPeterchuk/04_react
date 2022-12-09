import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <button
        data-action="decrease"
        onClick={() => setCounter(counter - 1)}
        className="counter__button"
      >
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(0)}>
        {counter}
      </span>
      <button
        data-action="increase"
        onClick={() => setCounter(counter + 1)}
        className="counter__button"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
