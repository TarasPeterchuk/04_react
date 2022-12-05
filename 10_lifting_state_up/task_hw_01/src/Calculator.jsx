import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bimd(this);
    this.state = {
      temperature: '',
    };
  }
  handlechange = (e) => {
    this.setState({
      temperature: e.target.temperature,
    });
  };
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handlechange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

export default Calculator;
