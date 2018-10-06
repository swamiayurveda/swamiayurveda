import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
// import ComingSoon from 'routes/ComingSoon';
import Home from 'routes/Home';
import Browse from 'routes/Browse';
import Detail from 'routes/Detail';
import Terms from 'routes/Terms';
import PrivacyPolicy from 'routes/PrivacyPolicy';

import './App.scss';

class App extends Component {
  render() {
    // return ( <ComingSoon />);

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/browse" component={Browse} />
            <Route path="/remedy/:name" component={Detail} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={PrivacyPolicy} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
