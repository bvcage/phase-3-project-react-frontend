import "../../App.css"
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import React, { useState } from "react"
import { Container, Form } from "react-bootstrap"

function RentalsContainer ( props ) {
   const { rentalsArr, onClickCheckIn, onClickExtend } = props

    const [searchTerm, setSearchTerm] = useState('')

   function checkInRental (rental) {
      onClickCheckIn(rental.id)
   }

    function extendRental (rental) {
      onClickExtend(rental.rental)
    }

   function handleSearch (e) {
      setSearchTerm(e.target.value)
   }

   // search bar component
   const searchBar = (
      <Form>
         <Form.Control
               type="text"
               placeholder="search..."
               value={searchTerm}
               onChange={handleSearch} />
      </Form>
   )

   // filter array based on search terms
   const matches = rentalsArr.filter(rental => {
      if (rental.customer.first_name.toLowerCase().includes(searchTerm.toLowerCase())) { return true }
      if (rental.customer.last_name.toLowerCase().includes(searchTerm.toLowerCase())) { return true }
      if (rental.movie.title.toLowerCase().includes(searchTerm.toLowerCase())) { return true }
      return false
   })

   // generate table for rentals matching search terms
   const rentals = matches.map((rental) => {
      rental.rental.checkout_date = new Date(Date.parse(rental.rental.checkout_date))
      rental.rental.due_date = new Date(Date.parse(rental.rental.due_date))
      return (
         <tr key={rental.rental.id}>
               <td>{rental.customer.first_name}</td>
               <td>{rental.customer.last_name}</td>
               <td tdstyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{rental.movie.title}</td>
               <td>{(rental.rental.checkout_date).toLocaleDateString()}</td>
               <td>{(rental.rental.due_date).toLocaleDateString()}</td>
               <td width="220px">
                  <div style={{float: 'right'}}>
                     <Button onClick={() => extendRental(rental)}>
                           Extend
                     </Button>
                     <Button onClick={() => checkInRental(rental.rental)} className="Delete ms-2" >
                           Check-In
                     </Button>
                  </div>
               </td>
         </tr>
      )
   })

   return (
      <Container className='page-container'>
         <Container className='search-bar'>
            {searchBar}
         </Container>
         <Container className='items-container'>
            <Table striped hover style={{ minWidth:"960" }}>
                  <thead>
                     <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Checkout Date</th>
                        <th>Due Date</th>
                        <th style={{textAlign: 'right'}}>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {rentals}
                  </tbody>
            </Table>
         </Container>
      </Container>
   )

}

export default RentalsContainer;