import React from 'react';

import CarCard from 'components/CarCard';
import FilterBar from 'components/FilterBar';
import SearchBar from 'components/SearchBar';

import './style.scss';

const dummies = [
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/13255311/1056070313.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/18877910/1054729045.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19746068/thumb/1054745774.jpg",
  },
  {
    imageURL: "https://cdn04.carsforsale.com/3/544555/19843851/thumb/1056708489.jpg",
  },
];

const cards = [...dummies, ...dummies, ...dummies, ...dummies, ...dummies, ...dummies, ...dummies, ...dummies];

const navbarHeight = 52;

class Browse extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset > (this.container.offsetTop - navbarHeight)) {
        this.searchBar.container.classList.add("sticky")
      } else {
        this.searchBar.container.classList.remove("sticky");
      }
    };
  }

  render() {
    return (
      <div>
        <section className="hero is-medium is-info is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Primary bold title
              </h1>
              <h2 className="subtitle">
                Primary bold subtitle
              </h2>
            </div>
          </div>
        </section>
        <div className="is-flex" ref={ref => { this.container = ref }}>
          <FilterBar />
          <div className="car-browse-container">
            <SearchBar ref={ref => { this.searchBar = ref }} />
            <div className="columns car-columns is-gapless is-multiline">
              {cards.map(card => (
                <div className="column is-one-fifth-desktop is-one-third-tablet is-half-mobile">
                  <CarCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Browse;
