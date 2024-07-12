import React, { useState } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export default function Header() {
    const [userLoginLink, setUserLoginLink] = useState("Login")
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header flex justify-between w-full shadow-md">
            <div className="logo w-1/6">
                <img className='shadow-md' src={logo} width="200" />
            </div>

            <div className="nav w-5/6 flex justify-end items-center ">
                <ul className='flex p-4 m-4 font-bold'>
                    <li className='mx-2'>Online Status : { onlineStatus ? "🟢" : "🔴"  }</li>
                    <li className='mx-2 hover:underline'><Link to="/">Home</Link></li>
                    <li className='mx-2 hover:underline'><Link to="/about">About Us</Link></li>
                    <li className='mx-2 hover:underline'><Link to="/contact"> Contact Us</Link></li>
                    {/* <li onClick={() => {
                        userLoginLink === "Login" ? setUserLoginLink("Logout") : setUserLoginLink("Login");
                    }}><a>{userLoginLink}</a></li> */}
                    <li className='mx-2 hover:underline'><Link to="/login">Login</Link></li>
                    <li className='mx-2 hover:underline'><Link to="/grocery"> Grocery</Link></li>
                </ul>
            </div>
        </div>
    )
}
