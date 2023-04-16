import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        {/* <!-- <div class="container-fluid"> --> */}
        <a class="navbar-brand" href="R">
          Ryōri
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={'/'}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={'/Service'}>
                Our Service
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={'/Service'}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Header
