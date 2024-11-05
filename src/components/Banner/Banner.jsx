import React from 'react';
import BannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative w-11/12 mx-auto text-white bg-opacity-25 border-slate-900 px-4 pb-4 bg-slate-100 border-x border-b rounded-b-lg'>
            <div className="h-[576px] bg-purple-500">
                <div className="hero-content md:text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
            
            <div className="absolute -bottom-24 lg:-bottom-96 w-10/12 left-7 lg:left-24 bg-opacity-25 border-slate-100 p-4 bg-slate-100 border rounded-lg">
                <img className='rounded-xl' src={BannerImg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;