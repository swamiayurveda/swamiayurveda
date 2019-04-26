import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';


import i18n from '../../i18n';
import './style.scss';

const ServiceModal = ({ history }) => {
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};


export default withRouter(ServiceModal);
