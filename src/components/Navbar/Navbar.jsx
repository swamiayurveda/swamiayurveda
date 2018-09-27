import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

import { setNavbarToggler } from './util';
import navItems from '../../data';

import image from '../../images/icon-tertiary.png';

import './style.scss';



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
            {navItems.map(item => (
              <a className="navbar-item" onClick={() => alert('Coming Soon')}>
                <img style={{ height: 20 }} src={item.image} alt="logo" />
                <span className="m-l-sm">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
};


export default withRouter(Navbar);
