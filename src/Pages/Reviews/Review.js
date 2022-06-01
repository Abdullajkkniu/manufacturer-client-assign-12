import React from 'react';

const Review = (props) => {
    const {_id, description,Ratings}= props.review;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
                
                <div class="card-body">
                    
                    <p>Description: {description}</p>
                    <p>Ratings: {Ratings}</p>
                    
                    
                    </div>
                    </div>
    );
};

export default Review;