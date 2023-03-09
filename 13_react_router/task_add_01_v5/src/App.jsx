import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './componetns/navigation/Navigation';
import PageBody from './componetns/pagebody/PageBody';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <Navigation />
      <PageBody />
    </BrowserRouter>
  </div>
);
export default App;
