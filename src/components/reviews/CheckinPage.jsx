import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import RentalsContainer from '../rentals/RentalsContainer'
import ReviewsForm from './ReviewsForm'

function CheckinPage () {

   const [review, setReview] = useState()

   const [addReview, setAddReview] = useState(false)

   async function handleCheckin (rentalId) {
      const rental = await fetch(`http://localhost:9292/rentals/${rentalId}`).then(r=>r.json()).then(api=>api.data)
      console.log(rental)
      
      // const newReview = await fetch(`http://localhost:9292/reviews/new`).then(r=>r.json()).then(api=>api.data)
      // newReview.customer_id = rental.customer.id
      // newReview.customer_name = `${rental.customer.first_name} ${rental.customer.last_name}`
      // newReview.movie_id = rental.movie.id
      // newReview.movie_title = rental.movie.title
      // setReview(newReview)
      // review.stars
      // review.comment
   }

   function handleSubmit (review) {
      console.log('submit')
      console.log(review)
   }

   return (<>
      <div>search bar</div>
      <Container>
         <RentalsContainer onClickCheckin={handleCheckin} />
      </Container>
      <Container style={{width: "60%"}}>
         { !!review ? <ReviewsForm review={review} onSubmitReview={handleSubmit} /> : null }
      </Container>
   </>)
}

export default CheckinPage