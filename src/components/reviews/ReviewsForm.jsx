import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import ReviewsStars from './ReviewsStars'

function ReviewsForm ( props ) {
   let { review, onSubmitReview } = props

   const [numStars, setNumStars] = useState(3)
   const [comments, setComments] = useState("")

   function handleChange (e) {
      setComments(e.target.value)
   }

   function handleClickStar (num) {
      setNumStars(num)
   }

   function handleNoReview () {
      setNumStars(3)
   }

   function handleSubmit (e) {
      e.preventDefault()
      review.stars = numStars
      review.comments = comments
      onSubmitReview(review)
   }

   const form = (
      <Form onSubmit={handleSubmit}>
         <Row className="mb-2">
            <Col>
               <h2>{review.customer_name}'s review of {review.movie_title}:</h2>
            </Col>
         </Row>
         <Row className="mb-2">
            <Col>
               <ReviewsStars numStars={numStars} onClickStar={handleClickStar} />
            </Col>
         </Row>
         <Row className="mb-2">
            <Col>
               <Form.Control
                  type="text"
                  value={comments}
                  placeholder="comments"
                  onChange={handleChange} />
            </Col>
         </Row>
         <Row className="mb-2">
            <Col></Col>
            <Form.Group as={Col} xs="auto">
               <Button type="submit" className="ms-2">submit</Button>
               <Button
                  type="reset"
                  variant="secondary"
                  className="ms-2"
                  onClick={handleNoReview}>
                     no review
               </Button>
            </Form.Group>
         </Row>
      </Form>
   )

   return (
      <Container>
         { !!review ? form : null }
      </Container>
   )
}

export default ReviewsForm