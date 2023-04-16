import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Order from './pages/Order'
import Service from './pages/Service'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Service" element={<Service />} />
        {/* <Route path="/Profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
