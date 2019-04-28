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
import land from '../../images/land.svg';
import i18n from '../../i18n';

import SubscribeForm from 'components/SubscribeForm';

import './style.scss';

const Intro = () => {
  return(
    <Container className="intro-section" fluid>
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
            type
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
      <Row className="mt-3" noGutters>
        <Col>
          <img style={{ width: '100%', height: '100%' }} src={land} />
        </Col>
      </Row>
    </Container>
  );
};

const Overview = () => {
  return(
    <Container className="overview-section">
      <Row className="mt-5">
        <Col className="d-none d-md-block">
        </Col>
        <Col>
          <h3 className="text-left mb-5">{i18n.what_is_ayurveda}</h3>
          <p className="text-left lh-2">{i18n.ayurveda_desc}</p>
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
          <div className="page-subheader mt-4">
            {i18n.sign_up_subscribe}
          </div>
          <SubscribeForm />
        </Col>
      </Row>
    </Container>
  );
};

const Pitch = () => {
  return(
    <div className="pitch-section pt-5 pb-3">
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
                <div className="text-center mb-4">
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
                <Card.Text className="mt-4">
                  {i18n.vata_desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-5">
            <Card className="text-center">
              <Card.Body>
                <div className="text-center mb-4">
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
                <Card.Text className="mt-4">
                  {i18n.kapha_desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-5">
            <Card className="text-center">
              <Card.Body>
                <div className="text-center mb-4">
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
                <Card.Text className="mt-4">
                  {i18n.pitta_desc}
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
        <div className="page-container">
          <Intro />
          <Overview />
          <Pitch />
          <PreFooter />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;