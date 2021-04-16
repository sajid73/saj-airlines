import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../images/meat.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <Container>
            <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          <a className="navbar-brand link" style={{float: 'left'}} href="/">SAJ Airlines </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <img src={icon} width="40px" alt=""/>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link me-4 link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4 link" to="#services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4 link" to="#destinations">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4 link" to="#reviews">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4 link" to="/login">Login</Link>
            </li>
          </ul>
          </div>
          </div>
        </nav>
            </Container>
        </div>
    );
};

export default Navbar;