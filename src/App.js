
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Banner from './Home/Banner';
import Footer from './Home/Footer';
import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Tools from './Home/Tools';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login/Login';
import Reset from './Pages/Login/Reset/Reset';
import SignUp from './Pages/Login/SignUp';
import Notfound from './Pages/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import Reviews from './Pages/Reviews/Reviews';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorder from './Pages/Dashboard/Myorder';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllOrders from './Pages/Dashboard/AllOrders';
import AllUsers from './Pages/Dashboard/AllUsers';
import MyPortfolio from './Pages/MyPortfolio';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/purchase/:purchaseId' element={
        <RequiredAuth>
          <Purchase></Purchase>
        </RequiredAuth>
        }></Route>
        <Route path='/dashboard' element={
        <RequiredAuth>
          <Dashboard></Dashboard>
        </RequiredAuth>
        }>
          <Route index element={<Myorder></Myorder>}></Route>
          <Route path="reviews" element={<MyReview></MyReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="allorders" element={<AllOrders></AllOrders>}></Route>
          <Route path="allusers" element={<AllUsers></AllUsers>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
        </Route>
        

        
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        
        <Route path='/*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
