import React from 'react';

const Category = () => {


    const handleSort = sortType => {
        setSort(sortType);
    }
    return (
        <div className='bg-white p-4'>
            <ul className='flex flex-row lg:flex-col w-36 gap-2'>
                <button className='p-2 bg-gray-300 text-sm md:btn'>All Products</button>
                <button className='p-2 bg-gray-300 text-sm md:btn'>Phone</button>
                <button className='p-2 bg-gray-300 text-sm md:btn'>Tablet</button>
                <button className='p-2 bg-gray-300 text-sm md:btn'>Laptop</button>
                <button className='p-2 bg-gray-300 text-sm md:btn'>Smart Watch</button>
            </ul>
        </div>
    );
};

export default Category;