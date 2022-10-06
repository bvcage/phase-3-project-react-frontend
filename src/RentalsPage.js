import "./App.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
        newCheckoutDate.setDate(oldCheckoutDate.getDate() + 2)

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
            <div>
                <Card key={rental.rental.id}>
                    {rental.customer.first_name} {rental.customer.last_name} Title: {rental.movie.title} Checkout Date: {(rental.rental.checkout_date).toLocaleDateString()} Due Date: {(rental.rental.due_date).toLocaleDateString()}
                </Card>
                <div>
                    <Button onClick={() => deleteSelectedRental(rental.rental.id)} className="Delete">
                        Check-In
                    </Button>
                    <Button onClick={() => editSelectedRental(rental)}>
                        Extend Due Date 2 Days
                    </Button>
                </div>
            </div>
        )
    })

    return (
        <Container>
            {rentals}
        </Container>
    )

}

export default CurrentRentals;