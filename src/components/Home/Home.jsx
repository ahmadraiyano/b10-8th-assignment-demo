import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';
import Category from '../Category/Category';

const Home = () => {
        document.title = "Gadgets | Gadget Heaven";

    return (
        <div className=' w-11/12 mx-auto'>
            <Banner></Banner>
            <div className='mt-[160px] lg:mt-[480px]'>
            <h2 className='text-2xl font-bold text-center mb-8'>Explore Cutting-Edge Gadgets</h2>
            <div className='lg:flex items-start gap-x-2'>
            <Category></Category>
            <Gadgets></Gadgets>
            </div>
            </div>
        </div>
    );
};

export default Home;