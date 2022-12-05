import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = { temperatur: '' };
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
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handlechange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
