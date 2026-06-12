import React from 'react';
import logo from '../assets/Fashion.png';
// Fix 1: Added the '/fa' to the end of the import
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return(
        <>
        
        <div id="mainFooter" style = {{display: 'flex', justifyContent: "space-around" ,alignItem: "center"}} className="pl-10 pr-20 w-full h-auto py-10 bg-transparent text-gray-400 gap-10 mt-12">
            
        
            <div className="flex flex-col gap-6 items-start justify-start">
                <img src={logo} alt="logo" className="w-32 h-auto mb-4" />
                <h5 className="mb-4">Making the world a better place through constructing <br></br>elegant hierarchies.</h5>
                
                <div className="flex gap-3 mt-2">
                    
                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaFacebook className="text-2xl" />
                    </button>

                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaInstagram className="text-2xl" />
                    </button>

                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaTwitter className="text-2xl" />
                    </button>
                    
                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaLinkedin className="text-2xl" />
                    </button>

                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaGithub className="text-2xl" />
                    </button>

                </div>
            </div>
            
            <div>
                <h5 className="mb-4 font-bold" style ={{color: '#000'}}>Solution</h5>
                <h5 className="mb-2">Marketing</h5>
                <h5 className="mb-2">Analytics</h5>
                <h5 className="mb-2">Automation</h5>
                <h5 className="mb-2">Commerce</h5>
                <h5 className="mb-2">Insights</h5>
            </div>
            <div>
                <h5 className="mb-4 font-bold" style ={{color: '#000'}}>Support</h5>
                <h5 className="mb-2">Pricing</h5>
                <h5 className="mb-2">Documentation</h5>
                <h5 className="mb-2">Guides</h5>
            </div>
            <div>
                <h5 className="mb-4 font-bold" style ={{color: '#000'}}>Company</h5>
                <h5 className="mb-2">About</h5>
                <h5 className="mb-2">Blog</h5>
                <h5 className="mb-2">Jobs</h5>
                <h5 className="mb-2">Press</h5>
            </div>
            <div>
                <h5 className="mb-4 font-bold" style ={{color: '#000'}}>Legal</h5>
                <h5 className="mb-2">Claim</h5>
                <h5 className="mb-2">Privacy</h5>
                <h5 className="mb-2">Terms</h5>
            </div>
            

        </div>
        <div style = {{borderBottom: '1px solid #ccc' ,marginLeft: '40px', marginRight: '40px'}}></div>
        <div className="text-start py-4 text-gray-400 m:t-4 pl-22">
            <p>&copy; 2024 Fashion. All rights reserved.</p>
        </div>
        </>
    )
}

export default Footer;