import React, { Component } from 'react';

class OddNumbers extends Component {
  shouldComponentUpdate(nextProps) {
    // this.props.number = 70 it is
    // nextProps.number = 71  it comes in this iteration

    return nextProps.number % 2 === 1;
  }
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default OddNumbers;
