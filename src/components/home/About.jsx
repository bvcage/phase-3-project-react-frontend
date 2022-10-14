import React from 'react'
import { Container } from 'react-bootstrap'

function About () {
   return (
      <Container>
          <Container id="about">
              <p>Brickbuster . . </p>
              <p>Its like Blockbuster but without the funny smells! Fast Customer service and our tapes are always rewound just for you!</p>
              <p>Our phase 3 project was to the take the Many to Many relationship and display it with a front end website. We utilized Ruby Active Record Tables to create the database and then used Instance Methods to pull the filter functions throught!</p>
              <p>Here you can check out the list of available films, search by Genre or Title.</p>
              <p>You can also see the Due Dates on the movies you have rented! Checkout or Checkin all in one stop, no waiting in long lines!</p>
          </Container>
      </Container>
  );
}

export default About