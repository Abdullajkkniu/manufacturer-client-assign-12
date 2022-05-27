import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-center mt-10 text-warning font-bold'>OUR CUSTOMER</h1>
            <h1 className='text-center  text-4xl font-bold text-info mb-6'>REVIEWS</h1>
            <div class="rating rating-lg rating-half text-center block">
                <input type="radio" name="rating-10" class="rating-hidden" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
            </div>
        </div>
    );
};

export default Reviews;