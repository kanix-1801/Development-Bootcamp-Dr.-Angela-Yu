// import { useState, useEffect } from 'react'
import Header from '../components/Header'
import '../style.css'
import ServiceCards from '../components/ServiceCards'

function Service() {
  return (
    <>
      <div class="container-fluid main-body">
        <div class="container-fluid main-nav-container">
          <Header />
          <ServiceCards />
        </div>
      </div>
    </>
  )
}

export default Service
