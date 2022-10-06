import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CheckOutModal ({ smShow, setSmShow }) {

    return (
        <>
          <Modal
            size="md"
            show={smShow}
            centered
            onHide={() => setSmShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Success!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Check-Out successful!</Modal.Body>
          </Modal>
        </>
      );
}

export default CheckOutModal;