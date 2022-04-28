import React from "react";
import "../App.css";
import logo from "../assets/nowcircular.png";

const Navbar = () => (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Circular Logo" height={32} onClick={(e) => {e.preventDefault(); window.location.href='/#/';}}/>
        </div>
        <div className="nav-items">
            <button className="normal-button">
                Store
            </button>
            <button className="normal-button">
                About
            </button>
            <button className="normal-button">
                How To Rent
            </button>
        </div>
        <div className="user">
            <button className="normal-button" style={{ border: "2px solid white" }}>
                Log In
            </button>
            <button className="inverted-button">
                Sign Up
            </button>
        </div>
    </div>
)

export default Navbar;
