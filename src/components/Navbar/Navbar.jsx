import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';

import { setNavbarToggler } from './util';
import navItems from '../../data';
import image from '../../images/icon-tertiary.png';

import './style.scss';

class Navbarr extends React.Component {
  componentDidMount() {
    setNavbarToggler();
  }

  render() {
    return (
      <Navbar bg="white" expand="lg">
        <Container className="mt-3">
          <Navbar.Brand className="navbar-item" as={Link} to="/">
            {/* <Link className="navbar-item" to="/"> */}
              <img className="navbar-logo" src={image} alt="logo" />
              <span className="title ml-3">Swami Ayurveda</span>
            {/* </Link> */}
          </Navbar.Brand>
          <Navbar.Toggle className="rounded-pill" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navItems.map(item => (
                <Nav.Item key={item.to}>
                  <Link className="nav-link" to={item.to}>
                    <img className="mr-2" style={{ height: 20 }} src={item.image} alt="logo" />
                    <span>{item.title}</span>
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};


export default withRouter(Navbarr);
