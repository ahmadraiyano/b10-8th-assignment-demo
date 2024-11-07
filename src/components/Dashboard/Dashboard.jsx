import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { getStoredCart } from '../utility/cart';

const Dashboard = () => {
    document.title = "Dashboard | Gadget Heaven";

    const [cartList, setCartList] = useState([]);

    const allGadgets = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCart();

        console.log(allGadgets, storedCartList);

        const cartGadgetList = allGadgets.filter(gadget => storedCartList.includes(gadget.product_id));

        setCartList(cartGadgetList);
        
    },[]);

    

    return (
        <div className='bg-purple-500 py-10 relative mb-[420px]'>
            <div className='w-9/12 mx-auto text-white'>
                <h2 className="text-2xl text-center font-bold mb-6">Dashboard</h2>
                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div className='h-[180px]'></div>
            <div>
                <Tabs>
                    <TabList>
                        <div className='text-center'>
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl font-bold'>Cart{cartList.length}</h2>
                        <Cart></Cart>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl font-bold'>Wishlist</h2>
                        <Wishlist></Wishlist>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;