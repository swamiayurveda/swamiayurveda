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
      <Row>
        <Col xs={12} md={6}>
          <div className="footer-title text-left mb-3">
            <img className="navbar-logo" src={logo} alt="logo" />
            <span className="ml-2">{i18n.swami_ayurveda}</span>
          </div>
          <div className="footer-subtitle text-left">
            <p>{`${i18n.header} ${i18n.header2}`}</p>
            <p>Copyright © {i18n.swami_ayurveda}</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={6} md={6} lg={4}>
              <ul class="footer-list">
                <li class="footer-list-header">Company</li>
                <li><a class="footer-list-item" href="/about">About Us</a></li>
                <li><a class="footer-list-item" href="mailto:support@bloom.co">Contact Us</a></li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={4}>
              <ul class="footer-list">
                <li class="footer-list-header">Community</li>
                  <li><a class="footer-list-item" href="https://twitter.com/bloom">Twitter</a></li>
                  <li><a class="footer-list-item" href="https://www.facebook.com/bloomtoken">Facebook</a>
                  <li><a class="footer-list-item" href="https://www.youtube.com/c/bloomprotocol">YouTube</a></li>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={4}>
              <ul class="footer-list">
                <li class="footer-list-header">Legal</li>
                <li><a class="footer-list-item" href="/legal/privacy">Privacy Policy</a></li>
                <li><a class="footer-list-item" href="/legal/terms">Terms of Service</a></li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

Footer.defaultProps = {
};

Footer.propTypes = {
};


export default Footer;
