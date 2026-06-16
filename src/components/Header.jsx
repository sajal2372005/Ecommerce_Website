import React,{useState} from 'react';
import logo from '../assets/Fashion.png';
import './Header.css';
import { FaShoppingCart, FaUser, FaSignInAlt } from "react-icons/fa";
import { Link,NavLink,useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context.jsx';

const Header = () => {
    const navigate = useNavigate();
    const {Logout,Search,filteredProducts,setFilteredProducts} = useAppContext();
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

    const handleSearchClick = () => {
        SetSearch(true);
    }

    const handleSearchSubmit = () => {
        setSearchTerm('');
        SetSearch(false);
        const results = Search(searchTerm);
        console.log('Search results:', results);
        console.log('Filtered products from context:', filteredProducts);
        navigate('/products');
    }

    const [hSearch,SetSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <div id="mainHeader"  style = {{height: '80px'}}className="fixed flex items-center w-full bg-transparent text-white mb-6">
                <div id="navLogo" className="ml-10 flex items-center">
                    <img src={logo} alt="logo" className="logo mr-26 cursor-pointer" onClick={handleLogoClick} />

                    
                    <input type='button' id = 'button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Products' onClick={handleProductsClick} />
                    {hSearch ? <div className = "flex"><input type='text' id='searchInput' className='h-8 text-black rounded border-none pr-2 text-semi-bold' placeholder='Search Here...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><input type="submit" className='ml-2 h-8 w-22 bg-black text-white rounded cursor-pointer' onClick = {handleSearchSubmit} /></div> : 
                    <input type='button' id = 'button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Search' onClick={handleSearchClick} />
                    }
                    
                    <input type='button' id = 'button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22 transition-colors' value='Company' />

                </div>
                <div id='navActions' className='mr-10 flex gap-2'>
                    <button type='button' className='ml-4 w-8 h-8 rounded-2xl text-gray-800 rounded cursor-pointer hover:bg-black hover:text-white flex items-center justify-center' onClick={handleCartClick}>
                        <NavLink to="/Cart" className="flex items-center justify-center w-full h-full">
                        <FaShoppingCart />
                        </NavLink>
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