import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    inputVal: '',
    count: 0,
  };

  handleChange = (event) => {
    this.setState({
      inputVal: event.target.value,
    });
    // console.log(this.state.inputVal);
  };

  render() {
    const userList = this.props.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.inputVal.toLowerCase())
    );
    this.state.count = userList.length;
    // console.log(userList);
    return (
      <div>
        <Filter
          filterText={this.state.inputVal}
          count={this.state.count}
          onChange={this.handleChange}
        />
        <ul className="users">
          {userList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
