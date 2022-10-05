import "./App.css"
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";

function MovieDetails ({ selectedMovie }) {

    const [customersArr, setCustomersArr] = useState({})
    const [selectedCustomer, setSelectedCustomer] = useState({})
    const { id, image_url, imdb_id, plot, title, year } = selectedMovie

    useEffect(() => {
        fetch('http://localhost:9292/customers')
        .then ((res) => res.json())
        .then ((data) => setCustomersArr(data.data))
    }, [])
    
    const checkOutMovie = () => {
        fetch('http://localhost:9292/rentals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "checkout_date": null,
                "due_date": null,
                "price": 15,
                "movie_id": selectedMovie.id,
                "customer_id": 2
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

    
    
    const customers = customersArr.map((customer) => {
        return (
            <Dropdown.Item key={customer.id}>{customer.first_name} {customer.last_name}</Dropdown.Item>
        )
    })
    

    return (
        <>
    <div>
        <Card style={{ width: '18rem', display: 'flex'}}>
      <Card.Img variant="top" src={image_url} />
    </Card>
    </div>
    <div className='details-info'>
        <h2>{title}</h2>
        <h5>{year}</h5>
        <p>{plot}</p>
        <DropdownButton id="dropdown-basic-button" title="Select Customer">
            {customers}
        </DropdownButton>
        <br></br>
        <Button variant='primary' onClick={checkOutMovie}>Check-Out</Button>
    </div>
    </>
    )
}

export default MovieDetails;