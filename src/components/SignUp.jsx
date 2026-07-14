import { useState } from 'react';
import Fashion from '../assets/Fashion.png';
import './login.css';
import {Link,useNavigate} from 'react-router-dom';
import {useAppContext} from '../context/Context.jsx';


const SignUp = () => {
    const {dispatch} = useAppContext();
    const navigate = useNavigate();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [firstName,setFirstName] = useState("");
    const handleLogin = () =>{
        if(userName === "" || password === "" || email === "" || firstName === ""){
            alert("Please fill in all fields");
            return;
        }
        else{
            dispatch({type:"signup", payload:{username: userName, password: password, email: email,role: "user",firstName: firstName}});
            localStorage.setItem("UserName", userName);
            localStorage.setItem("email", email);
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("role", "user");
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
                    <input type="text" className="login-page__input" placeholder="FirstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
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