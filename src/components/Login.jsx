import React,{useState} from 'react';
import Fashion from '../assets/Fashion.png';
import './login.css';
import {Link,useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = () =>{
        if(userName === "" || password === ""){
            alert("Please fill in all fields");
            return;
        }
        else{
            navigate('/');
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
                    <input type="text" className="login-page__input" placeholder="Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input type="password" className="login-page__input" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <button id="login-button" onClick={handleLogin}>Log In</button>

                </div>


            </div>

        </>
    )
}

export default Login;