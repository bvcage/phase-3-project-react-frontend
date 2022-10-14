import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'

function Header() {

   const navigate = useNavigate()

   return (
      <Container id="header">
         <div onClick={() => navigate('/')}>
            <h1>BRICKBUSTER</h1>
         </div>
         <NavBar />
      </Container>
   )
}

export default Header