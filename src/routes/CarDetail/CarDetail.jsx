import React from 'react';
import PropTypes from 'prop-types';

import DescriptionItem from 'components/DescriptionItem';

import './style.scss';

const Overview = () => (
  <div className="columns is-multiline">
    <div className="column is-one-third-desktop is-half-tablet is-half-mobile">
      <DescriptionItem
        title="Mileage"
        description="100,000"
        iconClass="fa-tachometer-alt"
      />
    </div>
    <div className="column is-one-third-desktop is-half-tablet">
      <DescriptionItem
        title="Drive Type"
        description="FWD"
        iconClass="fa-gas-pump"
      />
    </div>
    <div className="column is-one-third-desktop is-half-tablet">
      <DescriptionItem
        title="MPG"
        description="28/35"
        iconClass="fa-gas-pump"
      />
    </div>
    <div className="column is-one-third-desktop is-half-tablet">
      <DescriptionItem
        title="Transmission"
        description="100,000"
        iconClass="fa-gas-pump"
      />
    </div>
    <div className="column is-one-third-desktop is-half-tablet">
      <DescriptionItem
        title="Fuel Type"
        description="100,000"
        iconClass="fa-gas-pump"
      />
    </div>
    <div className="column is-one-third-desktop is-half-tablet">
      <DescriptionItem
        title="Interior"
        description="100,000"
        iconClass="fa-gas-pump"
      />
    </div>
    <div className="column is-one-third-desktop is-half-tablet">
      <DescriptionItem
        title="Engine"
        description="100,000"
        iconClass="fa-gas-pump"
      />
    </div>
  </div>
);

const CarDetail = (props) => {
  const { make, model, year, miles, price, imageURL } = props;

  return (
    <div className="car-detail-container">
      <div className="car-banner level m-b-none">
        <div className="level-left">
          <span className="is-size-5">
            <strong>{year}</strong>&nbsp;<span className="car-title">{`${make} ${model}`}</span>
          </span>
        </div>
        <div className="level-right">
          <div>
            <p className="is-size-6">
              ${price}
            </p>
            <p className="is-size-7 has-text-grey">
              {miles} miles
            </p>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-fifths-desktop">
          <figure className="image is-4by3">
            <img src={imageURL} alt="car-sample" />
          </figure>
        </div>
        <div className="column is-two-fifths-desktop">
        <div className="tabs is-centered">
          <ul>
            <li className="is-active"><a>Overview</a></li>
            <li><a>Pricing</a></li>
            <li><a>Features</a></li>
          </ul>
        </div>
          <Overview />
        </div>
      </div>
    </div>
  );
};


CarDetail.defaultProps = {
  id: 0,
  make: 'Chevrolet',
  model: 'Camaro LT Coupe',
  year: 2018,
  miles: 100000,
  price: '233,050',
  imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
};

CarDetail.propTypes = {
  id: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  miles: PropTypes.number,
  price: PropTypes.number,
  imageURL: PropTypes.string,
};

export default CarDetail;
