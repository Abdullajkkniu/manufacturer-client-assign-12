import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import '../Login/Login.css';
import image1 from '../../images/google1.png';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    })


    const [
        signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);



    const handleEmailChange = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ ...errors, email: "invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userInfo)
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    const handlePasswordChange = e => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" })

        }
        else {
            setErrors({ ...errors, password: "invalid password" })
            setUserInfo({ ...userInfo, password: "" });
        }
    }
    useEffect(() => {
        const error1 = error;
        if (error1) {
            switch (error1?.code) {
                case "auth/invalid-email":
                    alert("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    alert("Wrong password. Intruder!!")
                    break;
                default:
                    alert("Invalid email and password")
            }
        }
    }, [error]);


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])


    return (

        <div>
            <h2 className='title mt-4 text-center'>TechByko</h2>
            <div className=' border-set container w-96 mx-auto mt-2 pb-4'>

                <div>
                    <h3 className='p-2 text-center font-bold'>Please Login</h3>
                    <form onSubmit={handleLogin}>
                        <input className='radius-set w-80 block mb-3 mx-auto p-2 border' onChange={handleEmailChange} type="text" placeholder='Your Email' required />
                        {errors?.email && <p>{errors.email}</p>}

                        <input className='radius-set w-80 block mx-auto p-2 border mb-3' onChange={handlePasswordChange} type="password" placeholder='Your password' required />
                        {errors?.password && <p>{errors.password}</p>}
                        <button className='w-80 button-colors block mx-auto p-2'>Login</button>

                        <p className='pt-2 ml-8 '><small>Don't have an account? <Link to="/signup" className='set-text text-primary '>Sign up</Link> </small></p>
                        <small><Link to="/reset" className='set-text  ml-8'>Forget Password?</Link></small>


                    </form>

                </div>
            </div>
            <hr className='w-28 mx-auto' />
            <button onClick={() => signInWithGoogle()} className='flex justify-evenly w-96 google-btn mt-3 px-4  mx-auto p-2'> <img className='google-image' src={image1} alt="" /> Google Sign In</button>
        </div>
    );
};

export default Login;