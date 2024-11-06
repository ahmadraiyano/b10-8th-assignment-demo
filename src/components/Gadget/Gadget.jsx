import React from 'react';
import { LiaDollarSignSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {

    const {product_id, product_image, product_title, price } = gadget;
    return (
        <div>
            <div className="card bg-base-100 w-92">
                <figure className="px-6 pt-6 h-64">
                    <img
                        src={product_image} alt={product_title}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p className='flex items-center content-center'>Price: <span className='text-md'><LiaDollarSignSolid /></span>{price}</p>
                    <div className="card-actions">
                        <Link to={`/gadgets/${product_id}`}><button className="btn btn-outline">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;