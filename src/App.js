import Opener from './Opener';
import Home from './Home';
import { 
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut';

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
          <Switch>
            <Route path='/checkout'>
              <CheckOut />
            </Route>
          </Switch>
          </>
      </Router>
    </>
  );
}

export default App;
