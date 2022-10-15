import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import MoviesContainer from './MoviesContainer'
import MovieDetails from './MovieDetails'
import MoviesCheckoutPage from './MoviesCheckoutPage'

function CheckOut () {

    const [moviesArr, setMoviesArr] = useState([])
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then((res) => res.json())
        .then((data) => setMoviesArr(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:9292/customers")
        .then((res) => res.json())
        .then((api) => setCustomers(api.data))
    }, [])

    return (
        <Container className='page-container'>
            <Routes>
                <Route path='/' element={<MoviesContainer moviesArr={moviesArr} customersArr={customers} />} />
                <Route path='/:id' element={<MoviesCheckoutPage />} />
            </Routes>
        </Container>
    )
};

export default CheckOut;