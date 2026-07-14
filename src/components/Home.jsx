import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Cards from './Cards.jsx';
import Title from './Title.jsx';
import { useAppContext } from '../context/Context.jsx';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Home = () => {
    
    const {Api} = useAppContext();
    let [count,setCount] = useState(1);
    const Next= () => {
        if(count < Api.length-3) setCount(count+1);
        else setCount(0);
    }
    const prev = () =>{
        if(count > 0 ) setCount(count-1);
    }
    return (

        <>
            <div className="w-full h-auto bg-gray-100 py-10">
                <div className="mt-16">
                    <Title />
                    <div style={{ display: "flex", justifyContent: "flex-end", marginRight: '60px', marginTop: '20px', onHover: { marginBottom: '10px' } }}>
                        <button className="border-none cursor-pointer ml-10 hover:-translate-y-1 transition-transform" onClick={prev}><FaArrowLeft /></button>
                        <button className="border-none cursor-pointer ml-2 hover:-translate-y-1 transition-transform" onClick={Next}><FaArrowRight /></button>
                    </div>
                </div>


                <div style={{ width: "100%", paddingTop: "10px" }}>
                <BackgroundBeamsWithCollision className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-around items-center  gap-6 rounded-xl">
                    {
                        Api.slice(count,count+3).map((item) => {
                            return <Cards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
                        })
                    }

                </BackgroundBeamsWithCollision>

            </div>
                
            </div>
        </>
    )
}

export default Home;