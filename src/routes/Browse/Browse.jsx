import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col, Row, Card } from 'react-bootstrap';

import ItemCard from 'components/ItemCard';
import FilterBar from 'components/FilterBar';
import SearchBar from 'components/SearchBar';

import './style.scss';

const dummies = [
  {
    id: 1,
    title: 'Ashwaghanda',
    imageURL: "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/1296x728_HEADER_Ashwagandha_Health-Benefits-and-Side-Effects.jpg",
  },
  {
    id: 2,
    title: 'Herb',
    imageURL: "https://5.imimg.com/data5/UX/NU/MY-35858390/pure-turmeric-powder-500x500.jpg",
  },
  {
    id: 3,
    title: 'Ghee',
    imageURL: "https://southcoastsun.co.za/wp-content/uploads/sites/39/2015/08/honey_666944763.jpg",
  },
  {
    id: 4,
    title: 'Honey',
    imageURL: "http://www.pachaa.in/image/cache/catalog/buy-carom-seeds-100gms-500x500.jpg",
  },
];

const cards = [...dummies];

class Browse extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      if (this.container) {
        if (window.pageYOffset > (this.container.offsetTop)) {
          this.searchBar.container.classList.add("sticky")
        } else {
          this.searchBar.container.classList.remove("sticky");
        }
      }
    };
  }

  render() {
    return (
      <div className="browse-container d-flex" ref={ref => { this.container = ref }}>
        <FilterBar />
        <div className="browse-inner-container">
          <SearchBar ref={ref => { this.searchBar = ref }} />
          <Row className="catalog-row" noGutters>
            {cards.map(card => (
              <Col
                className="item-col"
                as={Link}
                key={`card-${card.id}`}
                to={`/remedy/${card.id}`}
                lg={4}
                md={6}
                sm={12}
              >
                <ItemCard {...card} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
};

export default Browse;
