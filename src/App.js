import Opener from './Opener';
import Home from './Home';
import { 
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
          <>
          <Link to="/home"></Link>

          <Switch>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
          </>
      </Router>
    </>
  );
}

export default App;
