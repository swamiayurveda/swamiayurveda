import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import i18n from '../../i18n';
import logo from '../../images/icon.png';

import './style.scss';

const socialLinks = {
  facebook: 'https://www.facebook.com/Swami-Ayurveda-1261391000738608/',
  instagram: 'https://instagram.com/swami_ayurveda/',
  pinterest: 'https://www.pinterest.com/swamiayurveda',
  twitter: 'https://twitter.com/SwamiAyurveda',
};

const Footer = () => {
  return(
    <Container className="footer pt-5 pb-3" fluid>
      <Row className="align-items-center justify-content-center  mb-3">
        <div className="footer-divider" />
        <div className="footer-title text-left">
          <img className="navbar-logo" src={logo} alt="logo" />
        </div>
        <div className="footer-divider" />
      </Row>
      <Row className="align-items-center justify-content-center  mb-3">
        <Col lg={4}>
          <ul class="footer-list">
            <li><a class="footer-list-item" href="/about">About Us</a></li>
            <li><a class="footer-list-item" href="mailto:support@bloom.co">Contact Us</a></li>
          </ul>
        </Col>
        <Col lg={4}>
          <div className="social-btn">
            <div className="social-item"><a target="_blank" href={socialLinks.instagram}><i className="fab fa-instagram"></i></a></div>
            <div className="social-item"><a target="_blank" href={socialLinks.facebook}><i className="fab fa-facebook-f"></i></a></div>
            <div className="social-item"><a target="_blank" href={socialLinks.twitter}><i className="fab fa-twitter"></i></a></div>
            <div className="social-item"><a target="_blank" href={socialLinks.pinterest}><i className="fab fa-pinterest-p"></i></a></div>
          </div>
        </Col>
        <Col lg={4}>
          <ul class="footer-list">
            <li><a class="footer-list-item" href="/legal/privacy">Privacy Policy</a></li>
            <li><a class="footer-list-item" href="/legal/terms">Terms of Service</a></li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        
      </Row>
    </Container>
  );
};

Footer.defaultProps = {
};

Footer.propTypes = {
};


export default Footer;
