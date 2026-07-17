import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';


const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_CLIENT_SECRET
});

const Chat = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" }
    ]);

    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

   
    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        const currentInput = inputValue;

        
        setMessages((prev) => [...prev, { text: currentInput, sender: "user" }]);
        setInputValue('');
        setIsLoading(true);

        
        const getStorePrompt = `

        You are a helpful and polite virtual shopping assistant for our e-commerce store. 
        Use ONLY the following JSON inventory data to answer the customer's question. 
        use "->" as bulleting points for multiple products. If the product is not in the inventory
        try to give output in under 50 words
        also if user ask something which you don't know try to tell them what other bussinesses tell to customer on that perticular topic
        do not greet the user
        also dont tell them most bussiness do this or that,just tell them we can do this somthing


        INVENTORY DATA:
        [
        {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","rating":{"rate":3.9,"count":120}},
        {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.","category":"men's clothing","rating":{"rate":4.1,"count":259}},
        {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.","category":"men's clothing","rating":{"rate":4.7,"count":500}},
        {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice.","category":"men's clothing","rating":{"rate":2.1,"count":430}},
        {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon.","category":"jewelery","rating":{"rate":4.6,"count":400}},
        {"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","rating":{"rate":3.9,"count":70}},
        {"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.","category":"jewelery","rating":{"rate":3,"count":400}},
        {"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","rating":{"rate":1.9,"count":100}},
        {"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity","category":"electronics","rating":{"rate":3.3,"count":203}},
        {"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response.","category":"electronics","rating":{"rate":2.9,"count":470}},
        {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds.","category":"electronics","rating":{"rate":4.8,"count":319}},
        {"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup.","category":"electronics","rating":{"rate":4.8,"count":400}},
        {"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology.","category":"electronics","rating":{"rate":2.9,"count":250}},
        {"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor – Super Ultrawide Screen QLED ","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen.","category":"electronics","rating":{"rate":2.2,"count":140}},
        {"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed.","category":"women's clothing","rating":{"rate":2.6,"count":235}},
        {"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket.","category":"women's clothing","rating":{"rate":2.9,"count":340}},
        {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.","category":"women's clothing","rating":{"rate":3.8,"count":679}},
        {"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline.","category":"women's clothing","rating":{"rate":4.7,"count":130}},
        {"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit.","category":"women's clothing","rating":{"rate":4.5,"count":146}},
        {"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees.","category":"women's clothing","rating":{"rate":3.6,"count":145}}
        ]

        RULES:
        1. If the user asks for a product, find the best matches from the INVENTORY DATA.
        2. Provide the Title and Price of the product in your response. Keep descriptions brief.
        3. If the user asks for something not in the inventory, politely tell them we do not carry that item right now. Do NOT invent or make up products.
        4. Format your response cleanly so it is easy to read.
       

        CUSTOMER QUESTION: 
        "${inputValue}"

        YOUR ANSWER:
        `;

        try {
           
            const response = await ai.models.generateContent({
                model: "gemini-3.1-flash-lite", 
                contents: getStorePrompt,
            });

            
            setMessages((prev) => [
                ...prev,
                { text: response.text, sender: "bot" }
            ]);

        } catch (error) {
            console.error("Gemini API Error:", error);
            setMessages((prev) => [
                ...prev,
                { text: "Sorry, I am having trouble connecting to the store right now.", sender: "bot" }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            <div className='fixed bottom-10 right-0 w-96 h-[500px] bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 flex flex-col'>
                <div className='flex justify-between items-center mb-4 border-b pb-2'>
                    <h2 className='text-lg font-semibold'>Chat</h2>
                </div>

                <div className='flex flex-col h-full overflow-hidden'>
                    <div className='flex-1 overflow-y-auto mb-4 flex flex-col gap-2 pr-2'>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-[80%] ${msg.sender === 'user'
                                    ? 'bg-blue-500 text-white self-end rounded-br-none'
                                    : 'bg-gray-200 text-black self-start rounded-bl-none'
                                    }`}
                            >
                                <p className='text-sm whitespace-pre-wrap'>{msg.text}</p>
                            </div>
                        ))}
                        
                       
                        {isLoading && (
                            <div className="bg-gray-200 text-black self-start p-2 rounded-lg max-w-[80%] rounded-bl-none">
                                <p className='text-sm text-gray-500'>Typing...</p>
                            </div>
                        )}
                    </div>

                    <div className='flex mt-auto'>
                        <input
                            type='text'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            disabled={isLoading}
                            className='flex-1 border border-gray-300 rounded-lg p-2 mr-2 outline-none focus:border-blue-500 disabled:opacity-50'
                            placeholder='Type your message...'
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading}
                            className='bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-lg px-4 py-2 disabled:opacity-50'
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;