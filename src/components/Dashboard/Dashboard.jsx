import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCart } from '../utility/cart';
import { LiaDollarSignSolid } from "react-icons/lia";

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
                    <TabList className={'mb-96'}>
                        <div className='text-center'>
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                        </div>
                    </TabList>

                    <TabPanel className={'absolute min-w-[600px] bg-gray-100 top-96 w-10/12 left-7 lg:left-24 p-4 rounded-lg'}>
                        <div>
                        <h2 className='text-2xl font-bold'>Cart{cartList.length}</h2>
                        {
                            cartList.map(gadget => <div>
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
                    <TabPanel>
                        <h2 className='text-2xl font-bold'>Wishlist</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;