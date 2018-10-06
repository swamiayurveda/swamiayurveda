import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const socialLinks = {
  facebook: 'https://www.facebook.com/Swami-Ayurveda-1261391000738608/',
  instagram: 'https://instagram.com/swami_ayurveda/',
  pinterest: 'https://www.pinterest.com/swamiayurveda',
  twitter: 'https://twitter.com/SwamiAyurveda',
};

class Footer extends React.Component {
  render() {
    return (
      <ul className="social-btn">
        <li className="social-item"><a target="_blank" href={socialLinks.instagram}><i className="fab fa-instagram"></i></a></li>
        <li className="social-item"><a target="_blank" href={socialLinks.facebook}><i className="fab fa-facebook-f"></i></a></li>
        <li className="social-item"><a target="_blank" href={socialLinks.twitter}><i className="fab fa-twitter"></i></a></li>
        <li className="social-item"><a target="_blank" href={socialLinks.pinterest}><i className="fab fa-pinterest-p"></i></a></li>
      </ul>
    );
  }
};

Footer.defaultProps = {
  id: 0,
  make: 'Make',
  model: 'Model',
  year: 2018,
  miles: 1,
  price: 2000,
  imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
};

Footer.propTypes = {
  id: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  miles: PropTypes.number,
  price: PropTypes.number,
  imageURL: PropTypes.string,
};


export default Footer;
