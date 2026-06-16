import React,{useState} from 'react';
import Fashion from '../assets/Fashion.png';
import './login.css';
import {Link,useNavigate} from 'react-router-dom';
import {useAppContext} from '../context/Context.jsx';


const SignUp = () => {
    const {cUserName,cSetUserName,cPassword,cSetPassword,addUser} = useAppContext();
    const navigate = useNavigate();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const handleLogin = () =>{
        if(userName === "" || password === "" || email === ""){
            alert("Please fill in all fields");
            return;
        }
        else{
            addUser(userName,password,email)
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
                    <p className="login-page__subtitle">Please Sign Up to access your account and start shopping.</p>
                    <input type="text" className="login-page__input" placeholder="Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input type="password" className="login-page__input" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <input type="email" className="login-page__input" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <button id="login-button" onClick={handleLogin}>Sign Up</button>
                    <p className="login-page__signup-link">Do you have an account? <Link to="/login" style={{ color: 'blue', textDecoration: 'underline', display: 'inline' }}>Log In</Link></p>

                </div>


            </div>

        </>
    )
}

export default SignUp;