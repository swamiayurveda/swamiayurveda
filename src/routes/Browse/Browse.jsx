import React from 'react';
import { Link } from "react-router-dom";

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

const navbarHeight = 52;

class Browse extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      if (this.container) {
        if (window.pageYOffset > (this.container.offsetTop - navbarHeight)) {
          this.searchBar.container.classList.add("sticky")
        } else {
          this.searchBar.container.classList.remove("sticky");
        }
      }
    };
  }

  render() {
    return (
      <div className="is-flex" ref={ref => { this.container = ref }}>
        <FilterBar />
        <div className="car-browse-container">
          <SearchBar ref={ref => { this.searchBar = ref }} />
          <div className="columns car-columns is-multiline">
            {cards.map(card => (
              <div key={`card-${card.id}`} className="column is-one-fifth-desktop is-one-half-tablet is-half-mobile">
                <Link to={`/remedy/${card.id}`}>
                  <ItemCard {...card} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Browse;
