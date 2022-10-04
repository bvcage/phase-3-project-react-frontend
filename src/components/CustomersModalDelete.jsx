import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function CustomersModalDelete (props) {
   const { showModal, hideModal, customer, onClickDelete } = props
   const { id, first_name, last_name } = customer

   function handleClickDelete () {
      onClickDelete(customer)
   }
   return (
      <Modal show={showModal} onHide={hideModal}>
         <Modal.Header closeButton>
            <Modal.Title>Delete Customer</Modal.Title>
         </Modal.Header>
         <Modal.Body>{`Are you sure you want to delete ${first_name} ${last_name} [id#${id}]?`}</Modal.Body>
         <Modal.Footer>
            <Button variant="danger" onClick={handleClickDelete}>DELETE</Button>
            <Button variant="outline-secondary" onClick={hideModal}>cancel</Button>
         </Modal.Footer>
      </Modal>
   )
}

export default CustomersModalDelete