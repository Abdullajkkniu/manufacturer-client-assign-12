import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('orders', () => fetch('https://peaceful-harbor-95705.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-4'>All users: {users.length}</h1>
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Customer Name</th>
                        <th>Customer Name</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;