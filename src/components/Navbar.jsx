import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Palapas <img src={process.env.PUBLIC_URL + '/logo.jpg'} id='navbar-logo' alt='logo'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-3">
                        <li className="nav-item"><Link class="nav-link active" to={"/"}>Home</Link></li>
                        <li className="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
