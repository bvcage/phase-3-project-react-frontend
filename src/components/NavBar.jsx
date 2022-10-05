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
            onClick={() => navigate("/")}
            active={path === "/"}>
               Check-In
         </Button>
         <Button
            variant={btnVariant}
            onClick={() => navigate("/checkout")}
            active={path === "/checkout"}>
               Check-Out
         </Button>
         <Button
            variant={btnVariant}
            onClick={() => navigate("/rentals")}
            active={path === "/rentals"}>
               Rentals
         </Button>
         <Button
            variant={btnVariant}
            onClick={() => navigate("/customers")}
            active={path === "/customers"}>
               Customers
         </Button>
      </Container>
   );
}

export default NavBar