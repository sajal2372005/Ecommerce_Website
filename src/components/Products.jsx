import React from 'react';
import { useAppContext } from '../context/Context.jsx';
import Cards from './Cards.jsx';

const Products = () => {
    const { Api } = useAppContext();
    return (
        <div style={{width: "100%" ,paddingTop: "100px"}}>
            <div className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-around items-center gap-6 pt-26 rounded-xl">
                {
                    Api.map((item) => {
                        return <Cards key={item.id} title={item.title} price={item.price} image={item.image} />
                    })
                    
                }

            </div>
        </div>
    )
}

export default Products;