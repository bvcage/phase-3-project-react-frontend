import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import ReviewsContainer from '../reviews/ReviewsContainer'

function MoviesCheckoutPage (props) {
   const { customersArr } = props

   const navigate = useNavigate()
   const params = useParams()

   const { id } = params
   const [movie, setMovie] = useState({})
   const [selectedCustomer, setSelectedCustomer] = useState()

   useEffect(() => {
      fetch(`http://localhost:9292/movies/${id}`)
      .then(r=>r.json())
      .then(api=>setMovie(api.data))
   }, [id])

   function checkOutMovie () {
      fetch('http://localhost:9292/rentals', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            "checkout_date": null,
            "due_date": null,
            "price": 15,
            "movie_id": movie.id,
            "customer_id": selectedCustomer.id
         }),
      }).then(r => r.json())
   }

   function returnToMovies () {
      navigate(-1)
   }

   const customers = !!customersArr ? customersArr.map(customer => {
      // const handleClickTest = () => {
      //    setSelectedCustomer(customer)
      // }
      return (
         <Dropdown.Item key={customer.id} >{customer.first_name} {customer.last_name}</Dropdown.Item>
      )
  }) : null

   return (
      <Container className='details-container'>
         <Row style={{height: '100%', position: 'relative'}}>
            <Col xs='auto' style={{textAlign: 'center', height: '100%'}}>
               <Card style={{display: 'flex'}}>
                  <Card.Img variant="top" src={movie.image_url} />
               </Card>
               <Button className='m-2' size='lg' onClick={returnToMovies}>Return to Movies</Button>
            </Col>
            <Col style={{height: '100%', position: 'relative'}}>
               <Row style={{height: 'auto'}}>
                  <Container>
                        <h2>{movie.title}</h2>
                        <h5>{movie.year}</h5>
                        <p>{movie.plot}</p>
                        <DropdownButton id="dropdown-basic-button" title={selectedCustomer ? `${selectedCustomer.first_name} ${selectedCustomer.last_name}` : "Select Customer"} >
                           <Container style={{overflowY: 'scroll', maxHeight: '200px', backgroundColor: 'white'}}>
                              {customers}
                           </Container>
                        </DropdownButton>
                        <br />
                        <Button variant='primary' onClick={checkOutMovie} disabled={selectedCustomer ? false : true}>Check-Out</Button>
                        {/* {smShow ? showModal : null} */}
                  </Container>
               </Row>
               <Row style={{maxHeight: '100%', overflow: 'hidden'}}>
                  <ReviewsContainer movie={id} />
               </Row>
            </Col>
         </Row>
      </Container>
   )
}

export default MoviesCheckoutPage