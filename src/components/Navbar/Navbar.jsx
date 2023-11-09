import React, { useState } from 'react'
import './navbar.css'

import { Link } from 'react-router-dom'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-brand'><Link to='/'>CrtpoZone</Link></div>
                <div className='navbar-links'>
                    <a href="#">Home</a>
                    <a href="#market">Market</a>
                    <a href="#choose">Choose Us</a>
                    <a href="#join">Join</a>
                </div>
                <div className='social-icons'>
                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-discord"></i>
                </div>
                <button className='sidebar-toggle-1' onClick={toggleSidebar}>{isOpen ? 'X' : '☰'}</button>
            </nav>
            {/*mobile navbar*/}
            <div className={`mobile-nav ${isOpen ? 'open' : ' '}`}>
                <button className='sidebar-toggle-2' onClick={toggleSidebar}>{isOpen ? 'X' : '☰'}</button>
                <ul>
                    <li><a href='#' onClick={toggleSidebar}>Home</a> </li>
                    <li><a href='#learn' onClick={toggleSidebar}>Features</a></li>
                    <li><a href='#qr' onClick={toggleSidebar} className='try-now'>Try Now</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
