import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class SearchBar extends React.Component {
  render() {
    // const { id, make, model, year, miles, price } = this.props;

    return (
      <div ref={ref => { this.container = ref }} className="search-bar">
        <div className="control search-control has-icons-left has-icons-right">
          <input className="input is-large no-focus" type="email" placeholder="Search" />
          <span className="icon is-medium is-left search-icon">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    );
  }
};

SearchBar.defaultProps = {
  id: 0,
  make: 'Make',
  model: 'Model',
  year: 2018,
  miles: 1,
  price: 2000,
  imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
};

SearchBar.propTypes = {
  id: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  miles: PropTypes.number,
  price: PropTypes.number,
  imageURL: PropTypes.string,
};


export default SearchBar;
