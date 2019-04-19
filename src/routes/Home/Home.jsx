import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        </div>
      </Container>
    );
  }
}

export default Home;