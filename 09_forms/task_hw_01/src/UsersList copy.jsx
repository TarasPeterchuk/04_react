import React, { Component } from 'react';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    inputVal: '',
  };

  handleChange = (event) => {
    this.setState({
      inputVal: event.target.value,
    });
    console.log(this.state.inputVal);
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state);
  //   // console.log(this.state);
  // };
  render() {
    const userList = this.props.users;

    return (
      <div>
        <div className="filter">
          <span className="filter__count">5</span>
          <input
            type="text"
            className="filter__input"
            onChange={this.handleChange}
            value={this.state.inputVal}
          />
        </div>
        <ul className="users">
          <Filter filterText ={this.state.inputVal} count ={''} onChange ={}  />
        </ul>
      </div>
    );
  }
}

export default UsersList;
