import "../../App.css"
import React from "react"
import { Container } from "react-bootstrap"
import RentalsContainer from "./RentalsContainer"

function RentalsPage () {

  return (
    <Container className="p-0 m-auto page-container">
      <RentalsContainer />
    </Container>
  )

}

export default RentalsPage;