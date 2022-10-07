import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReviewsCard from './ReviewsCard'

function ReviewsContainer (props) {
   const { movie: movieId } = props

   const [reviews, setReviews] = useState([])

   // get reviews
   useEffect(() => {
      fetch(`http://localhost:9292/reviews?movie_id=${movieId}`)
      .then(r=>r.json())
      .then(api=> setReviews(api.data))
   }, [])

   // make review cards
   const reviewCards = reviews.map(review => {
      return (
         <ReviewsCard key={review.id} review={review} />
      )
   })
   
   return (
      <Container>
         <h3>Reviews</h3>
         <Container style={{height: '300px', overflowY: 'scroll'}}>
         { reviews.length > 0 ? reviewCards : "no reviews available :("}
         </Container>
      </Container>
   )
}

export default ReviewsContainer