import React from 'react';
import cx from 'classnames';

import './style.scss';

const socialLinks = {
  facebook: 'https://www.facebook.com/Swami-Ayurveda-1261391000738608/',
  instagram: 'https://instagram.com/swami_ayurveda/',
  pinterest: 'https://www.pinterest.com/swamiayurveda',
  twitter: 'https://twitter.com/SwamiAyurveda',
};

const SocialButtons = ({ sm }) => {
  return (
    <div className={cx('social-btn', { 'social-btn-sm': sm })}>
      <div className="social-item"><a target="_blank" rel="noopener noreferrer" href={socialLinks.instagram}><i className="fab fa-instagram"></i></a></div>
      <div className="social-item"><a target="_blank" rel="noopener noreferrer" href={socialLinks.facebook}><i className="fab fa-facebook-f"></i></a></div>
      <div className="social-item"><a target="_blank" rel="noopener noreferrer" href={socialLinks.twitter}><i className="fab fa-twitter"></i></a></div>
      {/* <div className="social-item"><a target="_blank" rel="noopener noreferrer" href={socialLinks.pinterest}><i className="fab fa-pinterest-p"></i></a></div> */}
    </div>
  );
};

export default SocialButtons;
