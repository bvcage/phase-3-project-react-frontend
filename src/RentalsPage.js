import "./App.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function CurrentRentals () {

    const [rentalsArr, setRentalsArr] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/rentals")
        .then(resp => resp.json())
        .then((data) => setRentalsArr(data.data))
    }, [])
    
    const rentals = rentalsArr.map((rental) => {
        rental.rental.checkout_date = new Date(Date.parse(rental.rental.checkout_date))
        rental.rental.due_date = new Date(Date.parse(rental.rental.due_date))
        return (
            
            <Card key={rental.rental.id}>
            {rental.customer.first_name} {rental.customer.last_name} Title: {rental.movie.title} Checkout Date: {(rental.rental.checkout_date).toLocaleDateString()} Due Date: {(rental.rental.due_date).toLocaleDateString()}
            </Card>
            <Button variant='primary' onClick={checkInMovie}>Check-In</Button>
        )
    })

    const checkInMovie = () => {
        fetch('http://localhost:9292/rentals', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "checkout_date": null,
                "due_date": null,
                "price": 15,
                "movie_id": selectedMovie.id,
                "customer_id": 3
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <Container>
            {rentals}
            
        </Container>
    )

}

export default CurrentRentals;