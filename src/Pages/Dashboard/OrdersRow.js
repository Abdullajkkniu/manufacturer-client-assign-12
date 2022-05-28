import React from 'react';

const OrdersRow = ({order, index}) => {
    const {customer, customerName, purchase, quantity}= order;

    return (
        <tr>
            <th>{index+1}</th>
            <td>{customer}</td>
            <td>{customerName}</td>
            <td>{purchase}</td>
            <td>{quantity}</td>
            
        </tr>
    );
};

export default OrdersRow;