import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import i18n from '../../i18n';
import AppoinmentScheduler from '../../components/AppoinmentScheduler';

const BookOnline = () => {
  return (
    <Container className="page-container">
      <Row className="mt-5">
        <Col>
          <h1 className="page-header">
            <div>{i18n.book_appointment}</div>
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <AppoinmentScheduler />
        </Col>
      </Row>
    </Container>
  );
};


export default BookOnline;
