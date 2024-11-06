import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
        document.title = "Gadgets | Gadget Heaven";

    return (
        <div className=' w-11/12 mx-auto'>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;