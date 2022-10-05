import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function NavBar() {
   const navigate = useNavigate()
   return (
      <Container>
         <Button variant="outline-secondary" onClick={() => navigate("/")}>Check-In</Button>
         <Button variant="outline-secondary" onClick={() => navigate("/checkout")}>Check-Out</Button>
         <Button variant="outline-secondary" onClick={() => navigate("/rentals")}>Rentals</Button>
         <Button variant="outline-secondary" onClick={() => navigate("/customers")}>Customers</Button>
      </Container>
   );
}

export default NavBar