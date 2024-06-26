import React, { useState } from 'react';
import logo from '../../logo.png';


export default function Header() {
    const [userLoginLink, setUserLoginLink] = useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} width="200" />
            </div>

            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li onClick={() => {
                        userLoginLink === "Login" ? setUserLoginLink("Logout") : setUserLoginLink("Login");
                    }}><a>{userLoginLink}</a></li>
                </ul>
            </div>
        </div>
    )
}
