import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { LiaDollarSignSolid } from "react-icons/lia";
import { CiStar, CiHeart, CiShoppingCart } from "react-icons/ci";
import { addToStoredCart } from '../utility/cart';
import { addToStoredWishlist } from '../utility/wishlist';

const GadgetDetails = () => {

    document.title = "Details | Gadget Heaven";

    const { product_id } = useParams();

    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.product_id === product_id);

    const { product_image, product_title, price, availability, Specification, description, rating, product_id: id } = gadget;

    const handleCart = (id) => {
        addToStoredCart(id)
    }

    const handleWishlist = (id) => {
        addToStoredWishlist(id)
    }


    return (
        <div className='bg-purple-500 py-10 relative mb-[420px]'>
            <div className='w-9/12 mx-auto text-white'>
                <h2 className="text-2xl text-center font-bold mb-6">Product Details</h2>
                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='h-[180px]'></div>

            <div className="bg-white absolute -bottom-24 lg:-bottom-96 w-10/12 left-7 lg:left-24 border-slate-100 p-4 border rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg" />
                    <div className='gap-y-4'>
                        <h1 className="text-5xl font-bold">{product_title}</h1>
                        <p className='flex items-center content-center my-4'>Price: <span className='text-md'><LiaDollarSignSolid /></span>{price}</p>
                        <p className='border inline-block py-1 px-2 bg-teal-100 border-teal-500 text-teal-500 rounded-2xl'>{availability === true? 'In Stock': ''}</p>
                        <p className='my-4'>{description}</p>
                        <div>
                        <h3 className='font-bold text-lg'>Specification</h3>
                        <ol className='text-gray-500'>
                            <li>1: {Specification[0]}</li>
                            <li>2: {Specification[1]}</li>
                            <li>3: {Specification[2]}</li>
                            <li>4: {Specification[3]}</li>
                        </ol>
                        </div>
                        <div className='my-4'>
                        <h3 className='font-bold text-lg'>Rating</h3>
                        <span className='flex content-center items-center'>
                        <span className='flex text-lg'><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></span>
                        <p className='ml-1'>{rating}</p>
                        </span>
                        </div>
                        <div className='flex gap-x-2'>
                        <button onClick={() => handleCart(product_id)} className="btn">Add To Cart <span className='text-3xl'><CiShoppingCart/></span></button>
                        <Link onClick={() => handleWishlist(product_id)} className='border hover:bg-slate-200 text-3xl content-center items-center p-2 rounded-full'><CiHeart /></Link>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;