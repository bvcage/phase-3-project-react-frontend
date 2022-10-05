import Opener from './Opener';
import Home from './Home';
import RentalsPage from './components/RentalsPage';
import CustomersPage from './components/customers/CustomersPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut';

function App() {

  const navigate = useNavigate();

  const onClickCheckout = () => {
    navigate('/checkout')
  }

  return (
    <Routes>
      <Route path="/" element={<Home onClickCheckout={onClickCheckout} />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/rentals" element={<RentalsPage />} />
      <Route path="/customers" element={<CustomersPage />} />
    </Routes>
  );
}

export default App;
