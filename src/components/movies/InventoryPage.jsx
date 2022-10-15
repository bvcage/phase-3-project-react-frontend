import React, { useEffect, useState } from 'react'
import { Button, Container, Dropdown, DropdownButton, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function InventoryPage () {

   const navigate = useNavigate()
   const [inventory, setInventory] = useState([])

   useEffect(() => {
      fetch('http://localhost:9292/movies', {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      })
      .then(r=>r.json())
      .then(api=>setInventory(api))
   }, [])

   function handleClickAvail (movie) {
      if (movie.number_rentals_out.length < movie.inventory) {
         navigate(`/movies/${movie.id}`)
      } else {
         console.log('not available')
      }
   }

   const rows = inventory.map(item => {
      return (
         <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title} ({item.year})</td>
            <td
               style={{textAlign: 'right'}}
               >{item.inventory - item.number_rentals_out.length} of {item.inventory}
            </td>
            <td style={{width: '50px', textAlign: 'right'}}>
               <DropdownButton variant='outline-secondary' title=''>
                  <Dropdown.Item
                     onClick={() => handleClickAvail(item)}
                     >find in store
                  </Dropdown.Item>
                  <Dropdown.Item>place order</Dropdown.Item>
                  <Dropdown.Item>sell stock</Dropdown.Item>
               </DropdownButton>
            </td>
         </tr>
      )
   })

   return (
      <Container className='page-container'>
         <Container className='items-container'>
            <Table striped hover>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Title</th>
                     <th style={{textAlign: 'right'}}>Available</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {rows}
               </tbody>
            </Table>
         </Container>
      </Container>
   )
}

export default InventoryPage