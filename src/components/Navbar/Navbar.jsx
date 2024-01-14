import React from 'react';
import '../Homepage/homepage.css';
import '../Navbar/navbar.css';



const Navbar = () => {
    return (
        <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light pr-0 pl-0 pt-0 pb-0" id="navpadding">
  <a className="navbar-brand navlogo" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active paddingnav">
        <a className="nav-link" href="#">Internships <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item paddingnav">
        <a className="nav-link" href="#">Aplly now</a>
      </li>
      <li className="nav-item dropdown paddingnav">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success ml-2 my-sm-0" type="submit">Login</button>
      <button className="btn btn-success ml-3 mr-3 my-sm-0" type="submit">Register</button>
      <div className='vl'></div>
      <button className="btn btn-outline-success  ml-3 mr-3 my-sm-0" type="submit">Hire Now</button>
    </form>
  </div>
</nav>

        </>
    )
}

export default Navbar
