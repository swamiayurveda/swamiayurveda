import React, { Component, lazy } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
// import ComingSoon from 'routes/ComingSoon';
import Home from 'routes/Home';
// import Browse from 'routes/Browse';
// import Detail from 'routes/Detail';
// import Terms from 'routes/Terms';
// import PrivacyPolicy from 'routes/PrivacyPolicy';
import About from 'routes/About';
import Services from 'routes/Services';
import ServiceModal from 'routes/Services/ServiceModal';
import BookOnline from 'routes/BookOnline';
// import Dosha from 'routes/Dosha';

// const Browse = lazy(() => (
//   import('routes/Home')
// ));

import './App.scss';

class App extends Component {
  render() {
    // return ( <ComingSoon />);

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="app-body">
          <div className="page-bg"></div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/browse" component={Browse} /> */}
            {/* <Route path="/remedy/:name" component={Detail} /> */}
            <Route path="/services" component={Services} />
            <Route path="/services/:name" component={ServiceModal} />
            <Route path="/book" component={BookOnline} />
            {/* <Route path="/dosha" component={Dosha} /> */}
            <Route path="/about" component={About} />
            {/* <Route path="/terms" component={Terms} /> */}
            {/* <Route path="/privacy" component={PrivacyPolicy} /> */}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
