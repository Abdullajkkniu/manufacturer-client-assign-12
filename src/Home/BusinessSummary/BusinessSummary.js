
import img1 from '../../images/clients.png';
import img2 from '../../images/countries.png';
import img3 from '../../images/revenue.png';
import img4 from '../../images/rating.png';
import BusinessSummary2 from './BusinessSummary2';

const BusinessSummary = () => {
    const icons = [
        {
            _id: 1,
            img: img1,
            name: 'Happy clients',
            quantity: '158+'
        },
        {
            _id: 2,
            img: img2,
            name: 'Countries',
            quantity: '50+'
        },
        {
            _id: 3,
            img: img3,
            name: 'Annual revenues',
            quantity: '107+ millions'
        },
        {
            _id: 4,
            img: img4,
            name: 'Customer ratings',
            quantity: '258+'

        }
    ]


    return (
        <div>
            <h1 className='text-4xl font-bold text-center '>WE ARE TRUSTED BY MILLION BUSINESS</h1>
            <br />
            <h2 className='text-center text-2xl'>Here are some samples of out manufacturing business</h2>
            <div className='grid lg:grid-cols-4  sm:grid-cols-1 gap-10 text-center my-12'>

                {
                    icons.map(icon => <BusinessSummary2 key={icon._id} icon={icon}></BusinessSummary2>)
                }

            </div>
            

            <div class="card grid mx-12 lg:grid-cols-1  card-side bg-base-100 shadow-xl">

                <div class="card-body">
                    <h2 class="text-center text-2xl  font-bold">Do you have any questions? Please contact with us</h2>
                    <br />
                    <p className='text-center text-xl font-bold'>We are available in 24/7</p>
                    <br />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary mx-auto">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;