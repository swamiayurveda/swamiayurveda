import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const DescriptionItem = ({ title, description, iconClass, iconSrc }) => (
  <div className="description-item">
    <span class="icon is-large">
      {iconClass && <i class={`fas fa-2x ${iconClass}`}></i>}
      {iconSrc && <img src={iconSrc} alt="icon" />}
    </span>
    <div className="has-text-left">
      <strong className="is-uppercase">{title}</strong>
      <div>{description}</div>
    </div>
  </div>
);

DescriptionItem.defaultProps = {
  title: 'Mileage',
  description: '100,000',
};

DescriptionItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  iconClass: PropTypes.string,
  iconSrc: PropTypes.string,
};


export default DescriptionItem;
