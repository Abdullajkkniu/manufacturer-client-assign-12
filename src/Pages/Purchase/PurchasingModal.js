import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const PurchasingModal = ({ order, setPurchase, setOrder }) => {
    const { _id, name, available } = order;
    const [user, loading, error] = useAuthState(auth);


    const handleBooking = event => {
        event.preventDefault();
        const firstname = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;
        console.log(firstname, email, phone, address, quantity);

        const booking = {
            purchaseId: _id,
            purchase: name,
            customer: user.email,
            customerName: event.target.name.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
            address: event.target.address.value
        }

        fetch('https://peaceful-harbor-95705.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast('Your order is successful')
                }
                console.log(data);

            })
    }
    return (
        <div>
            <input type="checkbox" id="purchasing-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="purchasing-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="text-primary font-bold text-lg text-center">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" placeholder="Name" name="name" class="input input-bordered w-full max-w-xs" required />
                        <input type="email" disabled name="email" value={user?.email} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Address" class="input input-bordered w-full max-w-xs" required />
                        <input type="text" name="phone" placeholder="Phone" class="input input-bordered w-full max-w-xs" required />
                        <input type="text" name="quantity" placeholder="Add your quantity (unit)" class="input input-bordered w-full max-w-xs" required />

                        <input type="submit" value="Confirm Order" placeholder="Type here" class="btn btn-primary w-full max-w-xs" />
                    </form>


                </div>
            </div>
        </div >
    );
};

export default PurchasingModal;