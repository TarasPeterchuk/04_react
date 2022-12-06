import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import PropTypes from 'prop-types';
import Child from './Child';

class Expand extends Component {
  state = { isOpen: false };

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.toggleDialog} className="expand__toggle-btn">
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
        <div className="expand__content">
          <Child isOpen={this.state.isOpen}>
            <p>
              Hooks are a new addition in React 16.8. They let you use state and
              other React features without writing a class.
            </p>
          </Child>
        </div>
      </div>
    );
  }
}

export default Expand;
