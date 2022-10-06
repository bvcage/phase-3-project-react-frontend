import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function NavBar() {
   const location = useLocation()
   const path = location.pathname
   const navigate = useNavigate()

   const btnVariant = "outline-secondary"

   return (
      <Container className="p-0" style={{position: "absolute", bottom: "0px"}} >
         <Button
            variant={btnVariant}
            onClick={() => navigate("/checkin")}
            active={path === "/checkin"}>
               Check-In Movie
         </Button>
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
      </Container>
   );
}

export default NavBar