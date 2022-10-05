import "../App.css"
import React, { useState, useEffect } from "react"
import { Container, Card, Button } from "react-bootstrap"
import NavBar from "./NavBar"

function RentalsPage () {

  const [rentalsArr, setRentalsArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/rentals")
    .then(resp => resp.json())
    .then((data) => setRentalsArr(data.data))
  }, [])
    
  const rentals = rentalsArr.map((rental) => {
    rental.rental.checkout_date = new Date(Date.parse(rental.rental.checkout_date))
    rental.rental.due_date = new Date(Date.parse(rental.rental.due_date))
    return (
      <Card key={rental.rental.id}>
      {rental.customer.first_name} {rental.customer.last_name} Title: {rental.movie.title} Checkout Date: {(rental.rental.checkout_date).toLocaleDateString()} Due Date: {(rental.rental.due_date).toLocaleDateString()}
      <Button variant='primary' onClick={() => checkInMovie(rental.rental.id)}>Check-In</Button>
      </Card>
    )
  })

  const checkInMovie = (rentalId) => {
    fetch(`http://localhost:9292/rentals/${rentalId}/delete`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <Container>
      <NavBar />
      {rentals}
    </Container>
  )

}

export default RentalsPage;