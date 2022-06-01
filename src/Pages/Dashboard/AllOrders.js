import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import OrdersRow from './OrdersRow';
const AllOrders = () => {
    const { data: orders, isLoading, } = useQuery('orders', () => fetch('https://peaceful-harbor-95705.herokuapp.com/order').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-4'>All orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrdersRow key={order._id} order={order} index={index}></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;