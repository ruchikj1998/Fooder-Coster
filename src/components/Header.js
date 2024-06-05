import React from 'react';
import logo from '../../logo.png';

export default function Header() {
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
                </ul>
            </div>
        </div>
  )
}
