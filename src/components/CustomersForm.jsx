import React, { useState } from 'react'
import { Container, Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap'

function CustomersForm( props ) {
   const { onNewAdd, customerToEdit, onEditCustomer } = props

   const blankCustomer = {
      "first_name": '',
      "last_name": '',
      "email": '',
      "phone_number": ''
   }
   let defaultState = customerToEdit ? customerToEdit : blankCustomer
   const [customer, setCustomer] = useState(defaultState)
   const [showForm, setShowForm] = useState(!!customerToEdit)

   function handleChange (e) {
      const newCustomer = {...customer,
         [e.target.id]: e.target.value
      }
      setCustomer(newCustomer)
      onEditCustomer(newCustomer)
   }

   function handleReset () {
      setCustomer(blankCustomer)
   }

   function handleShowForm () {
      const newVal = !showForm
      if (newVal === false) { handleReset() }
      setShowForm(newVal)
   }

   function handleSubmit (e) {
      e.preventDefault()
      fetch("http://localhost:9292/customers", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(customer)
      })
      .then(r => r.json())
      .then(res => {
         handleReset()
         handleShowForm()
         onNewAdd(res.data)
      })
   }

   const showHideFormButton = (
      <Row className="mb-3">
         <Col></Col>
         <Col xs="auto">
            <Button
               type="button"
               onClick={handleShowForm}
               variant={ showForm ? "outline-secondary" : "primary"}>
                  { showForm ? "cancel" : "new customer" }
            </Button>
         </Col>
      </Row>
   )

   const submitFormButton = (
      <Row>
         <Col></Col>
         <Col xs="auto">
            <Button type="reset" variant="secondary" className="ms-2" onClick={handleReset}>clear</Button>
            <Button type="submit" variant="primary" className="ms-2">submit</Button>
         </Col>
      </Row>
   )

   const form = (
      <Form onSubmit={handleSubmit}>
         <Row className="mb-3">
            <Form.Group as={Col}>
               <FloatingLabel
                  controlId="first_name"
                  label="first name">
                  <Form.Control
                     required
                     type="text"
                     placeholder="first name"
                     value={customer.first_name}
                     onChange={handleChange} />
               </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
               <FloatingLabel
                  controlId="last_name"
                  label="last name">
                  <Form.Control
                     required
                     type="text"
                     placeholder="last name"
                     value={customer.last_name}
                     onChange={handleChange} />
               </FloatingLabel>
            </Form.Group>
         </Row>
         <Row className="mb-3">
            <Form.Group as={Col}>
               <FloatingLabel
                  controlId="email"
                  label="email">
                  <Form.Control
                     type="email"
                     placeholder="name@email.com"
                     value={customer.email}
                     onChange={handleChange} />
               </FloatingLabel>
            </Form.Group>
         </Row>
         <Row className="mb-3">
            <Form.Group as={Col}>
               <FloatingLabel
                  controlId="phone_number"
                  label="phone number">
                  <Form.Control
                     type="phone"
                     placeholder="123-555-6789"
                     value={customer.phone_number}
                     onChange={handleChange} />
               </FloatingLabel>
            </Form.Group>
         </Row>
         { customerToEdit ? null : submitFormButton }
      </Form>
   )
   
   return (
      <Container className="p-3">
         { customerToEdit ? null : showHideFormButton }
         <Row>
            <Col>
               { showForm ? form : null }
            </Col>
         </Row>
      </Container>
   )
}

export default CustomersForm