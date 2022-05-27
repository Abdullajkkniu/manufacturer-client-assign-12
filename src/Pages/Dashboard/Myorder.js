import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5001/booking?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user])
    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-4'>My orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Product</th>
                            <th>Quantity</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order,index) => <tr>
                                <th>{index+1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.address}</td>
                                <td>{order.purchase}</td>
                                <td>{order.quantity}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorder;