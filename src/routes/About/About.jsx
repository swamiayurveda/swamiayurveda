import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import i18n from '../../i18n';

const About = () => {
  return (
    <Container className="intro-section">
      <Row className="mt-5">
        <Col>
          <h1 className="page-header">
            <div>{i18n.about_us}</div>
          </h1>
        </Col>
      </Row>
    </Container>
  );
};


export default About;
