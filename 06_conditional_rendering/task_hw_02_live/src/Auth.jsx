import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isSpinnerVisible: false,
  };

  setSpinnerVisible = () => {
    this.setState({
      isSpinnerVisible: true,
    });
    setTimeout(() => {
      this.setState({
        isSpinnerVisible: false,
      });
    }, 2000);
  };

  onLogin = () => {
    this.setSpinnerVisible();
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        {(this.state.isSpinnerVisible && <Spinner size={50} />) ||
          (this.state.isLoggedIn ? (
            <Logout onLogout={this.onLogout} />
          ) : (
            <Login onLogin={this.onLogin} />
          ))}
      </>
    );
  }
}

export default Auth;
