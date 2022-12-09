import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [visibility, toggleVisibility] = useState(true);

  return (
    <>
      <button onClick={() => toggleVisibility(!visibility)}>Toggle</button>
      {visibility && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </>
      )}
    </>
  );
};

export default App;
