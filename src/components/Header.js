import React, { useContext, useState } from 'react';
//import logo from '../../public/logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserInfo from '../utils/UserInfoContext';
import { useSelector } from 'react-redux';

export default function Header() {
    //const [userLoginLink, setUserLoginLink] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const {userName} = useContext(UserInfo);

    //Redux selector - Subscribing to the store using selector
    const cartItems = useSelector((store) => {
        return store.cart.items;
    });
    

    return (
        <div data-testid="header" className="header flex justify-between w-full shadow-md">
            <div className="logo w-1/6">
                {/* <img className='shadow-md' src={logo} width="200" /> */}
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
                    <li className='mx-2 hover:underline'><Link to="/login">Login : {userName}</Link></li>
                    <li className='mx-2 hover:underline'><Link to="/grocery"> Grocery</Link></li>
                    <li className='mx-2 hover:underline'><Link to="/cart"> Cart ({cartItems.length} items)</Link></li>
                </ul>
            </div>
        </div>
    )
}
