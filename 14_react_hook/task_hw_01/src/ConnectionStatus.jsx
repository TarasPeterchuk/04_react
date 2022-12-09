import React, { useState, useEffect } from 'react';
import ClassNames from 'classnames';

const ConnectionStatus = () => {
  const [network, setStatus] = useState('online');

  useEffect(() => {
    const handleConnect = () => {
      setStatus('online');
    };
    const handleDisconnect = () => {
      setStatus('offline');
    };
    window.addEventListener('online', handleConnect);
    window.addEventListener('offline', handleDisconnect);
    return () => {
      window.removeEventListener('online', handleConnect);
      window.removeEventListener('offline', handleDisconnect);
    };
  }, []);

  return (
    <div
      className={ClassNames('status', {
        status_offline: network === 'offline',
      })}
    >
      {network}
    </div>
  );
};

export default ConnectionStatus;
