import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./App.css";

const Header = () =>{

        const[cartItems, setCartItems] = useState([]);

    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand" >
                Golden Shoes
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link"  aria-current="page" >
                    Home
                    </Link >
                </li>
                <li className="nav-item">
                    <Link to="/Signup"  className="nav-link" aria-current="page">
                    Signup
                    </Link >
                </li>
                <li className="nav-item">
                    <Link to="/SignIn" className="nav-link" >
                    SignIn
                    </Link>
                </li>
                <li className="nav-item">
                
                    <Link to="/cart" className="nav-link" >
                        <i class="fas fa-shopping-bag">1</i>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );

    return (
        <header className="header">
            
            {showNavigation()}
        </header>
    )
    

};

export default Header;