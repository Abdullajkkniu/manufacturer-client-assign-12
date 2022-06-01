import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchasingModal from './PurchasingModal';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState({});
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const url = `https://peaceful-harbor-95705.herokuapp.com/tool/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [purchaseId])
    return (
        <div className='border mx-auto w-1/2 p-4'>
            <img className='mx-auto w-96' src={purchase.img} alt="" />
            <h1 className='text-xl font-bold text-center'>Tool id: {purchaseId}</h1>
            <h2 className='text-xl font-bold text-center'>Tool name: {purchase.name}</h2>
            <h2 className='text-xl font-bold text-center'>Available tools: {purchase.available}</h2>
            <h2 className='text-xl font-bold text-center'>Minimum Order: {purchase.quantity}</h2>

            {order && <PurchasingModal setPurchase={setPurchase} order={order}></PurchasingModal>}

            <label for="purchasing-modal" onClick={() => setOrder(purchase)} className="btn btn-primary mt-4 block pt-4 mx-auto w-1/2 ">Purchase</label>

        </div>
    );
};

export default Purchase;