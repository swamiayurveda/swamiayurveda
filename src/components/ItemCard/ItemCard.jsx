import React from 'react';
import PropTypes from 'prop-types';
import plantIcon from '../../images/plant.svg';
import bodyIcon from '../../images/body.svg';
import mortarIcon from '../../images/mortar.svg';

import './style.scss';

const ItemCard = (props) => {
  const { title, imageURL } = props;

  return (
    <div className="card item-card hvr-shrink hvr-underline">
      {/* <header className="card-header">
        <p className="card-header-title">
          <strong>{year}</strong>&nbsp;<span className="car-title">{`${make} ${model}`}</span>
        </p>
      </header> */}
      <div class="favorite"></div>
      <div className="card-image">
        <figure className="image is-square">
          <img src={imageURL} alt="Plaimage" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <div className="column is-paddingless">
            <div className="level">
              <div className="is-size-4 has-text-grey">{title}</div>
              {/* <div className="level-right is-one-fifths is-paddingless has-text-right">
                <span className="is-size-6">${price}</span>
              </div> */}
            </div>
            <div class="detail-list">
              <div className="detail-item">
                <img className="item-icon" src={plantIcon} />
                <span className="item-text">Light, Punget</span>
              </div>
              <div className="detail-item">
                <img className="item-icon" src={bodyIcon} />
                <span className="item-text">Vata, Pita, Kapha</span>
              </div>
              <div className="detail-item">
                <img className="item-icon" src={mortarIcon} />
                <span className="item-text">Take with warm water with warm water</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemCard.defaultProps = {
  id: 0,
  title: 'Chevrolet',
  imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
};

ItemCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imageURL: PropTypes.string,
};


export default ItemCard;
