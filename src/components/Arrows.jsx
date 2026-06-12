import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Arrows = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end", marginRight: '60px', marginTop: '20px', onHover: { marginBottom: '10px' } }}>
                <button className="border-none cursor-pointer ml-10 hover:-translate-y-1 transition-transform"><FaArrowLeft /></button>
                <button className="border-none cursor-pointer ml-2 hover:-translate-y-1 transition-transform"><FaArrowRight /></button>
            </div>

        </>
    )
}

export default Arrows;