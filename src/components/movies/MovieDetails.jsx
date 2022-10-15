import "../../App.css"
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import { Container, Stack } from "react-bootstrap";
import CheckOutModal from "./CheckOutModal";
import ReviewsContainer from "../reviews/ReviewsContainer";

function MovieDetails ({ selectedMovie, setSelectedMovie }) {

    const [customersArr, setCustomersArr] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState()
    const { id, image_url, plot, title, year } = selectedMovie
    const [smShow, setSmShow] = useState(false);

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
                "customer_id": selectedCustomer.id
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        setSmShow(true)
    }

    const customers = customersArr.map((customer) => {
        const handleClickTest = () => {
            setSelectedCustomer(customer)
        }
        return (
            <Dropdown.Item key={customer.id} onClick={handleClickTest}>{customer.first_name} {customer.last_name}</Dropdown.Item>
        )
    })

    const showModal = (
        <CheckOutModal smShow={smShow} setSmShow={setSmShow}  />
    )

    const returnToMovies = () => {
        setSelectedMovie(false)
    }
        
    return (
        <Container className='details-container'>
            <Row style={{height: '100%', position: 'relative'}}>
                <Col xs='auto' style={{textAlign: 'center', height: '100%'}}>
                    <Card style={{display: 'flex'}}>
                        <Card.Img variant="top" src={image_url} />
                    </Card>
                    <Button className='m-2' size='lg' onClick={returnToMovies}>Return to Movies</Button>
                </Col>
                <Col style={{height: '100%', position: 'relative'}}>
                    <Row style={{height: 'auto'}}>
                        <Container>
                            <h2>{title}</h2>
                            <h5>{year}</h5>
                            <p>{plot}</p>
                            {/* <DropdownButton id="dropdown-basic-button" title={selectedCustomer ? `${selectedCustomer.first_name} ${selectedCustomer.last_name}` : "Select Customer"} >
                                <Container style={{overflowY: 'scroll', maxHeight: '200px', backgroundColor: 'white'}}>
                                    {customers}
                                </Container>
                            </DropdownButton> */}
                            <br />
                            <Button variant='primary' onClick={checkOutMovie} disabled={selectedCustomer ? false : true}>Check-Out</Button>
                            {smShow ? showModal : null}
                        </Container>
                    </Row>
                    <Row style={{maxHeight: '100%', overflow: 'hidden'}}>
                        <ReviewsContainer movie={id} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails;