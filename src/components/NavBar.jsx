import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function NavBar() {
   const location = useLocation()
   const path = location.pathname
   const navigate = useNavigate()

   const btnVariant = "outline-secondary"
   const btnClass = "m-1"

   return (
      <Container>
         <Button
            variant={btnVariant}
            className={btnClass}
            onClick={() => navigate("/home")}
            active={path === "/home"}>
               Home
         </Button>
         <Button
            variant={btnVariant}
            className={btnClass}
            onClick={() => navigate("/checkout")}
            active={path === "/checkout"}>
               Check-Out Movie
         </Button>
         <Button
            variant={btnVariant}
            className={btnClass}
            onClick={() => navigate("/rentals")}
            active={path === "/rentals"}>
               Check-In Rental
         </Button>
         <Button
            variant={btnVariant}
            className={btnClass}
            onClick={() => navigate("/customers")}
            active={path === "/customers"}>
               Customers
         </Button>
      </Container>
   );
}

export default NavBar