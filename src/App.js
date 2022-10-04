import Opener from './Opener';
import Home from './Home';
import RentalsPage from './components/RentalsPage';
import CustomersPage from './components/customers/CustomersPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/rentals" element={<RentalsPage />} />
      <Route path="/customers" element={<CustomersPage />} />
    </Routes>
  );
}

export default App;
