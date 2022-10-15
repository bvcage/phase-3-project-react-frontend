import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function NavBar() {
   const location = useLocation()
   const path = location.pathname
   const navigate = useNavigate()

   const btnVariant = "outline-secondary"
   const btnClass = "m-1"
   const btnSize = "lg"

   return (
      <Container>
         <Button
            variant={btnVariant}
            size={btnSize}
            className={btnClass}
            onClick={() => navigate("/about")}
            active={path === "/about"}>
               About
         </Button>
         <Button
            variant={btnVariant}
            className={btnClass}
            size={btnSize}
            onClick={() => navigate("/inventory")}
            active={path === "/inventory"}>
               Inventory
         </Button>
         <Button
            variant={btnVariant}
            className={btnClass}
            size={btnSize}
            onClick={() => navigate("/movies")}
            active={path === "/movies"}>
               Check-Out
         </Button>
         <Button
            variant={btnVariant}
            className={btnClass}
            size={btnSize}
            onClick={() => navigate("/rentals")}
            active={path === "/rentals"}>
               Check-In
         </Button>
         <Button
            variant={btnVariant}
            className={btnClass}
            size={btnSize}
            onClick={() => navigate("/customers")}
            active={path === "/customers"}>
               Customers
         </Button>
      </Container>
   );
}

export default NavBar