import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import CustomersForm from './CustomersForm'

function CustomersModalEdit( props ) {
   const { showModal, hideModal, onClickSave } = props

   const [customer, setCustomer] = useState(props.customer)

   function editCustomer (editedCustomer) {
      setCustomer(editedCustomer)
   }

   function handleSave () {
      onClickSave(customer)
   }

   return (
      <Modal show={showModal} onHide={hideModal}>
         <Modal.Header closeButton>
            <Modal.Title>Edit Customer</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <CustomersForm customerToEdit={customer} onEditCustomer={editCustomer} />
         </Modal.Body>
         <Modal.Footer>
            <Button variant="success" onClick={handleSave}>SAVE</Button>
            <Button variant="outline-secondary" onClick={hideModal}>cancel</Button>
         </Modal.Footer>
      </Modal>
   )
}

export default CustomersModalEdit