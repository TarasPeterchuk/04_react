import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/Home';
import Users from '../users/Users';

const PageBody = () => (
  <>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
  </>
);

export default PageBody;
