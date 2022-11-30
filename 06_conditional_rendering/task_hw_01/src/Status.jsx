import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Mailbox = ({ isOnline }) => {
  return <div class="status">{isOnline ? <Online /> : <Offline />}</div>;
};

export default Mailbox;
