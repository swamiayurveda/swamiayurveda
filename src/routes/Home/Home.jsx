import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
// import image from '../../images/plants.png'

import Browse from 'routes/Browse';

// import Footer from 'components/Footer';
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

const Footer = () => {
  return(
    <Container className="footer pt-5 pb-3" fluid>
      <Row>
        <Col xs={12} md={6}>
          <div>
            Swami Ayurveda
          </div>
          <p>Take control of your credit and identity</p>
          <p>Copyright © Bloom Protocol</p>
        </Col>
        <Col xs={12} md={6}>
          <Row className="p-3">
            <Col xs={6} md={6} lg={4}>
              <ul class="footer-list">
                <li class="footer-list-header">Company</li>
                <li><a class="footer-list-item" href="/about">About Us</a></li>
                <li><a class="footer-list-item" href="https://bloom.co/blog">Blog</a></li>
                <li><a class="footer-list-item" href="/whitepaper.pdf">White Paper</a></li>
                <li><a class="footer-list-item" href="/careers">Careers</a></li>
                <li><a class="footer-list-item" href="mailto:support@bloom.co">Contact Us</a></li>
                <li><a class="footer-list-item" href="/token">Smart Token</a></li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={4}>
              <ul class="footer-list">
                <li class="footer-list-header">Community</li>
                <li><a class="footer-list-item" href="https://t.me/bloomprotocol">Telegram</a></li>
                <li><a class="footer-list-item" href="https://twitter.com/bloom">Twitter</a></li>
                <li><a class="footer-list-item" href="https://www.facebook.com/bloomtoken">Facebook</a>
                </li>
                <li><a class="footer-list-item" href="https://www.reddit.com/r/BloomToken/">Reddit</a>
                </li>
                <li><a class="footer-list-item"
                    href="https://www.youtube.com/c/bloomprotocol">YouTube</a></li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={4}>
              <ul class="footer-list">
                <li class="footer-list-header">Legal</li>
                <li><a class="footer-list-item" href="/legal/privacy">Privacy Policy</a></li>
                <li><a class="footer-list-item" href="/legal/terms">Terms of Service</a></li>
                <li><a class="footer-list-item" href="/legal/cookies">Cookie Policy</a></li>
                <li><a class="footer-list-item" href="/legal/affiliate-disclosures">Affiliate
                    Disclosures</a></li>
              </ul>
            </Col>
          </Row>
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
      <React.Fragment>
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;