import { useState, useEffect } from 'react';
import Fashion from '../assets/Fashion.png';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const Login = () => {
    const localUserName = localStorage.getItem("UserName");
    const localPassword = localStorage.getItem("Password");
    const navigate = useNavigate();
    const [LuserName, setUserName] = useState(localUserName || "");
    const [Lpassword, setPassword] = useState(localPassword || "");
    const { state, dispatch,users } = useAppContext();


    useEffect(() => {
        if (state.isLoggedIn) {
            navigate('/');
        }

    }, [state.isLoggedIn, navigate]);
    const handleLogin = () => {
        if (LuserName === "" || Lpassword === "") {
            alert("Please fill in all fields");
            return;
        }
        else {
            dispatch({ type: "login", payload: { username: LuserName, password: Lpassword } });

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
                    <p className="login-page__subtitle">Please log in to access your account and start shopping.</p>
                    <input type="text" className="login-page__input" placeholder="Username" value={LuserName} onChange={(e) => { setUserName(e.target.value) }} />
                    <input type="password" className="login-page__input" placeholder="Password" value={Lpassword} onChange={(e) => { setPassword(e.target.value) }} />
                    <button id="login-button" onClick={handleLogin}>Log In</button>
                    <p className="login-page__signup-link">Don't have an account? <Link to="/signup" style={{ color: 'blue', textDecoration: 'underline', display: 'inline' }}>Sign Up</Link></p>

                    <GoogleLogin
                        theme="outline"
                        size="large"
                        shape="pill"
                        onSuccess={(credentialResponse) => {
                            const token = credentialResponse.credential;
                            const decodedData = jwtDecode(token);
                            const userExists = users.some((user)=> user.username === decodedData.given_name && user.email === decodedData.email);
                            if (!userExists) {
                                navigate('/signup');
                                return;
                            }
                                
                            console.log("Full User Data:", decodedData);
                            localStorage.setItem("UserName", decodedData.given_name);
                            localStorage.setItem("email", decodedData.email);
                            localStorage.setItem("firstName", decodedData.name);
                            localStorage.setItem("role", "user");
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

export default Login;