import React, { useState } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';


export default function Header() {
    const [userLoginLink, setUserLoginLink] = useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} width="200" />
            </div>

            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact"> Contact Us</Link></li>
                    {/* <li onClick={() => {
                        userLoginLink === "Login" ? setUserLoginLink("Logout") : setUserLoginLink("Login");
                    }}><a>{userLoginLink}</a></li> */}
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}
