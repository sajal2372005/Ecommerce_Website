import React,{useState} from 'react';
import {useAppContext} from '../context/Context.jsx';
import * as motion from "motion/react-client"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

 

const Cards = ({id, title, price, image }) => {
    const {product,addToCart,removeFromCart} = useAppContext();
    
    const isAdded = product.some((item) => item.id === id);
    const handleAddToCart = (id, title, price, image) =>{
        addToCart({id,title,price,image})
    }
    const handleRemoveFromCart = (id) =>{
        removeFromCart(id);
    }
    return (
        
        <CardContainer className="w-full max-w-[400px] bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">

                    <CardBody className="h-64 bg-white flex items-center justify-center p-6">
                        <img
                            src={image}
                            alt={title}
                            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </CardBody>

                    <div className="flex flex-col w-full items-start p-5 bg-gray-50 border-t border-gray-100 gap-2">
                        <CardItem as="p" className="text-gray-800 font-medium text-lg line-clamp-1">{title}</CardItem>
                        <CardItem as="p" className="text-2xl font-bold text-black">${price.toFixed(2)}</CardItem>
                        {isAdded === false ? 
                        <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.8 }} 
                        className="w-full mt-3 bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors" onClick={()=>{handleAddToCart(id, title, price, image)}}>
                            Add to Cart
                        </motion.button>
                        :
                        <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.8 }} 
                        className="w-full mt-3 bg-green-400 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-400 transition-colors" onClick={()=>{handleRemoveFromCart(id)}}>
                            Added to Cart
                        </motion.button>}
                        {/*  */}
                    </div>
        </CardContainer>
    )
}



export default Cards;