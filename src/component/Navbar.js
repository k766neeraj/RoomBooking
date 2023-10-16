import { Link } from "react-router-dom"
import React from 'react'

function Navbar() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light my-3 fs-3 border rounded-2" style={{backgroundColor:"rgb(174 201 206)"}}>
            <div class="container-fluid">
                <Link class="navbar-brand " to="/">Hotel Booking</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse"  id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around" style={{width:"80vw"}}>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
            
                    </ul>
                </div>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar
