import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';

import './style.scss';

class FilterBar extends React.Component {
  state = {
    maxPrice: 10,
    maxMiles: 10,
  };

  handlePriceChange = e => this.setState({ maxPrice: e.target.value });
  handleMilesChange = e => this.setState({ maxMiles: e.target.value });

  render() {
    const { maxPrice, maxMiles } = this.state;
    const { closed, toggleSidebar } = this.props;

    return (
      <div className={cx('filter-sidebar-wrapper', 'p-md', 'margined-rows', { close: closed })}>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Conditions</Card.Title>
                <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item action href="#link1">
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 2
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 3
                  </ListGroup.Item>
                </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Conditions</Card.Title>
                <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item action href="#link1">
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 2
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 3
                  </ListGroup.Item>
                </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="toggle-button" onClick={toggleSidebar}>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
      </div>
    );
  }
};

FilterBar.defaultProps = {
};

FilterBar.propTypes = {
};


export default FilterBar;
