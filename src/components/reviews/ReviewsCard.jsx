import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

function ReviewsCard (props) {
   const { review } = props
   const { stars, comment, customer } = review

   let starsDisplay = ['☆','☆','☆','☆','☆']
   starsDisplay = starsDisplay.map((star,i) => {
      if (i < stars) { return '★' }
      return star
   })

   return (
      <Card className='mt-1 mb-1' style={{width: '100%', transform: 'none'}}>
         <Card.Body>
            <Row>
               <Col xs={2} style={{textAlign: 'center'}}>
                  {starsDisplay}
               </Col>
               <Col style={{textAlign: 'justify'}}>
                  {comment}
                  <div style={{textAlign: 'right'}}>- {customer.full_name}</div>
               </Col>
            </Row>
         </Card.Body>
      </Card>
   )
}

export default ReviewsCard