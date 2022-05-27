import React from 'react';
import img1 from '../images/471.jpg'

const Request = () => {
    return (
        <div>
            <h1 className='text-center mt-10 text-warning font-bold'>NEED HELP?</h1>
            <h1 className='text-center  text-3xl mb-6 font-bold text-info'>PLEASE FILL-UP THE REQUESTED FORM</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-96 mx-auto' src={img1} alt="img" />
                    <div>
                        <h1 class="text-5xl font-bold">Request A Quote</h1><br />
                        
                        <div class=" form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-bordered" />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Opinion</span>
                            </label>
                            <textarea class="textarea textarea-bordered" placeholder="Opinion"></textarea>
                            
                        </div>
                        <div class="form-control mt-6"></div>
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Request;