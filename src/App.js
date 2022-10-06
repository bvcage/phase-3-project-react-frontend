import Opener from './Opener';
import Home from './Home';
import React from "react";
import { Routes, Route, useNavigate, Link, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap'

import RentalsPage from './components/rentals/RentalsPage';
import CustomersPage from './components/customers/CustomersPage';
import CheckOut from './CheckOut';
import Header from './components/Header';
import Footer from './components/Footer';
import CheckinPage from './components/reviews/CheckinPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

function App() {

  const navigate = useNavigate();

  const onClickCheckout = () => {
    navigate('/checkout')
  }

  return (
    <Container className="p-0 m-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Opener />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkin" element={<CheckinPage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
