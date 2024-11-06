import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets]= useState([]);

    useEffect(() => {
        fetch('gadgetsData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[]);

    return (
        <div className='mt-[160px] lg:mt-[480px]'>
            <h2 className='text-2xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;