// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Numbers extends PureComponent {
  // shouldComponentUpdate(nextprops) {
  //   if (
  //     this.props.number === nextprops.number &&
  //     this.props.title === nextprops.title
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

Numbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};
Numbers.defaultProps = {
  title: 'Some number',
};

export default Numbers;
