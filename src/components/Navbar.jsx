import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Palapas <img src={process.env.PUBLIC_URL + '/logo.jpg'} id='navbar-logo' alt='logo' />
                </Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <i className="bi bi-list" style={{ fontSize: '1.8rem', color: '#f5c518' }}></i>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-3">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                <i className="bi bi-house-door me-1"></i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={{ pathname: "/", hash: "#collection" }}>
                                <i className="bi bi-images me-1"></i>Collection
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={{ pathname: "/", hash: "#about" }}>
                                <i className="bi bi-info-circle me-1"></i>About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={{ pathname: "/", hash: "#contact" }}>
                                <i className="bi bi-envelope me-1"></i>Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
