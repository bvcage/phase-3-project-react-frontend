
import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import './index.css'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


