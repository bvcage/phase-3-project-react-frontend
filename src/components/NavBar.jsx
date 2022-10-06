import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function NavBar() {
   const location = useLocation()
   const path = location.pathname
   const navigate = useNavigate()

   const btnVariant = "outline-secondary"

   return (
      <Container>
         <Button
            variant={btnVariant}
            onClick={() => navigate("/checkout")}
            active={path === "/checkout"}>
               Check-Out Movie
         </Button>
         <Button
            variant={btnVariant}
            onClick={() => navigate("/rentals")}
            active={path === "/rentals"}>
               Check-In Rental
         </Button>
         <Button
            variant={btnVariant}
            onClick={() => navigate("/customers")}
            active={path === "/customers"}>
               Customers
         </Button>
         <Button
            variant={btnVariant}
            onClick={() => navigate("/home")}
            active={path === "/home"}>
               Home
         </Button>
      </Container>
   );
}

export default NavBar