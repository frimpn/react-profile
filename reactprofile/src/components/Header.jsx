import React from 'react'

const header = {
  navBar: {
    width: '100vw',
    display:'flex',
    justifyContent: 'center',
    fontSize: 25,
    },
    navItem:{
      marginRight: 40,
      marginLeft: 40
    }
}

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={header.navBar}>
        <li className="nav-item" style={header.navItem}>
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item" style={header.navItem}>
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item" style={header.navItem}>
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item" style={header.navItem}>
          <a className="nav-link" href="#">Resume</a>
        </li>
        <li className="nav-item" style={header.navItem}>
          <a className="nav-link" href="#">Contact</a>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Header