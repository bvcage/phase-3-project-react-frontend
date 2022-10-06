import React from 'react'

function ReviewsStars (props) {
   const { numStars, onClickStar } = props

   function handleClick (num) {
      onClickStar(num)
   }

   let stars = ['☆','☆','☆','☆','☆']

   stars = stars.map((star,i) => {
      if (i < numStars) { return '★' }
      return star
   })

   stars = stars.map((star, i) => {
      return (
         <span onClick={() => handleClick(i+1)}>{star}</span>
      )
   })

   return (
      <div>{stars}</div>
   )
}

export default ReviewsStars