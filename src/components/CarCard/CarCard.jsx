import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Card = (props) => {
  const { make, model, year, miles, price, imageURL } = props;

  return (
    <div className="card car-card hvr-shrink hvr-underline">
      <header className="card-header">
        <p className="card-header-title">
          <strong>{year}</strong>&nbsp;<span className="car-title">{`${make} ${model}`}</span>
        </p>
      </header>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageURL} alt="Plaimage" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content columns">
          <div className="column is-paddingless">
            <div className="level">
              <span className="level-left has-text-grey">{miles} miles</span>
              <div className="level-right is-one-fifths is-paddingless has-text-right">
                <span className="is-size-6">{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  id: 0,
  make: 'Chevrolet',
  model: 'Camaro LT Coupe',
  year: 2018,
  miles: 100000,
  price: 233050,
  imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
};

Card.propTypes = {
  id: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  miles: PropTypes.number,
  price: PropTypes.number,
  imageURL: PropTypes.string,
};


export default Card;
