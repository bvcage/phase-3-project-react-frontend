import "./App.css"
import React from 'react';
import Opener from './Opener';
import CheckOut from './CheckOut';
import RentalsPage from './RentalsPage'
import CustomersPage from "./components/customers/CustomersPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path="/" element={<Opener />} />
      <Route path="/home" element={<Home />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/rentals" element={<RentalsPage />} />
      <Route path="/customers" element={<CustomersPage />} />
    </Routes>
    <Footer />
  </>)
}

export default App;
