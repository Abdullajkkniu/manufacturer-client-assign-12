import React from 'react';

const BusinessSummary2 = (props) => {
    const { img, name, quantity } = props.icon;
    return (
        <div>
            <div className='mx-auto'>
                <img className='mx-auto w-20' src={img} alt="" />
                <h2 className='text-4xl font-bold'>{quantity}</h2>
                <h2 className='text-2xl font-bold '>{name}</h2>
            </div>
            
        </div>
    );
};

export default BusinessSummary2;