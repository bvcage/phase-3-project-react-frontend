import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CheckOutModal ({ smShow, setSmShow }) {

    return (
        <>
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Success!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Check-Out successful!</Modal.Body>
          </Modal>
        </>
      );
}

export default CheckOutModal;