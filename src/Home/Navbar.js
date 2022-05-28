import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth)
  const handleSignOut=()=>{
    signOut(auth);
    localStorage.removeItem('accessToken')
  }
    const menuItems = <>

    <li><Link to="/">Home</Link></li>
    
    <li><Link to="/review">Review</Link></li>
    <li><Link to="/portfolio">Portfolio</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    <li><Link to="/about">About</Link></li>
    
    {
      user && <li><Link to="/dashboard">Dashboar</Link></li>
    }
    
    {
              user ? <Nav.Link className='flex items-center mx-auto' onClick={handleSignOut}>SignOut</Nav.Link> : 
              <Nav.Link className='flex items-center mx-auto' eventKey={2} as={Link} to="/login">
              Login
            </Nav.Link>}
    
  </>
    return (
        <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            
            <Link to="/" className="btn btn-ghost normal-case text-xl"> TechByko</Link>
          </div>
          <div className='navbar-end'>
            <label for="my-drawer-2" tabIndex="0" className="btn btn-primary drawer-button lg:hidden ">Dashboard</label>
            </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;