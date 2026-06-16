import React,{useState} from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Cards from './Cards';
import Arrows from './Arrows.jsx';
import Title from './Title.jsx';
import { useAppContext } from '../context/Context.jsx';

const Home = () => {
    const { Api,cUserName,cPassword } = useAppContext();
    let [count,setCount] = useState(1);
    const Next= () => {
        if(count < Api.length-3) setCount(count+1);
    }
    const prev = () =>{
        if(count > 0 ) setCount(count-1);
    }
    return (

        <>
            <div className="w-full h-auto bg-gray-100 py-10">
                <div className="mt-16">
                    <Title title={cUserName} />
                    <div style={{ display: "flex", justifyContent: "flex-end", marginRight: '60px', marginTop: '20px', onHover: { marginBottom: '10px' } }}>
                        <button className="border-none cursor-pointer ml-10 hover:-translate-y-1 transition-transform" onClick={prev}><FaArrowLeft /></button>
                        <button className="border-none cursor-pointer ml-2 hover:-translate-y-1 transition-transform" onClick={Next}><FaArrowRight /></button>
                    </div>
                </div>
                <div className="w-[95%] mx-auto mt-5 bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-around items-center gap-6 rounded-xl">
                    {
                        Api.slice(count,count+3).map((item) => {
                            return <Cards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Home;

// <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" alt="Placeholder" style={{maxWidth: '3/7%', maxHeight: '86%'}} />
