import { useState } from 'react';
import Fashion from '../assets/Fashion.png';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import data from '../context/users.json';


const SignUp = () => {
    const { dispatch, users } = useAppContext();
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [userNameExist, setUserNameExist] = useState(false);
    const [userEmailExist, setUserEmailExist] = useState(false);
    const handleLogin = () => {
        setUserNameExist(false);
        setUserEmailExist(false);
        const usernameExists = users.some((user) => user.username === userName) || data.some((user) => user.username === userName);
        const emailExists = users.some((user) => user.email === email) || data.some((user) => user.email === email);
        if (usernameExists) {
            setUserNameExist(true);
            return;
        }
        if (emailExists) {
            setUserEmailExist(true);
            return;
        }

        if (userName === "" || password === "" || email === "" || firstName === "") {
            alert("Please fill in all fields");
            return;
        }
        else {
            dispatch({ type: "signup", payload: { username: userName, password: password, email: email, role: "user", firstName: firstName } });
            localStorage.setItem("UserName", userName);
            localStorage.setItem("email", email);
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("role", "user");
            navigate('/');
        }
    }
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>

            <div className="login-page">
                <div className="login-page__overlay">
                </div>
                <div className="login-page__panel">
                    <div className="login-page__brand">
                        <img src={Fashion} alt="logo" className="login-page__logo" />
                    </div>
                    <h1 className="login-page__title">Welcome to Our Store!</h1>
                    <input type="text" className="login-page__input" placeholder="FirstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                    <input type="text" className="login-page__input" placeholder="Username" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                    {userNameExist && <p className="login-page__error">Username already exists</p>}
                    <input type="password" className="login-page__input" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <input type="email" className="login-page__input" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    {userEmailExist && <p className="login-page__error">Email already exists</p>}
                    <button id="login-button" onClick={handleLogin}>Sign Up</button>
                    <p className="login-page__signup-link">Do you have an account? <Link to="/login" style={{ color: 'blue', textDecoration: 'underline', display: 'inline' }}>Log In</Link></p>

                    <GoogleLogin
                        theme="outline"
                        size="large"
                        shape="pill"
                        onSuccess={(credentialResponse) => {
                            const token = credentialResponse.credential;
                            const decodedData = jwtDecode(token);
                            console.log("Full User Data:", decodedData);

                            const userExists = users.some(
                                (user) => user.username === decodedData.given_name && user.email === decodedData.email
                            );

                            if (userExists) {
                                console.log("User already exists in the context.");
                                navigate('/login');
                                return; 
                            }

                            
                            localStorage.setItem("UserName", decodedData.given_name);
                            localStorage.setItem("email", decodedData.email);
                            localStorage.setItem("firstName", decodedData.name);
                            localStorage.setItem("role", "user");

                            
                            dispatch({
                                type: "signup",
                                payload: {
                                    username: decodedData.given_name,
                                    email: decodedData.email,
                                    firstName: decodedData.name,
                                    role: "user"
                                    
                                }
                            });

                            
                            navigate('/');
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>


            </div>

        </GoogleOAuthProvider>
    )
}

export default SignUp;