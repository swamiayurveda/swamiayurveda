import React from 'react';
import { Link } from "react-router-dom";

import Card from 'components/Card';
import Footer from 'components/Footer';
import SubscribeForm from 'components/SubscribeForm';
import SearchBar from 'components/SearchBar';

import navItems from '../../data';

import './style.scss';

const navbarHeight = 52;

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
        <div class="title" style={{ fontSize: "5.2rem" }}>
          {/* <img style={{ height: 60 }} src={image} alt="logo" /> */}
          <span>Coming Soon</span>
        </div>
        <Footer />
        <div className="is-flex" ref={ref => { this.container = ref }}>
          <div className="container card-container">
            <div style={{ marginTop: 0 }}>
              <SearchBar />
            </div>
            <div className="columns car-columns is-multiline">
              {navItems.map(item => (
                <div key={`item-${item.id}`} className="column is-one-third-desktop is-half-tablet is-one-mobile">
                  <a onClick={() => alert('Coming Soon: ' + item.title)}>
                    <Card image={item.image}>{item.title}</Card>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SubscribeForm />
        <div className="subtitle m-b-lg" style={{ color: 'white' }}>Sign up to get early notifications and beta features</div>
      </div>
    );
  }
};

export default Home;
