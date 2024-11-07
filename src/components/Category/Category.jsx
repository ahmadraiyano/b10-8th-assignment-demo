import React from 'react';

const Category = () => {
    return (
        <div className='bg-white p-4'>
            <ul className='flex flex-row lg:flex-col w-36 gap-2'>
                <li className='p-2 bg-gray-300 text-sm md:btn'>All Products</li>
                <li className='p-2 bg-gray-300 text-sm md:btn'>Phone</li>
                <li className='p-2 bg-gray-300 text-sm md:btn'>Tablet</li>
                <li className='p-2 bg-gray-300 text-sm md:btn'>Laptop</li>
                <li className='p-2 bg-gray-300 text-sm md:btn'>Smart Watch</li>
            </ul>
        </div>
    );
};

export default Category;