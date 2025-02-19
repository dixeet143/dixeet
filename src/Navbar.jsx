import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <a className="navbar-brand text-info" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Whatsapp </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Tebla">Tebal</NavLink>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
