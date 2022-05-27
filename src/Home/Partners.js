import React from 'react';
import img1 from '../images/walton.png';
import img2 from '../images/ss.png';
import img3 from '../images/Energypac-power.png';
import img4 from '../images/adex.png';
import Partner from '../Home/Partner';

const Partners = () => {
    const partners = [
        {
            _id: 1,
            img: img1,
            name: 'WALTON HI-TECH INDUSTRIES PLC.'
            
        },
        {
            _id: 2,
            img: img2,
            name: 'S.S. MOTORS LTD.'
            
        },
        {
            _id: 3,
            img: img3,
            name: 'ENERGYPAC POWER GENERATION LTD.'
            
        },
        {
            _id: 4,
            img: img4,
            name: 'ADEX CORPORATION LTD.'
            

        }
    ]
    return (
        <div>
            <h1 className='text-center mt-10 text-warning font-bold'>MEET OUR</h1>
            <h1 className='text-center  text-4xl font-bold text-info'>PARTNERS</h1>

            <div className='grid justify-items-center lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-10 text-center my-12 mx-auto container'>
            {
                partners.map(partner=> <Partner key={partner._id} partner={partner}></Partner>)
            }
        </div>
        </div>
    );
};

export default Partners;