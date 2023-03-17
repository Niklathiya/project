import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

const Header = () => {
    return (
        <div>
            <header className="navbar navbar-expand-lg navbar-light bg_color_1">
                <div className="container-fluid header-space">
                    <a className="logo me-5" href="#">
                        <img src="images/logo.svg" className="img-fluid" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center text-lg-start">
                            <li className="nav-item">
                                <Link to="/Home" className="nav-link fw-bold mx-3">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link fw-bold mx-3">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Services" className="nav-link fw-bold mx-3">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link fw-bold mx-3">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="p-2">
                            <button className="btn btn_1 rounded-pill fw-bold d-block mx-auto mx-lg-0 mb-3 mb-lg-0 btn_shadow" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <span>Get Start <i className="fa-solid fa-arrow-right" /></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </div>

    )
}

export default Header