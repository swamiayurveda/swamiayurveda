import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import logo2 from '../../images/logo-secondary-notext.png';
import air from '../../images/doshas/air.svg';
import fire from '../../images/doshas/fire.svg';
import earth from '../../images/doshas/earth.svg';
import ether from '../../images/doshas/ether.svg';
import water from '../../images/doshas/water.svg';
import land from '../../images/land.svg';
import plant2 from '../../images/plant2.svg';
import sunflower from '../../images/sunflower.svg';
import i18n from '../../i18n';

import SubscribeForm from 'components/SubscribeForm';
import SocialButtons from 'components/SocialButtons';

import './style.scss';

const Intro = () => {
  return(
    <Container className="intro-section d-flex flex-column" fluid>
      <Row className="mt-5">
        <Col>
          <h1 className="page-header">
            <div>{i18n.header}</div>
            <div>{i18n.header2}</div>
          </h1>
          <div className="page-subheader mt-4">
            <div>{i18n.subheader}</div>
            <div>{i18n.subheader2}</div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button
            as={Link}
            to="/book"
            className="rounded-pill px-5"
            variant="success"
            size="lg"
            type="true"
          >
            {i18n.book_appointment}
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button
            as={Link}
            to="/about"
            className="rounded-pill"
            variant="outline-secondary"
          >
            {i18n.learn_more}
          </Button>
        </Col>
      </Row>
      <Row className="mt-3 flex-grow-1 align-items-center" noGutters>
        <Col xs={5}>
          <div className="footer-divider" />
        </Col>
        <Col xs={2}>
          <img alt="logo" className="img-fluid" src={logo2} />
        </Col>
        <Col xs={5}>
          <div className="footer-divider" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <SocialButtons />
        </Col>
      </Row>
    </Container>
  );
};

const Overview = () => {
  return(
    <Container className="overview-section">
      <Row className="mt-5">
        <Col className="d-none d-md-flex justify-content-center align-items-center">
          <img alt="land" className="img-fluid" src={land} />
        </Col>
        <Col>
          <h3 className="mb-5">{i18n.what_is_ayurveda}</h3>
          <p className="lh-2">{i18n.ayurveda_desc}</p>
        </Col>
      </Row>
    </Container>
  );
};

const PreFooter = () => {
  return(
    <Container className="pre-footer-section">
      <Row className="my-5">
        <Col className="my-5">
          <div className="page-subheader d-inline-block bg-white mt-4">
            {i18n.sign_up_subscribe}
          </div>
          <SubscribeForm />
        </Col>
      </Row>
    </Container>
  );
};

const Dosha = () => {
  return(
    <div className="dosha-section pt-5 pb-3">
      <Image className="dosha-section-overhead" src={sunflower} />
      <Image className="dosha-section-underhead" src={plant2} />
      <Container>
        <Row>
          <Col className="mb-4 text-light" xs={12}>
            <div className="display-3 mb-4">{i18n.doshas}</div>
            <p className="description lh-2">{i18n.dosha_desc} {i18n.dosha_desc2}</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="mb-5">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <h2>Kapha</h2>
                </Card.Title>
                <div className="mt-4">
                  <Row noGutters>
                    <Col>
                      <Image src={earth} roundedCircle />
                      <small>{i18n.earth}</small>
                    </Col>
                    <Col>
                      <Image src={water} roundedCircle />
                      <small>{i18n.water}</small>
                    </Col>
                  </Row>
                  <br />
                  <strong>Responsibility</strong>
                  <p>stability in the body</p>
                  <strong>Qualities</strong>
                  <p>cold · heavy · oily · soft · slow · stable</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-5">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <h2>Vata</h2>
                </Card.Title>
                <div className="mt-4">
                  <Row noGutters>
                    <Col>
                      <Image src={ether} roundedCircle />
                      <small>{i18n.ether}</small>
                    </Col>
                    <Col>
                      <Image src={air} roundedCircle />
                      <small>{i18n.air}</small>
                    </Col>
                  </Row>
                  <br />
                  <strong>Responsibility</strong>
                  <p>movement in the body</p>
                  <strong>Qualities</strong>
                  <p>light · dry · cold · subtle · mobile</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-5">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <h2>Pitta</h2>
                </Card.Title>
                <div className="mt-4">
                  <Row noGutters>
                    <Col>
                      <Image src={fire} roundedCircle />
                      <small>{i18n.fire}</small>
                    </Col>
                    <Col>
                      <Image src={earth} roundedCircle />
                      <small>{i18n.earth}</small>
                    </Col>
                  </Row>
                  <br />
                  <strong>Responsibility</strong>
                  <p>transformation in the body</p>
                  <strong>Qualities</strong>
                  <p>hot · light · quick · sharp · oily</p>
                </div>
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
        <div className="page-container">
          <Intro />
          <Overview />
          <Dosha />
          <PreFooter />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;