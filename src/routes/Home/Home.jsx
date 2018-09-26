import React from 'react';
import { Link } from "react-router-dom";

import Card from 'components/Card';
import Footer from 'components/Footer';
import FilterBar from 'components/FilterBar';
import SearchBar from 'components/SearchBar';

import image from '../../images/icon-tertiary.png';
import booksIcon from '../../images/books.svg';
import plantIcon from '../../images/plant.svg';
import recipeIcon from '../../images/recipe.svg';
import mortarIcon from '../../images/mortar.svg';
import bodyIcon from '../../images/body.svg';
import pillIcon from '../../images/pill.svg';

import './style.scss';

const navbarHeight = 52;

const cards = [
  {
    id: 1,
    image: mortarIcon,
    title: 'Remedies',
  },
  {
    id: 2,
    image: plantIcon,
    title: 'Herbs & Spices',
  },
  {
    id: 3,
    image: recipeIcon,
    title: 'Recipes',
  },
  {
    id: 4,
    image: bodyIcon,
    title: 'My Dosha',
  },
  {
    id: 5,
    image: booksIcon,
    title: 'Learn Ayurveda',
  },
  {
    id: 6,
    image: pillIcon,
    title: 'Supplement Reviews',
  },
];

class Home extends React.Component {
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
      <div style={{ marginTop: navbarHeight + 50 }}>
        <h2 class="title is-2" style={{ fontSize: "5.2rem" }}>
          {/* <img style={{ height: 60 }} src={image} alt="logo" /> */}
          <span>Coming Soon</span>
        </h2>
        <Footer />
        <div className="is-flex" ref={ref => { this.container = ref }}>
          <div className="container card-container">
            <div style={{ marginTop: 0 }}>
              <SearchBar />
            </div>
            <div className="columns car-columns is-multiline">
              {cards.map(card => (
                <div key={`card-${card.id}`} className="column is-one-third-desktop is-half-tablet is-half-mobile">
                  <a onClick={() => alert('Coming Soon: ' + card.title)}>
                    <Card image={card.image}>{card.title}</Card>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
