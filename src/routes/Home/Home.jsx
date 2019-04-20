import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import air from '../../images/doshas/air.svg';
import fire from '../../images/doshas/fire.svg';
import earth from '../../images/doshas/earth.svg';
import ether from '../../images/doshas/ether.svg';
import water from '../../images/doshas/water.svg';

import Browse from 'routes/Browse';

// import Footer from 'components/Footer';
import SubscribeForm from 'components/SubscribeForm';

import './style.scss';

const navbarHeight = 52;
const i18n = {
  swami_ayurveda: 'Swami Ayurveda',
  header: 'Lorem ipsum dolor',
  header2: 'consectetur adipiscing elit',
  subheader: 'Lorem ipsum dolor',
  subheader2: 'consectetur adipiscing elit',
  get_started: 'Get Started',
  learn_more: 'Learn More',
  what_is_ayurveda: 'What is Ayurveda?',
  ayurveda_desc: 'Bloom is an end-to-end protocol for identity attestation, risk assessment, and credit scoring; entirely on the blockchain. Bloom allows both traditional and digital currency lenders to serve billions of people who currently cannot obtain a bank account or credit score.',
  doshas: 'Doshas',
  dosha_desc: 'The Bloom Protocol provides solutions allowing any lender authorized by a borrower to safely and securely issue credit to that borrower.',
  dosha_desc2: 'The three main components of the Bloom Protocol are:',
  earth: 'Earth',
  fire: 'Fire',
  air: 'Air',
  ether: 'Ether',
  water: 'Water',
}

const Intro = () => {
  return(
    <Container className="intro-section">
      <Row className="mt-5">
        <Col>
          <h1 className="big-header">
            <div>{i18n.header}</div>
            <div>{i18n.header2}</div>
          </h1>
          <div class="header-desc mt-4">
            <div>{i18n.subheader}</div>
            <div>{i18n.subheader2}</div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button
            className="rounded-pill px-5"
            variant="success"
            size="lg"
          >
            {i18n.get_started}
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button
            className="rounded-pill"
            variant="outline-secondary"
          >
            {i18n.learn_more}
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {/* <img src={flower} /> */}
        </Col>
      </Row>
    </Container>
  );
};

const Overview = () => {
  return(
    <Container className="overview-section">
      <Row className="mt-5">
        <Col>
        </Col>
        <Col>
          <h3 class="text-left mb-5">{i18n.what_is_ayurveda}</h3>
          <p class="text-left">{i18n.ayurveda_desc}</p>
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
          <div>{i18n.swami_ayurveda}</div>
          <p>{`${i18n.header} ${i18n.header2}`}</p>
          <p>Copyright © {i18n.swami_ayurveda}</p>
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

const Pitch = () => {
  return(
    <div className="pitch-section pb-3">
      <Container>
        <Row>
          <Col className="mb-4 text-light" xs={12}>
            <h1>{i18n.doshas}</h1>
            <p class="description">{i18n.dosha_desc}</p>
            <p class="description">{i18n.dosha_desc2}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-5">
            <Card className="text-center">
              <Card.Body>
                <div class="text-center mb-4">
                  <Row noGutters>
                    <Col>
                      <small>{i18n.ether}</small>
                      <Image src={ether} roundedCircle />
                    </Col>
                    <Col>
                      <small>{i18n.air}</small>
                      <Image src={air} roundedCircle />
                    </Col>
                  </Row>
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
                  <Row noGutters>
                    <Col>
                      <small>{i18n.earth}</small>
                      <Image src={earth} roundedCircle />
                    </Col>
                    <Col>
                      <small>{i18n.water}</small>
                      <Image src={water} roundedCircle />
                    </Col>
                  </Row>
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
                  <Row noGutters>
                    <Col>
                      <small>{i18n.earth}</small>
                      <Image src={earth} roundedCircle />
                    </Col>
                    <Col>
                      <small>{i18n.fire}</small>
                      <Image src={fire} roundedCircle />
                    </Col>
                  </Row>
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
    </div>
  );
};

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: navbarHeight }}>
          <Intro />
          <Overview />
          <Pitch />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;