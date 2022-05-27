import React from 'react';
import { Link } from 'react-router-dom';
import '../Success/Success.css';

const Success = () => {
    return (
        <div className='border container p-5 mt-5 text-center'>
            <h1 className='text-success mt-5'>Order Successfull !</h1>
            <br />
            <Link to='/' className='nav-links'>Go Home</Link>
        </div>
    );
};

export default Success;