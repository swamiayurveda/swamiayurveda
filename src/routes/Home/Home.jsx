import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import image from '../../images/plants.png'

import Browse from 'routes/Browse';

import Footer from 'components/Footer';
import SubscribeForm from 'components/SubscribeForm';

import './style.scss';

const navbarHeight = 52;
// <section class="hero home-hero">
  // <div class="hero-body">
    // <div class="container">
      // <div style={{ color: 'white', fontSize: "5.2rem", fontWeight: 'bolder' }}>
        // {/* <img style={{ height: 60 }} src={image} alt="logo" /> */}
        // <span>Coming Soon</span>

        // {/*
        // <SearchBar /> */}
        // </div>
      //
      // <Footer />
      //
      // <SubscribeForm />
      // <div className="subtitle m-b-lg" style={{ color: 'white' }}>Sign up to get early notifications and beta
        // features</div>
      // </div>
    // </div>
  // </section>

const Overview = () => {
  return(
    <Container>
      <Row className="mt-5">
        <Col>
        </Col>
        <Col>
          <h3 class="text-left mb-5">What is Ayurveda?</h3>
          <p class="text-left">Bloom is an end-to-end protocol for identity attestation, risk assessment, and credit scoring; entirely on the blockchain. Bloom allows both traditional and digital currency lenders to serve billions of people who currently cannot obtain a bank account or credit score.</p>
        </Col>
      </Row>
    </Container>
  );
};

const StatusQuo = () => {
  return(
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Card className="text-center">
            <Card.Body>
              <div class="text-center mb-4">
                <Image src="http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" roundedCircle />
              </div>
              <Card.Title>
                <h2>Vata</h2>
              </Card.Title>
              <Card.Text class="mt-4">
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Card className="text-center">
            <Card.Body>
              <div class="text-center mb-4">
                <Image src="http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" roundedCircle />
              </div>
              <Card.Title>
                <h2>Kapha</h2>
              </Card.Title>
              <Card.Text class="mt-4">
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-5">
          <Card className="text-center">
            <Card.Body>
              <div class="text-center mb-4">
                <Image src="http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" roundedCircle />
              </div>
              <Card.Title>
                <h2>Pitta</h2>
              </Card.Title>
              <Card.Text class="mt-4">
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div style={{ marginTop: navbarHeight }}>
          <h1 className="big-header">
            <div>Take control of</div>
            <div>your credit and identity</div>
          </h1>
          <div class="header-desc mt-4">
            <div>Create a cryptographically secured identity</div>
            <div>powered by the blockchain</div>
          </div>
          <Container>
            <Row className="mt-5">
              <Col>
                <Button
                  className="rounded-pill px-5"
                  variant="success"
                  size="lg"
                >
                  Get Started
                </Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button
                  className="rounded-pill"
                  variant="outline-secondary"
                >
                  Learn more
                </Button>
              </Col>
            </Row>
          </Container>
          <Overview />
          <StatusQuo />
        </div>
      </Container>
    );
  }
}

export default Home;