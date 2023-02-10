import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mx-4" href="#"> <h2> Khoa Store</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-3 mr-3">

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>    
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/About">About us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Product">Products</NavLink>
                    </li>
                    <form className="d-flex">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                </ul>                                       
            </div>
        </nav>

    </div>
  )
}

export default Nav