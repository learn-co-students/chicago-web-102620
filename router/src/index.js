
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom'



// BrowserRouter - Wrapped around our application; it is required in order to enable client side routing. Listens for changes to the route and responds to them
// Link - Manipulates the urlbar, updates to whatever the 'to' path is pointing to

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

