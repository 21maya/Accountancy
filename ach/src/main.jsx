import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/style.scss"
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <ScrollToTop/>
    </BrowserRouter>
  </React.StrictMode>,
)
