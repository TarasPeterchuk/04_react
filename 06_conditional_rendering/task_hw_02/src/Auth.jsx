import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      spinnerVisible: false,
    };
  }
  setSpinnerVisible = () => {
    this.setState({
      spinnerVisible: true,
    });

    setTimeout(() => {
      this.setState({
        spinnerVisible: false,
      });
    }, 2000);
  };

  handleLogin = () => {
    this.setSpinnerVisible();
    this.setState({
      isLoggedIn: true,
    });
  };
  handleLogout = () => {
    this.setSpinnerVisible();
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        {this.state.spinnerVisible ? (
          <Spinner size={50} />
        ) : this.state.isLoggedIn ? (
          <Login onLogin={this.handleLogout} />
        ) : (
          <Logout onLogout={this.handleLogin} />
        )}
      </>
    );
  }
}

export default Auth;
