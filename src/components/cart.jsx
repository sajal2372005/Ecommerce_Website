import React from 'react';
import { useAppContext } from '../context/Context.jsx';
import ProductCards from './ProductCards.jsx';
import PaymentButton from './payment.jsx';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import * as motion from "motion/react-client"
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    
    const navigate = useNavigate();
    const { product } = useAppContext();

    return (
        <>
            <div style={{ width: "100%", paddingTop: "100px" }}>
                <BackgroundBeamsWithCollision className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-around items-center  gap-6 rounded-xl">
                    {product.length == 0 ?
                        <div className="">
                            <p className="text-xl">Your cart is empty.</p>
                        </div>
                        :
                        product.map((item) => {
                            return <ProductCards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} count={item.count} />
                        })

                    }

                </BackgroundBeamsWithCollision>

            </div>


            {
                product.length > 0 ? <PaymentButton />
                :
                    <div style={{ width: "100%", paddingTop: "20px", display: "flex", justifyContent: "flex-end", paddingRight: "3%" }}>
                        {<motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-black transition-colors" onClick={() => {navigate("/Pdf") }} >
                            Download Invoice
                        </motion.button>}
                    </div>
                    

            }
            {

            }




        </>
    )
}

export default Cart;