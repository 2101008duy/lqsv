// pages/Home.js
import React from 'react';
import NavHeader from '../components/NavHeader';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <NavHeader />
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;