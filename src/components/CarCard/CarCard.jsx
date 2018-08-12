import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Card = (props) => {
  const { id, make, model, year, miles, price, imageURL } = props;

  return (
    <div className="card car-card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={imageURL} alt="Plaimage" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content columns">
          <div className="column is-half is-paddingless">
            <div className="level-left">
              <span className="is-light m-r-xs">{year}</span>
              <strong className="m-r-xs">{make}</strong> <span>{model}</span>
            </div>
            <div className="level-left">
              <span className="has-text-grey">{miles}k miles</span>
            </div>
          </div>

          <div className="column is-half is-paddingless has-text-right">
            <span className="is-size-5">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  id: 0,
  make: 'Make',
  model: 'Model',
  year: 2018,
  miles: 1,
  price: 2000,
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
