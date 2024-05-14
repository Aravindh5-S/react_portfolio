import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import "./nav.css"


function Nav() {


    return (
        <>
            <div className="navbar">
                <div className="nav-logo">

                    <Link to="/"><span className="brand">
                        Aravindh</span></Link>

                </div>

                <ul className="nav-list">
                    <li id='1' className='nav-item active'>
                        <Link to="/">Home</Link>
                    </li>
                    <li id='1' className='nav-item'>

                        <Link to="/about">About</Link>
                    </li>
                    <li id='1' className='nav-item'>
                        <Link to="/services">Services</Link>
                    </li>
                    <li id='1' className='nav-item'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li id='1' className='nav-item'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                {/* <button className='nav-btn' onClick={toggleMobileMenu}>
                {isMobile ? <IoClose /> : <HiBars3 />}
            </button> */}
            </div>


        </>
    )
}

export default Nav