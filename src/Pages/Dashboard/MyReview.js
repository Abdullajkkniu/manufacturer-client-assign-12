import React from 'react';

const MyReview = () => {
    const handleSubmit= (event)=>{
        event.preventDefault()
        const firstname = event.target.revieww.value;
        const lastname = event.target.ratingsss.value;
        console.log(firstname, lastname);
    }
    return (
        <div>
                

            <h1 className='text-2xl text-center my-4 font-bold'>My review</h1>
            <div className='border w-1/2 mx-auto p-6'>
                <label className='text-center block mb-4' htmlFor="">Please write something:</label>
                <form onSubmit={handleSubmit}>
                <textarea name="revieww" className='border mx-auto block' id="" cols="30" rows="4"></textarea>
            
                <input type="text" className='border' />
            
            
            <button className='btn btn-xs mx-auto block my-4'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MyReview;

