import React from 'react';
import PropTypes from 'prop-types';
import plantIcon from '../../images/plant.svg';
import bodyIcon from '../../images/body.svg';
import mortarIcon from '../../images/mortar.svg';

import DescriptionItem from 'components/DescriptionItem';

import './style.scss';

const Overview = () => (
  <div className="columns is-multiline">
    <div className="column is-one-third-desktop is-half-tablet is-half-mobile">
      <DescriptionItem
        title="Dosha"
        description="100,000"
        iconSrc={bodyIcon}
      />
    </div>
    <div className="column is-one-third-desktop is-half-tablet">
      <DescriptionItem
        title="Plant"
        description="28/35"
        iconSrc={plantIcon}
      />
    </div>
    <div className="column is-one-third-desktop is-half-tablet">
      <DescriptionItem
        title="Benefits"
        description="100,000"
        iconSrc={mortarIcon}
      />
    </div>
  </div>
);

const Detail = (props) => {
  const { make, model, year, miles, price, imageURL } = props;

  return (
    <div className="car-detail-container">
      <div className="car-banner level m-b-none">
        <div className="level-left">
          <span className="is-size-5">
            <strong>{year}</strong>&nbsp;<span className="car-title">{`${make} ${model}`}</span>
          </span>
        </div>
        <div className="level-right">
          <div>
            <p className="is-size-6">
              ${price}
            </p>
            <p className="is-size-7 has-text-grey">
              {miles} miles
            </p>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-fifths-desktop">
          <figure className="detail-image image is-square">
            <img src={imageURL} alt="car-sample" />
          </figure>
        </div>
        <div className="column is-two-fifths-desktop">
          <div className="tabs is-centered">
            <ul>
              <li className="is-active"><a>Overview</a></li>
              <li><a>Pricing</a></li>
              <li><a>Features</a></li>
            </ul>
          </div>
          <Overview />
        </div>
      </div>
      <div className="column is-full">
        <div className="title is-size-3">Description</div>
      </div>
      <div className="column is-full">
        <div className="title is-size-3">Recommendations</div>
        <a rel="noopener noreferrer" href="https://www.amazon.com/Organic-Ashwagandha-Root-Powder-Resealable/dp/B01D9OS7SK/ref=as_li_ss_il?s=home-garden&ie=UTF8&qid=1538894325&sr=1-6&keywords=ashwagandha&refinements=p_72:1248915011&th=1&linkCode=li2&tag=ayurveda009-20&linkId=aba8cdebb072436f6ca45e91a29a6099&language=en_US" target="_blank">
          <img alt="produt" border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01D9OS7SK&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=ayurveda009-20&language=en_US" />
        </a>
      </div>
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
