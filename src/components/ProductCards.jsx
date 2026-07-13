import React,{useState} from 'react';
import {useAppContext} from '../context/Context.jsx';

const ProductCards = ({id, title, price, image, count: initialCount }) => {
    const {product,addToCart,removeFromCart} = useAppContext();
    const [count, setCount] = useState(initialCount || 1);
    const isAdded = product.some((item) => item.id === id);
    const handleAddToCart = (id, title, price, image) =>{
        const item = product.find((item)=>(item.id === id));
        if(item){
            setCount(count+1);
            item.count = count+1;
            console.log(item.count);
        }    
    }
    const handleRemoveFromCart = (id) =>{
        if(count>1) {
            setCount(count-1);
        }
        else{
            removeFromCart(id);
        }
        
    }
    return (
        <div className="w-full max-w-[400px] bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 z-900">

                    <div className="h-64 w-full bg-white flex items-center justify-center p-6">
                        <img
                            src={image}
                            alt={title}
                            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="flex flex-col items-start w-full p-5 bg-gray-50 border-t border-gray-100 gap-2">
                        <p className="text-gray-800 font-medium text-lg line-clamp-1">{title}</p>
                        <p className="text-2xl font-bold text-black">${price.toFixed(2)}</p>

                        
                        <div className=" flex justify-between w-full mt-3 bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                            <button style={{ fontWeight: 'bold', width: '40px' }} onClick={()=>handleRemoveFromCart(id)}>-</button>
                            <span style={{ fontWeight: 'bold' }}>{count}</span>
                            <button style={{ fontWeight: 'bold', width: '40px' }} onClick={()=>{handleAddToCart(id, title, price, image)}}>+</button>
                        </div>

                        
                    </div>
        </div>
    )
}

export default ProductCards;