import React from 'react';
import Mailbox from './Mailbox';

const App = () => {
  return (
    <>
      <Mailbox unreadMessages={[1, 2]} />
    </>
  );
};

export default App;
