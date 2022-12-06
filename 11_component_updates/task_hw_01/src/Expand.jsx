import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Expand extends Component {
  state = { isOpen: false };

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    let arrowClass;
    if (this.state.isOpen) {
      arrowClass = 'fas fa-chevron-up';
    } else arrowClass = 'fas fa-chevron-down';
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.toggleDialog} className="expand__toggle-btn">
            <i className={arrowClass}></i>
          </button>
        </div>
        <div className="expand__content">
          {this.state.isOpen && this.props.children}
        </div>
      </div>
    );
  }
}

export default Expand;
