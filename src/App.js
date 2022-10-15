import "./App.css"
import React from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import CheckOut from './components/movies/CheckOut';
import RentalsPage from './components/rentals/RentalsPage'
import CustomersPage from "./components/customers/CustomersPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/home/Home';
import About from "./components/home/About";
import InventoryPage from "./components/movies/InventoryPage";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/*" element={<CheckOut />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
      <Footer />
    </Container>)
}

export default App;
