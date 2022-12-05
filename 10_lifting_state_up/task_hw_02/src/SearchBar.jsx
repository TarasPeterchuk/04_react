import React from 'react';

class SearchBar extends React.Component {
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked);
  };
  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleFilterTextChange}
          placeholder="Search..."
          value={this.props.filterText}
        />
        <p>
          <input
            type="checkbox"
            onChange={this.handleInStockChange}
            checked={this.props.inStockOnly}
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}
export default SearchBar;
