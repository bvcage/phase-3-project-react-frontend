import React, { useState } from 'react'
import { Form, FloatingLabel, Button, Row, Col, Container } from 'react-bootstrap'

function ReviewsForm (props) {
   const { rental, onComplete } = props

   const [numStars, setNumStars] = useState(3)
   const [comment, setComment] = useState('')

   async function handleSubmit (e) {
      e.preventDefault()
      const review = await fetch('http://localhost:9292/reviews/new').then(r=>r.json()).then(api=>api.data)
      review.movie_id = rental.movie.id
      review.customer_id = rental.customer.id
      review.stars = numStars
      review.comment = comment
      // save review
      fetch(`http://localhost:9292/reviews/${review.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         body: JSON.stringify(review)
      }).then(r=>r.json()).then(api=>{
         console.log(api.status)
         console.log(api.data)
      })
      // save review id to rental
      fetch(`http://localhost:9292/rentals/${rental.rental.id}/edit`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         body: JSON.stringify({ review_id: review.id})
      }).then(r=>r.json()).then(api=>{
         console.log(api.status)
         console.log(api.data)
      })
      onComplete()
   }

   function handleChange (e) {
      setComment(e.target.value)
   }

   function handleReset () {
      setNumStars(3)
      setComment('')
   }

   let stars = ['☆','☆','☆','☆','☆']
   stars = stars.map((star,i) => {
      if (i < numStars) { return '★' }
      return star
   })
   stars = stars.map((star,i) => {
      return (
         <span key={i} onClick={()=>setNumStars(i+1)}>{star}</span>
      )
   })

   return (
      <Container className="p-3" style={{display: 'flex'}}>
         <Form onSubmit={handleSubmit} className="mx-auto" style={{width: '70%'}}>
            <Row className="p-2">
               <Col></Col>
               <Col xs='auto'>
                  <Button variant="outline-secondary" onClick={onComplete}>Cancel</Button>
               </Col>
            </Row>
            <Row className="p-2">
               <h2>{rental.customer.first_name}'s review of {rental.movie.title}:</h2>
            </Row>
            <Row className="p-2">
               <Col>
                  {stars}
               </Col>
            </Row>
            <Row className="p-2">
               <FloatingLabel
                  controlId="comments"
                  label="comments"
                  className="ps-1">
                  <Form.Control
                     type="text"
                     placeholder="comments?"
                     value={comment}
                     onChange={handleChange} />
               </FloatingLabel>
            </Row>
            <Row className="p-2">
               <Col></Col>
               <Col xs='auto'>
                  <Button type="reset" variant="secondary" className="ms-2" onClick={handleReset}>Clear</Button>
                  <Button type="submit" variant="primary" className="ms-2">Submit</Button>
               </Col>
            </Row>
         </Form>
      </Container>
   )
}

export default ReviewsForm