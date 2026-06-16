import React from 'react';
import { useAppContext } from '../context/Context.jsx';
import Cards from './Cards.jsx';
import ProductCards from './ProductCards.jsx';

const Cart = () => {
    const { product } = useAppContext();
    return (
        <>
            <div style={{ width: "100%", paddingTop: "100px" }}>
                <div className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-around items-center  gap-6 rounded-xl">
                    {product.length == 0 ?
                        <div className="">
                            <p className="text-xl">Your cart is empty.</p>
                        </div>
                        :
                        product.map((item) => {
                            return <ProductCards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
                        })

                    }

                </div>
            </div>
        </>
    )
}

export default Cart;