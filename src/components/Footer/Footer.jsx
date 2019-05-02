import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import SocialButtons from '../SocialButtons';

import i18n from '../../i18n';
import logo from '../../images/icon.png';

import './style.scss';

const Footer = () => {
  return(
    <Container className="footer pt-5 pb-3" fluid>
      <Row className="align-items-center justify-content-center mb-3">
        <Col className="footer-divider" />
        <Col className="footer-title text-left" xs={1}>
          <img className="navbar-logo" src={logo} alt="logo" />
        </Col>
        <Col className="footer-divider" />
      </Row>
      <Row className="align-items-center justify-content-center  mb-3">
        <Col lg={4}>
          <ul className="footer-list">
            <li><Link className="footer-list-item" to="/about">About Us</Link></li>
            {/* <li><Link className="footer-list-item" to="mailto:support@bloom.co">Contact Us</Link></li> */}
          </ul>
        </Col>
        <Col lg={4}>
          <SocialButtons />
        </Col>
        <Col lg={4}>
          <ul className="footer-list">
            <li><Link className="footer-list-item" to="/terms">Privacy Policy</Link></li>
            <li><Link className="footer-list-item" to="/privacy">Terms of Service</Link></li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <small className="footer-subtitle text-secondary">
          Copyright © {i18n.swami_ayurveda}
        </small>
      </Row>
    </Container>
  );
};

Footer.defaultProps = {
};

Footer.propTypes = {
};


export default Footer;
