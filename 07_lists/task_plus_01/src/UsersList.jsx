import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  onPageDecrement = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  onPageIncrement = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { users } = this.props;
    const itemsPerPage = 3;
    const indexFrom = (this.state.currentPage - 1) * itemsPerPage;
    const indexTo = indexFrom + itemsPerPage;
    return (
      <div>
        <Pagination
          goPrev={this.onPageDecrement}
          goNext={this.onPageIncrement}
          currentPage={this.state.currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {users.slice(indexFrom, indexTo).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
