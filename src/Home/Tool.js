import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Home/Tool.css';

const Tool = (props) => {
    const { _id,price, description, name, img, quantity, available } = props.tool;

    const navigate = useNavigate();
    const navigateToPurchase = id =>{
        navigate(`/purchase/${id}`)
    }

    return (
        <div className='px-12 py-12'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img className='w-50 h-40' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Available: {available}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" onClick={()=>navigateToPurchase(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Tool;