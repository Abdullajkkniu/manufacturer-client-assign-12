import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-info font-bold my-8'>Welcome To My Portfolio</h1>
            <div className='border mx-auto w-1/2 p-6 container'>
                <h1 className='text-center my-4 text-info font-bold text-2xl'>Details</h1>
            <h1 className="text-bold text-2xl">Name: Md: Abdul Alim</h1>
            <h1 className="text-bold text-2xl">Email: abdulalimjkkniu@gmail.com</h1>
            <h1 className="text-bold text-2xl">Background : BBA in Accounting and information systems</h1>
            <h1 className="text-bold text-2xl">Skills: HTML,CSS,Bootstrap,tailwindcss, Javascript, React js, Mongodb, node(CRUD)</h1>
            
            </div>
            
            <div className='border w-1/2 p-6 my-8 mx-auto container'>
            <h1 className='text-center text-2xl text-info'>Top 3 website live link:</h1>
            
            <p className='text-primary text-2xl block text-center  mx-auto pt-4'>1. <a  href="https://my-photoshot.web.app">https://my-photoshot.web.app</a></p>
            <p className='text-primary text-center block  mx-auto pt-4 text-2xl'>2. <a  href="https://my-photoshot.web.app"> https://my-warehouse-management.web.app/</a></p>
            <p className='text-primary block text-center  mx-auto pt-4 text-2xl'>3. <a  href="https://my-photoshot.web.app">https://heartfelt-starship-6aa276.netlify.app/</a></p>
            </div>
        </div>
    );
};

export default MyPortfolio;
