import React, { Component } from 'react';

import './searchBar.scss';

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <p className="search__icon"><i className="fas fa-search"></i></p>
        <input className="search__input" type="search" placeholder="Enter a search term"/>
      </div>
    );
  }
}

export default SearchBar
