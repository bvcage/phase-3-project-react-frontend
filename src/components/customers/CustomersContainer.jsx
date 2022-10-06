import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomersCard from './CustomersCard'

function CustomersContainer (props) {
   const { customers, onClickEdit, onClickDelete } = props   // destructure props

   // display details for 1 customer at a time
   const [showDetailsFor, setShowDetailsFor] = useState()
   function handleShowDetails (id) {
      showDetailsFor === id ? setShowDetailsFor(null) : setShowDetailsFor(id)
   }

   function handleClickEdit (customer) {
      setShowDetailsFor(null)
      onClickEdit(customer)
   }

   // create cards for each customer
   const customerCards = customers.map(customer => {
      return (
         <Col key={customer.id}>
            <CustomersCard
               customer={customer}
               showDetailsFor={showDetailsFor}
               onClickCard={handleShowDetails}
               onClickEdit={handleClickEdit}
               onClickDelete={onClickDelete} />
         </Col>
      )
   })

   return (
      <Container fluid className="p-3">
         <Row className="g-3">
            {customerCards}
         </Row>
      </Container>
   )
}

export default CustomersContainer