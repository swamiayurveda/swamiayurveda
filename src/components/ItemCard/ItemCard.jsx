import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import plantIcon from '../../images/plant.svg';
import bodyIcon from '../../images/body.svg';
import mortarIcon from '../../images/mortar.svg';

import './style.scss';

const ItemCard = (props) => {
  const { title, imageURL } = props;

  return (
    <Card className="item-card hvr-underline">
      <div className="favorite"></div>
      <Card.Img class="item-card_image" variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div className="detail-list">
            <div className="detail-item">
              <img alt="plant" className="item-icon" src={plantIcon} />
              <span className="item-text">Light, Punget</span>
            </div>
            <div className="detail-item">
              <img alt="body" className="item-icon" src={bodyIcon} />
              <span className="item-text">Vata, Pita, Kapha</span>
            </div>
            <div className="detail-item">
              <img alt="mortar" className="item-icon" src={mortarIcon} />
              <span className="item-text">Take with warm water with warm water</span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
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
