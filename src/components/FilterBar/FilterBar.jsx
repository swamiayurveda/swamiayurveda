import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class FilterBar extends React.Component {
  state = {
    maxPrice: 0,
    maxMiles: 0,
  };

  render() {
    const { id, make, model, year, miles, price } = this.props;

    return (
      <div className="filter-sidebar-wrapper p-md">
        <div className="field">
          <label className="label is-uppercase has-text-weight-light">Price</label>
          <div className="control">
            <input className="slider is-fullwidth" step="1" min="0" max="100" type="range" />
          </div>
        </div>
        <div className="field m-t-lg">
          <label className="label is-uppercase has-text-weight-light">Mileage</label>
          <div className="control">
            <input className="slider is-fullwidth" step="1" min="0" max="100" type="range" />
          </div>
        </div>
      </div>
    );
  }
};

FilterBar.defaultProps = {
  id: 0,
  make: 'Make',
  model: 'Model',
  year: 2018,
  miles: 1,
  price: 2000,
  imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
};

FilterBar.propTypes = {
  id: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  miles: PropTypes.number,
  price: PropTypes.number,
  imageURL: PropTypes.string,
};


export default FilterBar;
