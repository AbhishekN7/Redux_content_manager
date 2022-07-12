import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Redux Content management</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to="/">Home</Link>
                        <Link class="nav-link" to="/todo">Todo</Link>
                        <Link class="nav-link" to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
