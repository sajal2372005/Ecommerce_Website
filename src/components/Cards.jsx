import React from 'react';

const Cards = ({ title, price, image }) => {
    return (
        <div className="w-full max-w-[400px] bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">

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
                        <button className="w-full mt-3 bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                            Add to Cart
                        </button>
                    </div>
        </div>
    )
}

export default Cards;