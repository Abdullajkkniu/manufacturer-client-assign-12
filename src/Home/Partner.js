import React from 'react';

const Partner = (props) => {
    const {img, name} = props.partner;
    return (
        <div>
            <img className='w-50 h-28' src={img} alt="" />
            <h2 className='text-lg font-bold my-4'>{name}</h2>
        </div>
    );
};

export default Partner;