import React from 'react';

import { setNavbarToggler } from './util';
import './style.scss';

class Navbar extends React.Component {
  componentDidMount() {
    setNavbarToggler();
  }

  render() {
    return (
      <nav className="navbar is-transparent">
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
            <a className="navbar-item"><i className="far fa-star"></i></a>
            <a className="navbar-item" href="https://bulma.io/">Browse</a>
            <a className="navbar-item" href="https://bulma.io/">Sell</a>
            <a className="navbar-item" href="https://bulma.io/">Financing</a>
            <a className="navbar-item" href="https://bulma.io/">About Us</a>
          </div>
        </div>
      </nav>
    );
  }
};


export default Navbar;
