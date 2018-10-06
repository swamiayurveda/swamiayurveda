import React from 'react';
import { Link } from "react-router-dom";

import Browse from 'routes/Browse';

import Footer from 'components/Footer';
import SubscribeForm from 'components/SubscribeForm';

import './style.scss';

const navbarHeight = 52;

class Home extends React.Component {
  render() {
    return (
      <div style={{ marginTop: navbarHeight }}>
        <section class="hero home-hero">
          <div class="hero-body">
            <div class="container">
              <div style={{ color: 'white', fontSize: "5.2rem", fontWeight: 'bolder' }}>
                {/* <img style={{ height: 60 }} src={image} alt="logo" /> */}
                <span>Coming Soon</span>

                {/* <SearchBar /> */}
              </div>
              <Footer />
              <SubscribeForm />
              <div className="subtitle m-b-lg" style={{ color: 'white' }}>Sign up to get early notifications and beta features</div>
            </div>
          </div>
        </section>
        <Browse />
      </div>
    );
  }
};

export default Home;
