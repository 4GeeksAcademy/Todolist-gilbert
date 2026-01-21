import React from 'react'
import ReactDOM from 'react-dom/client'

import "../styles/index.css";

import Home from './components/Home.jsx'

console.log("App starting");

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)