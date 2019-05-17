import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';

import i18n from '../../i18n';
import AppoinmentScheduler from '../../components/AppoinmentScheduler';

var loadScript = function(src) {
  const script = document.createElement('script');
  const body = document.getElementById('square-scheduler');

  script.async = false;
  script.src = src;
  script.onload = function() {
    const body = document.getElementById('square-scheduler');
    const loading = document.getElementsByClassName('spinner-border')[0];

    if (body) {
      body.removeChild(loading);
    }
  }

  body.appendChild(script);
}

class BookOnline extends React.Component {
  componentDidMount() {
    loadScript('https://square.site/appointments/buyer/widget/8b66a829-b7cb-44c3-aacd-e3c6def2a4af/G9MRFZPF8VR2W.js')
  }

  render() {
    return (
      <Container className="page-container">
        <Row className="pt-5">
          <Col>
            <h1 className="page-header">
              <div>{i18n.book_appointment}</div>
            </h1>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
          <Card border="success">
              <Card.Body id="square-scheduler" className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col>
            <AppoinmentScheduler />
          </Col> */}
        </Row>
      </Container>
    );
  }
};


export default BookOnline;
