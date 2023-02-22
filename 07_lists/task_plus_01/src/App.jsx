import React from 'react';
import UsersList from './UsersList';
import users from './users';

const App = () => (
  <>
    <UsersList users={users} />
  </>
);

export default App;
