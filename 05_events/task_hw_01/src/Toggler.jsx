import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onoff: 'Off',
    };
  }
  toggleButton = () => {
    this.state.onoff === 'Off'
      ? this.setState({
          onoff: 'On',
        })
      : this.setState({
          onoff: 'Off',
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
