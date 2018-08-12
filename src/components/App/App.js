import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from 'components/Navbar';
import Browse from 'routes/Browse';
import Finance from 'routes/Finance';
import About from 'routes/About';
import Terms from 'routes/Terms';
import PrivacyPolicy from 'routes/PrivacyPolicy';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Route exact path="/" component={Browse} />
            <Route path="/finance" component={Finance} />
            <Route path="/about" component={About} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={PrivacyPolicy} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
