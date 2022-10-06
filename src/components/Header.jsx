import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'

function Header() {
   return (
      <Container className="p-0 m-0 mb-3" style={{height: "15%", position: "relative", textAlign: "center"}}>
         <h1>Blockbuster</h1>
         <NavBar />
      </Container>
   )
}

export default Header