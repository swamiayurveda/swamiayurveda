import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
} from 'react-bootstrap';

import { setNavbarToggler } from './util';
import navItems from '../../data';
import bodyIcon from '../../images/body.svg';
import image from '../../images/icon-tertiary.png';

import './style.scss';

class Navbarr extends React.Component {
  componentDidMount() {
    setNavbarToggler();
  }

  render() {
    const isLoginAvailable = false;

    return (
      <Navbar className="app-navbar" bg="white" expand="lg">
        <Navbar.Brand className="navbar-item" as={Link} to="/">
          <img className="navbar-logo" src={image} alt="logo" />
          <span className="title ml-3">Swami Ayurveda</span>
        </Navbar.Brand>
        <Navbar.Toggle className="rounded-pill" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {navItems.map(item => (
              <Nav.Item key={item.to}>
                <Link className="nav-link" to={item.to}>
                  {/* <img className="mr-2" style={{ height: 20 }} src={item.image} alt="logo" /> */}
                  <span>{item.title}</span>
                </Link>
              </Nav.Item>
            ))}
            {isLoginAvailable &&
              <Dropdown className="nav-avatar-dropdown">
                <Dropdown.Toggle class="nav-avatar-toggle" as="div">
                  <Nav.Item className="navbar-avatar">
                    <i class="far fa-user text-success"></i>
                  </Nav.Item>
                </Dropdown.Toggle>

                <Dropdown.Menu className="nav-avatar-menu" alignRight>
                  <div className="nav-avatar-container mb-3">
                    <div className="nav-avatar-item">Pauras Swami</div>
                    <div className="nav-avatar-item">pauras53@yahoo.com</div>
                  </div>
                  <Dropdown.Item href="">
                    <i class="fas fa-cog mr-2" />
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="">
                    <i class="fas fa-sign-out-alt mr-2" />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};


export default withRouter(Navbarr);
