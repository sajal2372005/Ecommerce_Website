import React, { useState,useEffect } from 'react';
import Fashion from '../assets/Fashion.png';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context.jsx';


const Login = () => {
    // const useToken = localStorage.getItem("token");
    // const useUserName = localStorage.getItem("UserName");
    // const usePassword = localStorage.getItem("Password");
    // const {cUserName,cSetUserName,cPassword,cSetPassword} = useAppContext();
    // const navigate = useNavigate();
    // const [userName,setUserName] = useState(useUserName || "");
    // const [password,setPassword] = useState(usePassword || "");
    // const handleLogin = () =>{
    //     if (!useToken) {
    //         alert("Please sign up to log in");
    //         navigate('/signup');
    //         return;
    //     }
    //     if(userName === "" || password === ""){
    //         alert("Please fill in all fields");
    //         return;
    //     }
    //     else{
    //         if(userName === useUserName && password === usePassword){
    //             cSetUserName(userName);
    //             cSetPassword(password);
    //             navigate('/');
    //         }
    //         else{
    //             alert("Invalid username or password");
    //         }
    //     }
    // }
    const localUserName = localStorage.getItem("UserName");
    const localPassword = localStorage.getItem("Password");
    const navigate = useNavigate();
    const [LuserName, setUserName] = useState(localUserName || "");
    const [Lpassword, setPassword] = useState(localPassword || "");
    const { state, dispatch } = useAppContext();


    useEffect(() =>{
        if (state.isLoggedIn){
            navigate('/');
        }
        
    },[state.isLoggedIn, navigate]);
    const handleLogin = () => {
        if (LuserName === "" || Lpassword === "") {
            alert("Please fill in all fields");
            return;
        }
        else{
            dispatch({type:"login", payload:{username: LuserName, password: Lpassword}});
            
        }
        
    }
    return (
        <>
            <div className="login-page">
                <div className="login-page__overlay">
                </div>
                <div className="login-page__panel">
                    <div className="login-page__brand">
                        <img src={Fashion} alt="logo" className="login-page__logo" />
                    </div>
                    <h1 className="login-page__title">Welcome to Our Store!</h1>
                    <p className="login-page__subtitle">Please log in to access your account and start shopping.</p>
                    <input type="text" className="login-page__input" placeholder="Username" value={LuserName} onChange={(e) => { setUserName(e.target.value) }} />
                    <input type="password" className="login-page__input" placeholder="Password" value={Lpassword} onChange={(e) => { setPassword(e.target.value) }} />
                    <button id="login-button" onClick={handleLogin}>Log In</button>
                    <p className="login-page__signup-link">Don't have an account? <Link to="/signup" style={{ color: 'blue', textDecoration: 'underline', display: 'inline' }}>Sign Up</Link></p>

                </div>


            </div>

        </>
    )
}

export default Login;