// import { useState, useEffect } from 'react'
import Header from '../components/Header'
import '../style.css'
import HomeMain from '../components/HomeMain'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div class="container-fluid main-body">
        <div class="container-fluid main-nav-container">
          <Header />
          <HomeMain />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
