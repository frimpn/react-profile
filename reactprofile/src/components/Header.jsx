import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark header-nav">
  <div className="container-fluid">
  <button className="navbar-toggler bg-primary text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-primary" ></span>
        </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu" >
        <li className="nav-item " >
        <NavLink className="nav-link text-white" activeClassName="active" exact to="/">Home</NavLink>
        </li>
        
        <li className="nav-item" >
        <NavLink className="nav-link text-white" activeClassName="active" to="/portfolio">Portfolio</NavLink>
        </li>
        
        <li className="nav-item" >
        <NavLink className="nav-link text-white" activeClassName="active" to="/contact">Contact</NavLink>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Header