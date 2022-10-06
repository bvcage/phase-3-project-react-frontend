import "./App.css"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function CurrentRentals() {

    const [rentalsArr, setRentalsArr] = useState([])

    useEffect(() => {
        getRentals()
    }, [])

    function getRentals() {
        fetch("http://localhost:9292/rentals")
            .then(resp => resp.json())
            .then((data) => setRentalsArr(data.data))
    }

    function deleteSelectedRental(id) {
        fetch(`http://localhost:9292/rentals/${id}/delete`, {
            method: 'DELETE'
        }).then((resp) => {
            resp.json().then((resp) => {
                console.warn(resp)
                getRentals()
            })
        })
    }

    function editSelectedRental(rental) {

        const oldCheckoutDate = rental.rental.due_date
        const newCheckoutDate = new Date()
        newCheckoutDate.setTime(oldCheckoutDate.getTime() + 2 * (24 * 60 * 60 * 1000) )

        fetch(`http://localhost:9292/rentals/${rental.rental.id}/edit`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ due_date: newCheckoutDate })
        }).then((resp) => {
            resp.json().then((resp) => {
                console.warn(resp)
                getRentals()
            })
        })
    }

    const rentals = rentalsArr.map((rental) => {
        rental.rental.checkout_date = new Date(Date.parse(rental.rental.checkout_date))
        rental.rental.due_date = new Date(Date.parse(rental.rental.due_date))
        return (
                <tr>
                    <td>{rental.customer.first_name}</td>
                    <td>{rental.customer.last_name}</td>
                    <td tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{rental.movie.title}</td>
                    <td>{(rental.rental.checkout_date).toLocaleDateString()}</td>
                    <td>{(rental.rental.due_date).toLocaleDateString()}</td>
                    <td>
                        <Button onClick={() => editSelectedRental(rental)}>
                            Extend
                        </Button>
                        <Button  onClick={() => deleteSelectedRental(rental.rental.id)} className="Delete ms-2" >
                            Check-In
                        </Button>
                    </td>
                </tr>
        )
})

return (
    <Container>
        <Table striped style={ { minWidth:"960"}}>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Title</th>
                <th>Checkout Date</th>
                <th>Due Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {rentals}
        </tbody>
        </Table>
    </Container>
)

}

export default CurrentRentals;