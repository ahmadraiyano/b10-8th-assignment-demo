import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCart, getStoredWishlist, addToStoredCart } from '../utility/db';
import { LiaDollarSignSolid } from "react-icons/lia";

const Dashboard = () => {
    document.title = "Dashboard | Gadget Heaven";

    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const handleCart = (id) => {
        addToStoredCart(id);
    }

    const allGadgets = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCart();

        const cartGadgetList = allGadgets.filter(gadget => storedCartList.includes(gadget.product_id));

        setCartList(cartGadgetList);
        
    },[]);

    useEffect(() => {
        const storedWishList = getStoredWishlist();

        const wishGadgetList = allGadgets.filter(gadget => storedWishList.includes(gadget.product_id));

        setWishList(wishGadgetList);
        
    },[]);

    

    return (
        <div>
            <div className='bg-purple-500 py-10 relative mb-[420px]'>
            <div className='w-9/12 mx-auto text-white'>
                <h2 className="text-2xl text-center font-bold mb-6">Dashboard</h2>
                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div className='h-[80px]'></div>
            <div>
                <Tabs>
                    <TabList className={'mb-60'}>
                        <div className='text-center'>
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                        </div>
                    </TabList>

                    <TabPanel className={'absolute min-w-[600px]  top-72 w-10/12 left-7 lg:left-24 p-4 rounded-lg'}>
                        <div className='bg-gray-100 p-4 rounded-lg'>
                        <h2 className='text-2xl font-bold'>Cart</h2>
                        {
                            cartList.map(gadget => <div key={gadget.product_id}>
                                <div className='flex bg-white mb-4'>
                                <div className='w-56 h-36 flex justify-center py-2'>
                                    <img src={gadget.product_image} alt={gadget.product_id} className='rounded-xl w-32 object-cover'/>
                                </div>
                                <div className='flex flex-col justify-evenly'>
                                    <h2 className='font-bold text-xl'>{gadget.product_title}</h2>
                                    <p className='text-gray-500'>{gadget.description}</p>
                                    <p className='flex items-center content-center'>Price: <span className='text-md'><LiaDollarSignSolid /></span>{gadget.price}</p>
                                </div>
                                </div>
                            </div>)
                        }
                        </div>
                        
                    </TabPanel>
                    <TabPanel className={'absolute min-w-[600px]  top-72 w-10/12 left-7 lg:left-24 p-4 rounded-lg'}>
                        <div className='bg-gray-100 p-4 rounded-lg'>
                        <h2 className='text-2xl font-bold'>Wishlist</h2>
                        {
                            wishList.map(gadget => <div>
                                <div className='flex bg-white mb-4'>
                                <div className='w-56 h-36 flex justify-center py-2'>
                                    <img src={gadget.product_image} alt={gadget.product_id} className='rounded-xl w-32 object-cover'/>
                                </div>
                                <div className='flex flex-col justify-evenly'>
                                    <h2 className='font-bold text-xl'>{gadget.product_title}</h2>
                                    <p className='text-gray-500'>Description: {gadget.description}</p>
                                    <p className='flex items-center content-center'>Price: <span className='text-md'><LiaDollarSignSolid /></span>{gadget.price}</p>
                                    <button onClick={() => handleCart(gadget.product_id)} className="btn">Add To Cart</button>
                                </div>
                                </div>
                            </div>)
                        }
                        </div>
                        
                    </TabPanel>
                </Tabs>
            </div>
            
            </div>
            <div className='min-h-[700px]'></div>
        </div>
    );
};

export default Dashboard;