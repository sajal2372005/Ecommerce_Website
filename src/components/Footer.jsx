import React from 'react';
import logo from '../assets/Fashion.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="absolute w-full">
        
        <div id="mainFooter" style = {{display: 'flex', justifyContent: "space-around" ,alignItem: "center"}} className="pl-10 pr-20 w-full h-auto py-10 bg-transparent text-gray-400 gap-10 mt-12">
            
        
            <div className="flex flex-col gap-6 items-start justify-start">
                <img src={logo} alt="logo" className="w-32 h-auto mb-4" />
                <h5 className="mb-4">Making the world a better place through constructing <br></br>elegant hierarchies.</h5>
                
                <div className="flex gap-3 mt-2">
                    
                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer w-8 h-8 rounded-2xl hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaFacebook className="text-2xl" />
                    </button>

                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer w-8 h-8 rounded-xl hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaInstagram className="text-2xl" />
                    </button>

                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer w-8 h-8 rounded-2xl hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaTwitter className="text-2xl" />
                    </button>

                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer w-8 h-8 hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaLinkedin className="text-2xl" />
                    </button>

                    <button className='flex items-center justify-center text-gray-400 rounded cursor-pointer w-8 h-8 rounded-2xl hover:bg-gray-400 hover:text-white transition-colors' >
                        <FaGithub className="text-2xl" />
                    </button>

                </div>
            </div>
            
            <div>
                <h5 className="mb-4 font-bold cursor-pointer" style ={{color: '#000'}}>Solution</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Marketing</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Analytics</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Automation</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Commerce</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Insights</h5>
            </div>
            <div>
                <h5 className="mb-4 font-bold cursor-pointer" style ={{color: '#000'}}>Support</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Pricing</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Documentation</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Guides</h5>
            </div>
            <div>
                <h5 className="mb-4 font-bold cursor-pointer" style ={{color: '#000'}}>Company</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">About</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Blog</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Jobs</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Press</h5>
            </div>
            <div>
                <h5 className="mb-4 font-bold cursor-pointer" style ={{color: '#000'}}>Legal</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Claim</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Privacy</h5>
                <h5 className="mb-2 hover:text-gray-800 transition-colors cursor-pointer">Terms</h5>
            </div>
            

        </div>
        <div style = {{borderBottom: '1px solid #ccc' ,marginLeft: '40px', marginRight: '40px'}}></div>
        <div className="text-start py-4 text-gray-400 m:t-4 pl-22">
            <p className="cursor-pointer">&copy; 2026 Fashion. All rights reserved.</p>
        </div>
        </div>
    )
}

export default Footer;