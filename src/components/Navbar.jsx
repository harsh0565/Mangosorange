import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
              <Link className="text-capitalize navbar-brand me-auto heading" id='navlogo' to="/">Piligrim</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav me-auto">
                </div>
                <ul className='navbar-nav'>
                  <li className="nav-item">
                   
                     <Link className="nav-link" to="/user/book">Book Your Trip</Link>
                  </li>
                  <li className="nav-item">
                   
                    {!localStorage.getItem('tokenn') && <Link className="nav-link" to="/login">Login</Link>}
                  </li>
                </ul>
                <form className="d-flex" role="search" >
                  <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul className='navbar-nav'>
    
                  <li className="nav-item">
                    {localStorage.getItem('tokenn') && <Link className="nav-link text-capitalize" to="/user-dashboard"> </Link>}
                  </li>
                </ul>
                {localStorage.getItem('tokenn') && <button className='btn' ><i className="bi bi-box-arrow-right"></i></button>}
              </div>
            </div>
          </nav>
        </div>
      )
    }

export default Navbar
