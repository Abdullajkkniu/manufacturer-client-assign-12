import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        const url=`https://peaceful-harbor-95705.herokuapp.com/tool`;
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    };
    return (
        <div>
            <h1 className='text-2xl my-4 text-center font-serif'>Please add your product</h1>
            <form className='w-1/2 mx-auto border p-4 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' className="w-full p-2 rounded-lg border block mb-2" {...register("name")} />
                <input placeholder='Description' className="w-full p-2 rounded-lg border block mb-2" {...register("description")} />
                <input placeholder='Quantity' className="w-full p-2 rounded-lg border block mb-2" type="number" {...register("quantity")} />
                <input placeholder='Photo Url' className="w-full p-2 rounded-lg border block mb-2" type="text" {...register("img")} />
                <input className='w-full p-2 rounded-lg btn btn-sm mx-auto block' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;