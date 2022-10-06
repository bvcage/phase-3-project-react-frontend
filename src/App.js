import "./App.css"
import React from 'react';
import Opener from './Opener';
import CheckOut from './CheckOut';
import Rentals from './Rentals';
import Customers from './Customers';
import Home from './Home';
import { 
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  Link,
  // Routes,
  useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  return (
<div className='Appz'>
  <Routes>
    <Route 
      path="/"
      element={
        <>
          <Opener />
        </>
       }
    />
    <Route
      path="/home"
      element={
        <>
          <Home />
        </>
      }
    />
    <Route
      path="/checkout"
      element={
        <>
          <CheckOut />
        </>
      }
    />
    <Route
      path="/rentals"
      element={
        <>
          <Rentals />
        </>
      }
    />
    <Route
      path="/customers"
      element={
        <>
          <Customers />
        </>
      }
    />
    {/* {
      path: "/home",
      element: (
        <>  
          <Home />
          <Link to="checkout">Checkout</Link>
          <Link to="rentals">Rentals</Link>
          <Link to="customers">Customers</Link>
          <div>welcome Home</div>,
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>  
          <CheckOut />
          <Link to="home">Home</Link>
          <Link to="rentals">Rentals</Link>
          <Link to="customers">Customers</Link>
          <div>Checkout</div>,
        </>
      ),
    },
    {
      path: "/rentals",
      element: (
        <>
          <Rentals />
          <Link to="home">Home</Link>
          <Link to="checkout">Checkout</Link>
          <Link to="customers">Customers</Link>
          <div>Rental</div>,
        </>
      ),
    },
    {
      path: "/customers",
      element: (
        <>
          <Customers />
          <Link to="home">Home</Link>
          <Link to="checkout">Checkout</Link>
          <Link to="rentals">Rentals</Link>
          <div>Customers</div>,
        </>
      ),
    }, */}
    </Routes>
</div>
  )
  }

export default App;
