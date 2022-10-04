import './App.css';
import { Navigate, Router, Route } from "react-router-dom"
import CheckOut from './CheckOut';

function App() {
  return (
  <Route path="/checkout">
    <CheckOut />
  </Route>
  );
}

export default App;
