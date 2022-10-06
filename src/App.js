import "./App.css"
import React from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Opener from './components/home/Opener';
import CheckOut from './components/movies/CheckOut';
import RentalsPage from './components/rentals/RentalsPage'
import CustomersPage from "./components/customers/CustomersPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/home/Home';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Opener />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
      <Footer />
    </Container>)
}

export default App;
