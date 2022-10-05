import Opener from './Opener';
import Home from './Home';
import { 
  BrowserRouter as Router, 
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut';

function App() {

  const navigate = useNavigate();

  const onClickCheckout = () => {
    navigate('/checkout')
  }

  return (
      <>
        <Routes>
            <Route path='/' element={<Home onClickCheckout={onClickCheckout} />}/>
            <Route path='/checkout' element={<CheckOut/>}/>
          </Routes>
      </>
  );
}

export default App;
