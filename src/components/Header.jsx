import React from 'react';
import logo from '../assets/Fashion.png';
import './Header.css';
import { FaShoppingCart, FaUser, FaSignInAlt } from "react-icons/fa";
import { Link,NavLink,useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context.jsx';

const Header = () => {
    const navigate = useNavigate();
    const {Logout} = useAppContext();
    const handleLogoClick = () => {
        navigate('/');
    }
    const handleProductsClick = () => {
        navigate('/products');
    }
    return (
        <>
            <div id="mainHeader"  style = {{height: '80px'}}className="fixed flex items-center w-full bg-transparent text-white mb-6">
                <div id="navLogo" className="ml-10 flex items-center">
                    <img src={logo} alt="logo" className="logo mr-26 cursor-pointer" onClick={handleLogoClick} />
                
                    <input type='button' id = 'button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Products' onClick={handleProductsClick} />
                    <input type='button' id = 'button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Search' />
                    <input type='button' id = 'button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Company' />
                </div>
                <div id='navActions' className='mr-10 flex gap-2'>
                    <button type='button' className='ml-4 w-8 h-8 rounded-2xl text-gray-800 rounded cursor-pointer hover:bg-black hover:text-white flex items-center justify-center'>
                        <FaShoppingCart />
                    </button>
                    <button type='button' className='ml-4 w-8 h-8 rounded-2xl text-gray-800 rounded cursor-pointer hover:bg-black hover:text-white flex items-center justify-center' onClick={Logout}>
                        <NavLink to="/SignUp" className="flex items-center justify-center w-full h-full">
                            <FaSignInAlt />
                        </NavLink>
                        
                    </button>
                    <button type='button' className='ml-4 w-8 h-8 rounded-2xl text-gray-800 rounded cursor-pointer hover:bg-black hover:text-white flex items-center justify-center'>
                        <NavLink to="/login" className="flex items-center justify-center w-full h-full">
                            <FaUser />
                        </NavLink> 
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;