import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item" >
        <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
        </li>
        
        <li className="nav-item" >
        <NavLink className="nav-link" activeClassName="active" to="/portfolio">Portfolio</NavLink>
        </li>
        
        <li className="nav-item" >
        <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Header