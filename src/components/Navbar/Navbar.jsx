import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

import { setNavbarToggler } from './util';
import image from '../../images/logo.png';
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
          </Link>
          <div className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" onClick={() => alert('open favs')}><i className="far fa-star"></i></a>
            <Link className="navbar-item" to="/">Browse</Link>
            <Link className="navbar-item" to="/finance">Finance</Link>
            <Link className="navbar-item" to="/about">About Us</Link>
          </div>
        </div>
      </nav>
    );
  }
};


export default withRouter(Navbar);
