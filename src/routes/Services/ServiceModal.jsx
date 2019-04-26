import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';


import i18n from '../../i18n';
import services from '../../data/services';
import './style.scss';

const ServiceModal = ({ history, match }) => {
  const { params } = match;
  const service = services[params.name];
  const onClose = () => history.push('/services');

  return (
    <Modal
      onHide={onClose}
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {service.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Overview</h4>
        <p>{service.overview}</p>
        <h4>Benfits</h4>
        <ul>
          {service.benefits.map(benefit => (
            <li>{benefit}</li>
          ))}
        </ul>
        <h4>Resources</h4>
        <ul>
          {service.resources.map(resource => (
            <li><a href={resource.url}>{resource.name}</a></li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};


export default withRouter(ServiceModal);
