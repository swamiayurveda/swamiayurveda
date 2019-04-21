import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row, Image, Nav } from 'react-bootstrap';

import plantIcon from '../../images/plant.svg';
import bodyIcon from '../../images/body.svg';
import mortarIcon from '../../images/mortar.svg';

import DescriptionItem from 'components/DescriptionItem';

import './style.scss';

const Overview = () => (
  <Row>
    <Col>
      <DescriptionItem
        title="Dosha"
        description="100,000"
        iconSrc={bodyIcon}
      />
    </Col>
    <Col>
      <DescriptionItem
        title="Plant"
        description="28/35"
        iconSrc={plantIcon}
      />
    </Col>
    <Col>
      <DescriptionItem
        title="Benefits"
        description="100,000"
        iconSrc={mortarIcon}
      />
    </Col>
  </Row>
);

const Detail = (props) => {
  const { make, model, year, miles, price, imageURL } = props;

  return (
    <div className="car-detail-container">
      <Row className="car-banner" noGutters>
        <Col>
          <h5>
            <strong>{year}</strong>&nbsp;<span className="car-title">{`${make} ${model}`}</span>
          </h5>
        </Col>
        <Col className="text-right">
          <h5>${price}</h5>
          <h6>{miles} miles</h6>
        </Col>
      </Row>

      <Row noGutters>
        <Col lg={4}>
          <Image src={imageURL} alt="car-sample" fluid/>
        </Col>
        <Col lg={6}>
          <Nav variant="tabs" defaultActiveKey="/home" fill>
            <Nav.Item>
              <Nav.Link>Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Features</Nav.Link>
            </Nav.Item>
          </Nav>
          <Overview />
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <h3>Description</h3>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <h3>Recommendations</h3>
          <a rel="noopener noreferrer" href="https://www.amazon.com/Organic-Ashwagandha-Root-Powder-Resealable/dp/B01D9OS7SK/ref=as_li_ss_il?s=home-garden&ie=UTF8&qid=1538894325&sr=1-6&keywords=ashwagandha&refinements=p_72:1248915011&th=1&linkCode=li2&tag=ayurveda009-20&linkId=aba8cdebb072436f6ca45e91a29a6099&language=en_US" target="_blank">
            <img alt="produt" border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01D9OS7SK&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=ayurveda009-20&language=en_US" />
          </a>
        </Col>
      </Row>
    </div>
  );
};


Detail.defaultProps = {
  id: 0,
  make: 'Chevrolet',
  model: 'Camaro LT Coupe',
  year: 2018,
  miles: 100000,
  price: 233050,
  imageURL: 'https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/1296x728_HEADER_Ashwagandha_Health-Benefits-and-Side-Effects.jpg',
};

Detail.propTypes = {
  id: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  miles: PropTypes.number,
  price: PropTypes.number,
  imageURL: PropTypes.string,
};

export default Detail;
