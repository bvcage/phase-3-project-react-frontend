import "../App.css"
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
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
      <Card key={rental.rental.id} className="m-auto">
        <Card.Body>
          <Row>
            <Col>
              {rental.customer.first_name} {rental.customer.last_name}
            </Col>
            <Col>
              Title: {rental.movie.title}
            </Col>
            <Col>
              Checkout Date: {(rental.rental.checkout_date).toLocaleDateString()}
            </Col>
            <Col>
              Due Date: {(rental.rental.due_date).toLocaleDateString()}
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  })

  const checkInMovie = (rentalId) => {
    setRentalsArr([...rentalsArr.filter(rental => rental.rental.id !== rentalId)])
    fetch(`http://localhost:9292/rentals/${rentalId}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
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
    <Container className="p-0 m-auto page-container">
      <Container id="rentals-container" className="p-4">
        {rentals}
      </Container>
    </Container>
  )

}

export default RentalsPage;