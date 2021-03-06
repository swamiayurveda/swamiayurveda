import React from 'react';
import { Link } from "react-router-dom";
import cx from 'classnames';
import { Col, Row } from 'react-bootstrap';

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
  constructor(props) {
    super(props);

    this.state = {
      sidebarClosed: false,
    };
  }

  toggleSidebar = () => this.setState(prevProps => ({ sidebarClosed: !prevProps.sidebarClosed }))

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
    const { sidebarClosed } = this.state;

    return (
      <div className="page-container browse-container d-flex" ref={ref => { this.container = ref }}>
        <FilterBar closed={sidebarClosed} toggleSidebar={this.toggleSidebar} />
        <div className={cx('browse-inner-container', { 'sidebard-closed': sidebarClosed })}>
          <SearchBar ref={ref => { this.searchBar = ref }} />
          <Row className="catalog-row" noGutters>
            {cards.map(card => (
              <Col
                className="item-col"
                as={Link}
                key={`card-${card.id}`}
                to={`/remedy/${card.id}`}
                lg={3}
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
