import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const NavBar = () => {

    const links =
        <>
            <li><NavLink to="/" Id="home">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>

    return (
        
            <div className="w-11/12 mx-auto   bg-opacity-25 border-slate-900 px-4 pt-4 border-x border-t rounded-t-lg box-border">
                <div className='bg-purple-500 navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-1 md:gap-2">
                    <a className="md:p-2 rounded-full bg-white text-xl"><CiShoppingCart/></a>
                    <a className="md:p-2 rounded-full bg-white text-xl"><CiHeart /></a>
                </div>
                </div>
            </div>
    );
};

export default NavBar;