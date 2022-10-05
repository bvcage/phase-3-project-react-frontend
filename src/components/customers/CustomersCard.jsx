import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

function CustomersCard (props) {
   const { customer, onClickCard, showDetailsFor, onClickEdit, onClickDelete } = props // destructure props
   const { id, first_name, last_name, phone_number, email, join_date } = customer  // destructure customer

   function handleClickEdit (e) {
      e.stopPropagation()
      onClickEdit(customer)
   }

   function handleClickDelete (e) {
      e.stopPropagation()
      onClickDelete(customer)
   }

   const details = (<>
      <Card.Text>phone: {phone_number}</Card.Text>
      <Card.Text>email: {email}</Card.Text>
      <div style={{float: "right"}}>
         <ButtonGroup>
            <Button type="button" size="sm" variant="light" onClick={handleClickEdit}>edit</Button>
            <Button type="button" size="sm" variant="light" onClick={handleClickDelete}>delete</Button>
         </ButtonGroup>
      </div>
   </>)

   return (
      <Card
         className="m-auto"
         onClick={() => onClickCard(id)}>
         <Card.Body>
            <Card.Title>{first_name} {last_name}</Card.Title>
            <Card.Text>{`Member since: ${join_date.toLocaleDateString("en-US", {month: 'long', year: 'numeric'})}`}</Card.Text>
            { showDetailsFor === id ? details : null }
         </Card.Body>
      </Card>
   )
}

export default CustomersCard