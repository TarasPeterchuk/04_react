import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dimensions from './Dimensions';

const App = () => {
  return (
    <div>
      <Dimensions />
    </div>
  );
};
export default App;
