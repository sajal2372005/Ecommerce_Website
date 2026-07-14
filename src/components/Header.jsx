import { useState } from 'react';
import logo from '../assets/Fashion.png';
import './Header.css';
import { FaShoppingCart, FaUser, FaSignInAlt } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context.jsx';
import { GooeyInput } from "@/components/ui/gooey-input";


const Header = () => {

    const navigate = useNavigate();
    const { Logout, Search, setFilteredProducts, dispatch } = useAppContext();
    const role = localStorage.getItem("role");
    const handleAdminClick = () => {
        navigate('/admin');
    }
    const handleLogoClick = () => {
        navigate('/');
    }
    const handleProductsClick = () => {
        setFilteredProducts([]);
        navigate('/products');
    }
    const handleCartClick = () => {
        navigate('/Cart');
    }

    const handleUserLogout = () => {
        dispatch({ type: "logout" });
        navigate('/login');
    }
    const handleExit = () => {
        localStorage.removeItem("UserName");
        localStorage.removeItem("email");
        localStorage.removeItem("firstName");
        localStorage.removeItem("role");
        localStorage.removeItem("rzp_stored_checkout_id");
        localStorage.removeItem("previousOrder");
        localStorage.removeItem("rzp_checkout_anon_id");
        localStorage.removeItem("rzp_device_id");
    }

    

    const handleSearchSubmit = () => {
        setSearchTerm('');
        SetSearch(false);
        Search(searchTerm);
        navigate('/products');
    }

    const [, SetSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
        
            <div id="mainHeader" style={{ height: '80px' }} className="fixed flex items-center w-full bg-white text-white mb-6 z-1000">
                <div id="navLogo" className="ml-10 flex items-center">
                    <img src={logo} alt="logo" className="logo mr-26 cursor-pointer" onClick={handleLogoClick} />
                    <div style={{ display: 'flex', gap: '10px',marginRight:'10px' }}>

                    <input type='button' id='button' className='h-10 w-28 rounded-3xl text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Products' onClick={handleProductsClick} />
                    <input type='button' id='button' className='h-10 w-28 rounded-3xl text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Company' />

                    </div>
                    {<div
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchSubmit();
                            }
                        }}
                    >
                        <GooeyInput classNames={{
                            root: "my-4",               // adds margin around whole component
                            input: "text-black placeholder:text-gray-800 text-m", // styles the actual text input
                            trigger: "bg-white text-black border border-black", // styles the trigger button
                            bubble: "opacity-50",       // tones down the gooey animation
                            bubbleSurface: "bg-black",
                           
                        }}expandedOffset={60} placeholder="Search..." collapsedWidth={140} expandedWidth={500} value={searchTerm} onValueChange={(e) => setSearchTerm(e)} /></div>}



                </div>
                <div id='navActions' className='mr-10 flex gap-2'>
                    <button type='button' className='ml-4 w-8 h-8 rounded-2xl text-gray-800 rounded cursor-pointer hover:bg-black hover:text-white flex items-center justify-center' onClick={handleCartClick}>
                        <NavLink to="/Cart" className="flex items-center justify-center w-full h-full">
                            <FaShoppingCart />
                        </NavLink>
                    </button>
                    <button type='button' className='ml-4 w-8 h-8 rounded-2xl text-gray-800 rounded cursor-pointer hover:bg-black hover:text-white flex items-center justify-center' onClick={()=>{ Logout(), handleExit() }}>
                        <NavLink to="/SignUp" className="flex items-center justify-center w-full h-full">
                            <FaSignInAlt />
                        </NavLink>

                    </button>
                    <button type='button' className='ml-4 w-8 h-8 rounded-2xl text-gray-800 rounded cursor-pointer hover:bg-black hover:text-white flex items-center justify-center' onClick={handleUserLogout}>
                        <NavLink to="/login" className="flex items-center justify-center w-full h-full">
                            <FaUser />
                        </NavLink>
                    </button>
                    {role === 'admin' ? <input type='button' id='button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Admin' onClick={handleAdminClick} /> : null}
                </div>
            </div>
            
        </>
    )
}

export default Header;