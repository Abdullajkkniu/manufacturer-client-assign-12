import React from 'react';
import {useQuery} from 'react-query';
const AllOrders = () => {
    const {data}= useQuery('orders', ()=>fetch(''))
    return (
        <div>
            <h1>all orders</h1>
        </div>
    );
};

export default AllOrders;