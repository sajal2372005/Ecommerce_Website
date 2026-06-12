import React from 'react';
import logo from '../assets/Fashion.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <div id="mainHeader" className="flex items-center w-full h-22 bg-transparent text-white mb-6 mt-4">
                <div id="navLogo" className="ml-10">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div id='navButtons' className='mr-10 border-none flex gap-2'>
                    <input type='button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22' value='Products' />
                    <input type='button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22' value='Features' />
                    <input type='button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22' value='Search' />
                    <input type='button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22' value='Company' />
                </div>
                <div id='navActions' className='mr-10 flex gap-2'>
                    <input type='button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22' value='Login' />
                    <input type='button' className='h-8 text-black rounded cursor-pointer hover:bg-black hover:text-white w-22' value='Sign Up' />
                </div>
            </div>
        </>
    )
}

export default Header;