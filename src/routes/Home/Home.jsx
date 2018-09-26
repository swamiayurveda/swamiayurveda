import React from 'react';
import { Link } from "react-router-dom";

import CarCard from 'components/CarCard';
import FilterBar from 'components/FilterBar';
import SearchBar from 'components/SearchBar';

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
      <div style={{ marginTop: navbarHeight }}>
        <h1 class="title is-1">How can we help?</h1>
      </div>
    );
  }
};

export default Home;
