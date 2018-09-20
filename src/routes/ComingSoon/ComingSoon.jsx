import React from 'react';
import { Link } from "react-router-dom";

import './style.scss';
import logo from '../../images/icon-tertiary.png';

const i18n = {
  message: "Our website is currently under construction.",
};

const socialLinks = {
  facebook: 'https://www.facebook.com/Swami-Ayurveda-1261391000738608/',
  instagram: 'https://instagram.com/swami_ayurveda/',
  pinterest: 'https://www.pinterest.com/swamiayurveda',
  twitter: 'https://twitter.com/SwamiAyurveda',
};

class ComingSoon extends React.Component {
  render() {
    return (
      <div className="main-area center-text" >
        <div className="display-table">
          <div className="display-table-cell">
            <h1 className="logo"><img src={logo} /></h1>
            <h1 className="company-title"><b>Swami Ayurveda</b></h1>
            <h1 className="company-tagline"><b>Mind. Body. Soul.</b></h1>
            <br />
            <ul className="social-btn">
              <li><a target="_blank" href={socialLinks.instagram}><i className="fab fa-instagram"></i></a></li>
              <li><a target="_blank" href={socialLinks.facebook}><i className="fab fa-facebook-f"></i></a></li>
              <li><a target="_blank" href={socialLinks.twitter}><i className="fab fa-twitter"></i></a></li>
              <li><a target="_blank" href={socialLinks.pinterest}><i className="fab fa-pinterest-p"></i></a></li>
            </ul>
            {/* <p className="desc font-white">{i18n.message}</p> */}
            {/* <div className="email-input-area">
              <form method="post">
                <input className="email-input" name="email" type="text" placeholder="Enter your email" />
                <button className="submit-btn" name="submit" type="submit"><b>Subscribe</b></button>
              </form>
            </div> */}
            <h1 className="coming-soon"><b>COMING SOON.</b></h1>
          </div>
        </div>
      </div>
    );
  }
};

export default ComingSoon;
