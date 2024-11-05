import React from 'react';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';

const NavContainer = () => {
    return (
        <div className='bg-yellow-500'>
            <NavBar></NavBar>
            <Hero></Hero>
        </div>
    );
};

export default NavContainer;