// components/NavHeader.js
import React from 'react';
import './NavHeader.css';
import { Link } from 'react-router-dom';

const NavHeader = () => {
    return (
        <nav className='tieude'>
            <ul className='tieude-item'>
                <li className='tieude-item-item'>
                    <Link to="/">Home</Link>
                </li>
                <li className='tieude-item-item'>
                    <Link to="/login">Login</Link>
                </li>
                <li className='tieude-item-item'>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className='tieude-item-item'>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavHeader;