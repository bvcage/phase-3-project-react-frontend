import "../../App.css"
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import React, { useState, useEffect } from "react"
import { Container, Form } from "react-bootstrap"

function RentalsPage () {

    const [rentalsArr, setRentalsArr] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        getRentals()
    }, [])

    function getRentals() {
        fetch("http://localhost:9292/rentals/out")
            .then(resp => resp.json())
            .then((data) => setRentalsArr(data.data))
    }

    function checkinSelectedRental(rental) {
        const checkInDate = new Date();
        checkInDate.setTime(Date.now())
        fetch(`http://localhost:9292/rentals/${rental.id}/edit`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({"checkin_date": checkInDate})
        }).then(r => r.json()).then(data => {
            const checkin = data.data
            const newRentalsArr = rentalsArr.filter(rental => rental.rental.id !== checkin.id)
            setRentalsArr(newRentalsArr)
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

    function handleSearch (e) {
        setSearchTerm(e.target.value)
    }

    const searchBar = (
        <Form>
            <Form.Control
                type="text"
                placeholder="search..."
                value={searchTerm}
                onChange={handleSearch} />
        </Form>
    )

    // filter array based on search terms
    const matches = rentalsArr.filter(rental => {
        if (rental.customer.first_name.toLowerCase().includes(searchTerm.toLowerCase())) { return true }
        if (rental.customer.last_name.toLowerCase().includes(searchTerm.toLowerCase())) { return true }
        if (rental.movie.title.toLowerCase().includes(searchTerm.toLowerCase())) { return true }
        return false
    })

    // generate table for rentals matching search terms
    const rentals = matches.map((rental) => {
        rental.rental.checkout_date = new Date(Date.parse(rental.rental.checkout_date))
        rental.rental.due_date = new Date(Date.parse(rental.rental.due_date))
        return (
            <tr key={rental.rental.id}>
                <td>{rental.customer.first_name}</td>
                <td>{rental.customer.last_name}</td>
                <td tdstyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{rental.movie.title}</td>
                <td>{(rental.rental.checkout_date).toLocaleDateString()}</td>
                <td>{(rental.rental.due_date).toLocaleDateString()}</td>
                <td width="220px">
                    <div style={{float: 'right'}}>
                        <Button onClick={() => editSelectedRental(rental)}>
                            Extend
                        </Button>
                        <Button onClick={() => checkinSelectedRental(rental.rental)} className="Delete ms-2" >
                            Check-In
                        </Button>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <Container id="rentals-page" className="page-container">
            <Container style={{width: "80%"}}>
                {searchBar}
            </Container>
            <Table striped hover style={{ minWidth:"960" }}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Checkout Date</th>
                        <th>Due Date</th>
                        <th style={{textAlign: 'right'}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rentals}
                </tbody>
            </Table>
        </Container>
    )

}

export default RentalsPage;