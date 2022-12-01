import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onConnect);
    window.addEventListener('offline', this.onDisconnect);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onConnect);
    window.removeEventListener('offline', this.onDisconnect);
  }

  onConnect = () => {
    this.setState({
      status: 'online',
    });
  };

  onDisconnect = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    return (
      <div
        className={
          this.state.status === 'online' ? 'status' : 'status status_offline'
        }
      >
        {this.state.status}
      </div>
    );
  }
}

export default ConnectionStatus;
