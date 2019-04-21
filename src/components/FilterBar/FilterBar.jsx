import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';

import './style.scss';

class FilterBar extends React.Component {
  state = {
    maxPrice: 10,
    maxMiles: 10,
  };

  handlePriceChange = e => this.setState({ maxPrice: e.target.value });
  handleMilesChange = e => this.setState({ maxMiles: e.target.value });

  render() {
    // const { id, make, model, year, miles, price } = this.props;
    const { maxPrice, maxMiles } = this.state;

    return (
      <div className="filter-sidebar-wrapper p-md margined-rows">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Price</Card.Title>
                <Card.Text>
                  <div>{maxPrice}k</div>
                  <input
                    className="slider is-fullwidth"
                    value={maxPrice}
                    onChange={this.handlePriceChange}
                    step="10"
                    min="10"
                    max="100"
                    type="range"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Mileage</Card.Title>
                <Card.Text>
                  <div>{maxMiles}k</div>
                  <input
                    className="slider is-fullwidth"
                    value={maxMiles}
                    onChange={this.handleMilesChange}
                    step="10"
                    min="10"
                    max="120"
                    type="range"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
};

FilterBar.defaultProps = {
};

FilterBar.propTypes = {
};


export default FilterBar;
