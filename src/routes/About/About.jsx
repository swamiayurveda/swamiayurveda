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
          {/* <div className="page-subheader pt-4">
            <div>{i18n.subheader}</div>
            <div>{i18n.subheader2}</div>
          </div> */}
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="mt-3" lg={6}>
          <Card border="success">
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text className="lh-2">
                Tejal Swami is a passionate advocate and practitioner of Ayurvedic Medicine. She received her Bachelors in Psychology at the University of California, Santa Barbara and from there pursued her certification as an Ayurvedic Wellness Educator and Ayurvedic Practitioner at Southern California University of Health Sciences where she underwent a two-year clinical internship with intensive training on consultations, herbs, and treatments.              </Card.Text>
              <Card.Text className="lh-2">
                Since childhood, Tejal had always been interested in the medical field. As she learned more about our current health system she realized that it not only lacked expertise in preventing disease, but it failed to treat an individual as an interconnected whole. Her desire to provide a more holistic and preventative approach to healing took Tejal back to her traditional Indian roots and into the depths of Ayurvedic Medicine.
              </Card.Text>
              <Card.Text className="lh-2">
                Tejal currently resides in Ventura, California where her experience with and practice of Ayurvedic Medicine guides her to spread the holistic healing wisdom of Ayurveda through clinical practice and other public outlets. She encourages individuals to explore a holistic approach to treating the mind and body through Ayurveda; she believes that Ayurveda has the means to provide a higher and healthier quality of life, something everyone deserves.               </Card.Text>
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
