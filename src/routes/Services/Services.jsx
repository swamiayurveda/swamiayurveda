import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col, Row, Card } from 'react-bootstrap';

import ServiceModal from './ServiceModal';

import i18n from '../../i18n';
import './style.scss';

const Services = () => {
  return (
    <Container className="page-container">
      <Row className="pt-5">
        <Col>
          <h1 className="page-header">
            <div>{i18n.services}</div>
          </h1>
          <div className="page-subheader pt-4">
            <div>{i18n.subheader}</div>
            <div>{i18n.subheader2}</div>
          </div>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="mt-3" lg={6}>
          <Card className="service-card" border="success" as={Link} to="/services/abhyanga">
            <Card.Body>
              <Card.Title>Abhyanga</Card.Title>
              <Card.Text>
                <div>Long, ﬂowing strokes with light to moderate pressure help restore the balance of vital energy, deeply nourish the body, and relax the nervous system, enhancing lymphatic and arterial circulation.</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              50 minutes: <b>$95</b> | 80 minutes: <b>$155</b>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="mt-3" lg={6}>
          <Card className="service-card" border="success" as={Link} to="/services/marma">
            <Card.Body>
              <Card.Title>Marma Balancing</Card.Title>
              <Card.Text>
                <div>This gentle treatment uses light pressure to focus on energy points, soothing and aligning the physical and subtle bodies.</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              50 minutes: <b>$95</b> | 80 minutes: <b>$155</b>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="mt-3" lg={6}>
          <Card className="service-card" border="success" as={Link} to="/services/marma">
            <Card.Body>
              <Card.Title>Marma Balancing</Card.Title>
              <Card.Text>
                <div>This gentle treatment uses light pressure to focus on energy points, soothing and aligning the physical and subtle bodies.</div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              50 minutes: <b>$95</b> | 80 minutes: <b>$155</b>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default Services;
