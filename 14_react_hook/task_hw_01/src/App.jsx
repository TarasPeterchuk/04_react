import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ConnectionStatus from './ConnectionStatus';

const App = () => {
  return (
    <div>
      <ConnectionStatus />
    </div>
  );
};
export default App;
