import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

import { setNavbarToggler } from './util';

import image from '../../images/icon-tertiary.png';
import booksIcon from '../../images/books.svg';
import plantIcon from '../../images/plant.svg';
import recipeIcon from '../../images/recipe.svg';
import mortarIcon from '../../images/mortar.svg';
import bodyIcon from '../../images/body.svg';
import pillIcon from '../../images/pill.svg';

import './style.scss';

const items = [
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

class Navbar extends React.Component {
  componentDidMount() {
    setNavbarToggler();
  }

  render() {
    return (
      <nav className="navbar has-shadow is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img className="navbar-logo" src={image} alt="logo" />
            <span className="title is-5 m-l-md">Swami Ayurveda</span>
          </Link>
          <div className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            {items.map(item => (
              <a className="navbar-item" onClick={() => alert('Coming Soon')}>
                <img style={{ height: 20 }} src={item.image} alt="logo" />
                <span className="m-l-md">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
};


export default withRouter(Navbar);
