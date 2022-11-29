import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <Greeting
      firstName="John"
      lastName="Doe"
      birthDate={new Date('2022-12-31T11:11:11.819Z')}
    />
  );
};

export default App;
