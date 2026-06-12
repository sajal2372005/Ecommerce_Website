import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Cards from './Cards';
import Arrows from './Arrows.jsx';
import Title from './Title.jsx';

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <Title/>
                    <Arrows />
                </div>
                <div className="w-[95%] mx-auto mt-5 bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-around items-center gap-6 rounded-xl">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default Home;

// <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" alt="Placeholder" style={{maxWidth: '3/7%', maxHeight: '86%'}} />
