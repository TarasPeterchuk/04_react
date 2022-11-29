import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onoff: 'off',
    };
  }
  toggleButton = () => {
    this.state.onoff === 'off'
      ? this.setState({
          onoff: 'on',
        })
      : this.setState({
          onoff: 'off',
        });
  };
  render() {
    return (
      <div className="toggler" onClick={this.toggleButton}>
        {this.state.onoff}
      </div>
    );
  }
}

export default Toggler;
