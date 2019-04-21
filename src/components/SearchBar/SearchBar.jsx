import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, Form } from 'react-bootstrap';

import './style.scss';

class SearchBar extends React.Component {
  render() {
    // const { id, make, model, year, miles, price } = this.props;

    return (
      <div ref={ref => { this.container = ref }} className="search-bar">
        <div className="d-flex">
          <Form.Control className="search-control" size="lg" type="text" placeholder="Search keywords" />
          <Button>
            <i className="fas fa-search"></i>
          </Button>
          {/* <Button variant="outline-danger">
            <i className="fas fa-times has-text-red"></i>
          </Button> */}
        </div>
      </div>
    );
  }
};

SearchBar.defaultProps = {
};

SearchBar.propTypes = {
};


export default SearchBar;
