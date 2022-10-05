import Opener from './Opener';
import './App.css';
import Home from './Home';
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);





// import { 
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
//  } from 'react-router-dom'
// import Home from './Home';

// function App() {
//   return (
//     <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/opener">Opener</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}
//       <Switch>
//         <Route path="/opener">
//           <Opener />
//         </Route>
//         <Route path="/home">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
// );

    // <div>
    
    //   <Switch>
    //     <Route exact path='/opener'>
    //         <Opener />
    //     </Route>
    //   </Switch>
    // </div>
  // );
// }

// export default App;
