import React from 'react';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Review from './Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mt-10 text-warning font-bold'>Our Customers</h1>
            <h1 className='text-center  text-4xl font-bold text-info'>Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }


            </div>

        </div>
    );
};

export default Reviews;