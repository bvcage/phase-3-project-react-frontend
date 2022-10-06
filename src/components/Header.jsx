import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'

function Header() {
   return (
      <Container id="header">
         <h1>BLOCKBUSTER</h1>
         <NavBar />
      </Container>
   )
}

export default Header