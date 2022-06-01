import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user]= useAuthState(auth)
  const [admin]= useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <h2 className='text-4xl text-purple-500 text-center font-bold'>Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My-Orders</Link></li>
      <li><Link to="/dashboard/reviews">My-Reviews</Link></li>
      <li><Link to="/dashboard/myprofile">My-Profile</Link></li>
      {admin && <li><Link to="/dashboard/allorders">All Orders</Link></li>}
      {admin && <li><Link to="/dashboard/allusers">All Users</Link></li>}
      {admin && <li><Link to="/dashboard/addproduct">Add Product</Link></li>}
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;