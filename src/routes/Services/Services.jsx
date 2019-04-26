import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col, Row, Card } from 'react-bootstrap';

import ServiceModal from './ServiceModal';

import services from '../../data/services';
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
        {services.map(service => (
          <Col className="mt-3" lg={6}>
            <Card className="service-card" border="success" as={Link} to="/services/abhyanga">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>
                  {service.brief}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                {service.rates.map((rate, idx) => (
                  <React.Fragment>
                    <span>{`${rate.time}: ${rate.cost}`}</span>
                    {idx != service.rates.length - 1 && <b> | </b>}
                  </React.Fragment>
                ))}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Services;
