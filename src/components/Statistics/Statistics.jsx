import React from 'react';
import { XAxis, YAxis, BarChart, Bar } from 'recharts';

const Statistics = () => {
    document.title = "Statistics | Gadget Heaven";

    const data = [
        {
            "product_title": "Watch 8",
            "price": 399,
            "rating": 4.8
        },
        {
            "product_title": "Samsung Watch5",
            "price": 329,
            "rating": 4.5
        },
        {
            "product_title": "iPad 11",
            "price": 799,
            "rating": 4.8
        },
        {
            "product_title": "Galaxy S8",
            "price": 699,
            "rating": 4.6
        },
        {
            "product_title": "HP Spectre",
            "price": 1399,
            "rating": 4.6
        },
        {
            "product_title": "OnePlus 11 5G",
            "price": 799,
            "rating": 4.6
        },
        {
            "product_title": "Fitbit Versa 4",
            "price": 229,
            "rating": 4.5
        },
        {
            "product_title": "Lenovo P11 Pro",
            "price": 499,
            "rating": 4.4
        }
    ]



    return (
        <div>
            <div className='bg-purple-500 text-white py-10'>
                <h2 className="text-2xl text-center font-bold mb-6">Dashboard</h2>
                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div className='w-11/12 mx-auto p-4'>
                <h2 className='text-xl font-bold mb-4'>Statistics</h2>
                <div className='bg-white p-8'>
                    <BarChart width={1080} height={400} data={data}>
                        <XAxis dataKey="product_title" />
                        <YAxis></YAxis>
                        <Bar dataKey="price" fill="#b846fa" barSize={30} />
                        <Bar dataKey="rating" fill="red" barSize={30} />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;