import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={-57} interval={200} />
      <Counter start={200} interval={50} />
    </>
  );
};

export default App;
