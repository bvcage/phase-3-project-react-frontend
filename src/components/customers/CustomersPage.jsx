import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../NavBar'
import CustomersForm from './CustomersForm'
import CustomersContainer from './CustomersContainer'
import CustomersModalDelete from './CustomersModalDelete'
import CustomersModalEdit from './CustomersModalEdit'

function CustomersPage () {

   const [customers, setCustomers] = useState([])
   const [selectedCustomer, setSelectedCustomer] = useState()
   const [showDeleteModal, setShowDeleteModal] = useState(false)
   const [showEditModal, setShowEditModal] = useState(false)

   useEffect(() => {
      fetch("http://localhost:9292/customers")
      .then(r => r.json())
      .then(res => {
         const customersData = res.data.map(customer => {
            customer.join_date = new Date(Date.parse(customer.join_date))
            return customer
         })
         setCustomers(customersData)
      })
   }, [])

   function deleteSelectedCustomer () {
      fetch(`http://localhost:9292/customers/${selectedCustomer.id}/delete`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         }
      })
      .then(() => {
         const updatedList = customers.filter(customer => customer.id !== selectedCustomer.id)
         setCustomers(updatedList)
         hideModal()
      })
   }

   function handleClickDelete (customer) {
      setSelectedCustomer(customer)
      setShowDeleteModal(true)
   }

   function handleEditCustomer (customer) {
      setSelectedCustomer(customer)
      setShowEditModal(true)
   }

   function handleNewCustomer (customer) {
      const newJoinDate = new Date(Date.parse(customer.join_date))
      const newCustomer = {...customer,
         join_date: newJoinDate
      }
      setCustomers([...customers, newCustomer])
   }

   function hideModal () {
      setShowDeleteModal(false)
      setShowEditModal(false)
   }

   function editSelectedCustomer (editedCustomer) {
      setSelectedCustomer(editedCustomer)
      fetch(`http://localhost:9292/customers/${editedCustomer.id}/edit`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(editedCustomer)
      }).then(r => r.json())
      .then(res => {
         const updatedList = customers.map(customer => {
            if (customer.id === editedCustomer.id) { return res.data }
            return customer
         })
         setCustomers(updatedList)
         hideModal()
      })
   }

   const deleteModal = (
      <CustomersModalDelete
         showModal={showDeleteModal}
         hideModal={hideModal}
         customer={selectedCustomer}
         onClickDelete={deleteSelectedCustomer} />
   )

   const editModal = (
      <CustomersModalEdit
         showModal={showEditModal}
         hideModal={hideModal}
         customer={selectedCustomer} 
         onClickSave={editSelectedCustomer} />
   )
   
   return (
      <Container>
         <NavBar />
         <CustomersForm onNewAdd={handleNewCustomer} />
         <CustomersContainer customers={customers}
            onClickEdit={handleEditCustomer}
            onClickDelete={handleClickDelete} />

         {/* modal for deletion confirmation */}
         {showDeleteModal ? deleteModal : null}

         {/* modal for editing customer */}
         {showEditModal ? editModal : null}
      </Container>
   )
}

export default CustomersPage