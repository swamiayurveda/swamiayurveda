import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Card = ({ image, children }) => {
  return (
    <div className="card nav-card hvr-shrink">
      <img className="card-image" src={image} />
      <header className="card-header">
        <p className="card-header-title">{children}</p>
      </header>
    </div>
  );
};

Card.defaultProps = {
  children: 'Camaro LT Coupe',
  image: 'https://bulma.io/images/placeholders/1280x960.png',
};

Card.propTypes = {
  children: PropTypes.string,
  image: PropTypes.string,
};


export default Card;
