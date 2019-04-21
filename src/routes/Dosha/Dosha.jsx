import React from 'react';
import { Container, Col, Row, Card, ProgressBar, Form, Image } from 'react-bootstrap';

import i18n from '../../i18n';

import './style.scss'

const ProductCard = () => {
  return (
    <Card className="product-card">
      {/* <Image src="https://images-na.ssl-images-amazon.com/images/I/71drN%2BBFAkL._SL1500_.jpg" thumbnail /> */}
      <Card.Img className="product-card_image" variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71drN%2BBFAkL._SL1500_.jpg" />
      <Card.Body>
        <Card.Subtitle className="mb-2">Ayu Product 1</Card.Subtitle>
        <Card.Text>$1.99</Card.Text>
      </Card.Body>
    </Card>
  );
}

const Dosha = () => {
  return (
    <Container className="page-container">
      <Row className="pt-5">
        <Col>
          <h1 className="page-header">
            <div>{i18n.my_dosha}</div>
          </h1>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="mt-3" lg={6}>
          <Row>
            <Col lg={12}>
              <Card border="success">
                <Card.Body>
                  <Card.Title>Attributes</Card.Title>
                  <Form.Group>
                    <Form.Label>Vata</Form.Label>
                    <ProgressBar variant="success" now={30} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Kapha</Form.Label>
                    <ProgressBar variant="warning" now={50} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Pitta</Form.Label>
                    <ProgressBar variant="danger" now={20} />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12} className="mt-3">
              <Card border="success">
                <Card.Body>
                  <Card.Title>Characteristics</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="mt-3" lg={6}>
          <Card border="success">
            <Card.Body>
              <Card.Title>Suggested Products</Card.Title>
              <Row>
                <Col className="mt-3" md={6}>
                  <ProductCard />
                </Col>
                <Col className="mt-3" md={6}>
                  <ProductCard />
                </Col>
                <Col className="mt-3" md={6}>
                  <ProductCard />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default Dosha;
