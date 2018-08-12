import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

import { setNavbarToggler } from './util';
import './style.scss';

class Navbar extends React.Component {
  componentDidMount() {
    setNavbarToggler();
  }

  render() {
    return (
      <nav className="navbar has-shadow">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img className="navbar-logo" src="http://inddc.in/webroot/assets/img/sample/shortcode/logo/1.png" alt="logo" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
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
