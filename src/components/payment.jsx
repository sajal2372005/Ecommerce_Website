import React from 'react';
import * as motion from "motion/react-client"
import { useAppContext } from '../context/Context.jsx';



// Utility function to load the Razorpay script dynamically

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

const PaymentButton = () => {
    
    const { product, setProduct } = useAppContext();
    const handlePayment = async () => {
        const totalAmountInCents = product.reduce((sum, item) => {
            return sum + Math.round(item.price * 100) * (item.count || 1);
        }, 0);


        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            console.log('Razorpay SDK failed to load. Are you online?');
            return;
        }

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: totalAmountInCents,
            currency: "USD",
            name: "Fashion",
            description: "Frontend-only test transaction",
            handler: function (response) {
                console.log("Payment Successful!", response);
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.on('payment.failed', function (response) {
            console.error("Payment Failed!", response.error);
            alert(`Payment Failed: ${response.error.description}`);
        });
        paymentObject.on('payment.cancelled', function (response) {
            console.warn("Payment Cancelled!", response);
            alert("Payment Cancelled");
        });
        paymentObject.on('payment.success', async function (response) {
            console.log("Payment Successful", response);
            
            const temp = product.map((item) => ({ ...item }));
        
            localStorage.setItem('previousOrder', JSON.stringify(temp));
            setProduct([]);
            
        });
        paymentObject.open();
    }



    return (
        <div style={{ width: "100%", paddingTop: "20px", display: "flex", justifyContent: "flex-end", paddingRight: "3%" }} >
            {<motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-black transition-colors" onClick={() => { product.length > 0 && handlePayment() }} >
                Checkout
            </motion.button>}
        </div>

    );
};

export default PaymentButton;
