import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';

import i18n from '../../i18n';

const About = () => {
  return (
    <Container className="page-container">
      <Row className="pt-5">
        <Col>
          <h1 className="page-header">
            <div>{i18n.about_us}</div>
          </h1>
          <div className="page-subheader pt-4">
            <div>{i18n.subheader}</div>
            <div>{i18n.subheader2}</div>
          </div>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="mt-3" lg={6}>
          <Card border="success">
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text className="lh-2">
                Since childhood, Tejal Swami had always been interested in the medical field. As years passed by she realized that our current health system lacks expertise in the preventing disease so her interest shifted more towards holistic health. Being brought up in an Indian household, Ayurvedic Medicine seemed to be the perfect fit as her career choice. 
              </Card.Text>
              <Card.Text className="lh-2">
                She pursued her Bachelors in Psychology at University of California, Santa Barbara (UCSB) and then went to Southern California University of Health Sciences (SCUHS) and received certification as an Ayurvedic Wellness Educator and Ayurvedic Practitioner. This includes a two-year Clinical Internship with intensive training on consultations, herbs, and treatments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-3" lg={6}>
          <Card border="success">
            <Card.Body>
              <Card.Title>Location</Card.Title>
              <iframe title="map" style={{ border: '0px', width: '100%', height: '134px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13187.09430067697!2d-119.28150853022464!3d34.279825649999985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9acf35114d5d1%3A0x3278b824dccfe023!2sTaco+Bell!5e0!3m2!1sen!2sus!4v1555809771460!5m2!1sen!2sus" frameBorder="0" allowFullScreen></iframe>
              <Row>
                <Col lg={6}>
                  <div className="font-weight-bold">Address</div>
                  <div>123 Maple St.</div>
                  <div>Ventura, CA 93001</div>
                </Col>
                <Col lg={6}>
                  <div className="font-weight-bold">Hours</div>
                  <div>Based on Appointment</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default About;
