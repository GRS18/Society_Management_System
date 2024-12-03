import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<div className="container-fluid">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">
                <img src="" alt="Logo" width="64" height="64" className="d-inline-block align-text-top"/>
                <h6>Home</h6>
              </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Features
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/admin">Admin</Link></li>
                            <li><Link className="dropdown-item" to="/staff">Staff</Link></li>
                            <li>
                                <Link className="dropdown-item" to="/resident">Residents</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
  );
}
export default Header;
