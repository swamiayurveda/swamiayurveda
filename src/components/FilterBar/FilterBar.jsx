import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class FilterBar extends React.Component {
  state = {
    maxPrice: 10,
    maxMiles: 10,
  };

  handlePriceChange = e => this.setState({ maxPrice: e.target.value });
  handleMilesChange = e => this.setState({ maxMiles: e.target.value });

  render() {
    const { id, make, model, year, miles, price } = this.props;
    const { maxPrice, maxMiles } = this.state;

    return (
      <div className="filter-sidebar-wrapper p-md">
        <div className="field">
          <div class="level">
            <div class="level-left">
              <label className="label is-uppercase has-text-weight-light">Price</label>
            </div>
            <div class="level-right">
              {maxPrice}k
            </div>
          </div>
          <div className="control">
            <input
              className="slider is-fullwidth"
              value={maxPrice}
              onChange={this.handlePriceChange}
              step="10"
              min="10"
              max="100"
              type="range"
            />
          </div>
        </div>

        <div className="field m-t-xl">
          <div class="level">
            <div class="level-left">
              <label className="label is-uppercase has-text-weight-light">Mileage</label>
            </div>
            <div class="level-right">
              {maxMiles}k
            </div>
          </div>
          <div className="control">
            <input
              className="slider is-fullwidth"
              value={maxMiles}
              onChange={this.handleMilesChange}
              step="10"
              min="10"
              max="120"
              type="range"
            />
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
