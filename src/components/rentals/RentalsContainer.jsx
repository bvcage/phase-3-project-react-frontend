import "../../App.css"
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button, Accordion, Table } from "react-bootstrap"
import NavBar from "../NavBar"

function RentalsPage () {

   const [rentalsArr, setRentalsArr] = useState([])

   useEffect(() => {
      fetch("http://localhost:9292/rentals/out")
      .then(resp => resp.json())
      .then((data) => setRentalsArr(data.data))
   }, [])
      
   const rentals = rentalsArr.map((rental) => {
      rental.rental.checkout_date = new Date(Date.parse(rental.rental.checkout_date))
      rental.rental.due_date = new Date(Date.parse(rental.rental.due_date))
      return (
         <tr key={rental.rental.id}>
            <td>
               {rental.customer.first_name} {rental.customer.last_name}
            </td>
            <td>
               {rental.movie.title}
            </td>
            <td>
               {(rental.rental.checkout_date).toLocaleDateString()}
            </td>
            <td>
               {(rental.rental.due_date).toLocaleDateString()}
            </td>
            <td>
               <div style={{float: "right"}}>
                  <Button
                     variant='primary'
                     onClick={() => checkInMovie(rental.rental.id)}
                     className="ms-3">
                        Check-In
                  </Button>
                  <Button
                     variant='secondary'
                     onClick={() => extendDueDate(rental.rental.id)}
                     className="ms-3">
                        extend
                  </Button>
               </div>
            </td>
         </tr>
      )
   })

   const checkInMovie = (rentalId) => {
      // set checkin date to now
      const checkInDate = new Date()
      checkInDate.setTime(Date.now())
      // clear from rentals array
      setRentalsArr([...rentalsArr.filter(rental => rental.rental.id !== rentalId)])
      // sent patch request to server
      fetch(`http://localhost:9292/rentals/${rentalId}/edit`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
         },
         body: JSON.stringify({"checkin_date": checkInDate})
      })
      .then((response) => response.json())
      .then((data) => {
         console.log('Success:', data);
      })
      .catch((error) => {
         console.error('Error:', error);
      });
   }

   const extendDueDate = (rentalId) => {
      const numDaysToAdd = 5
      const currDueDate = rentalsArr.find(rental => rental.rental.id === rentalId).rental.due_date
      const newDueDate = new Date();
      newDueDate.setTime(currDueDate.getTime() + ( numDaysToAdd * (1000 * 60 * 60 * 24)))
      fetch(`http://localhost:9292/rentals/${rentalId}/edit`, {
         method: 'PATCH',
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({"due_date": newDueDate})
      }).then(r=>r.json())
      .then(data => {
         let newRental = data.data
         const newArr = rentalsArr.map(rental => {
         if (rental.rental.id === newRental.id) {
            return {...rental,
               rental: newRental
            }
         }
         return rental
         })
         setRentalsArr(newArr)
      })
   }

   return (
      <Container id="rentals-container" className="p-4">
         <Table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Movie</th>
                  <th>Checkout Date</th>
                  <th>Due Date</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {rentals}
            </tbody>
         </Table>
      </Container>
   )

}

export default RentalsPage;