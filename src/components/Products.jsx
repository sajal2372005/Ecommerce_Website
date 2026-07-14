import { useAppContext } from '../context/Context.jsx';
import Cards from './Cards.jsx';

const Products = () => {
    const { Api ,filteredProducts} = useAppContext();
    return (<>
        {filteredProducts.length > 0? <div>
            <div style={{width: "100%" ,paddingTop: "100px",paddingBottom: "20px",marginLeft: "40px",paddingLeft:"10px",borderBottom: "2px solid #ccc"}}>
            <p style={{fontSize: "20px"}}>Filtered Products</p>
        </div>
        <div style={{width: "100%" ,paddingTop: "40px"}}>
            <div className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-flex-start gap-16 pl-14 items-flex-start gap-6 rounded-xl">
                {
                    filteredProducts.map((item) => {
                        return <Cards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
                    })
                    
                }

            </div>
        </div>
        </div>
        
        : 

        <>
        <div style={{width: "100%" ,paddingTop: "100px",paddingBottom: "20px",marginLeft: "40px",paddingLeft:"10px",borderBottom: "2px solid #ccc"}}>
            <p style={{fontSize: "20px"}}>Men's Clothing</p>
        </div>
        
        <div style={{width: "100%" ,paddingTop: "40px"}}>
            
            <div className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-flex-start gap-16 pl-14 items-flex-start gap-6 rounded-xl">
                {
                    Api.filter((item)=>(item.category === "men's clothing")).map((item) => {
                        return <Cards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
                    })
                    
                }

            </div>
        </div>

        <div style={{width: "100%" ,paddingTop: "100px",paddingBottom: "20px",marginLeft: "40px",paddingLeft:"10px",borderBottom: "2px solid #ccc"}}>
            <p style={{fontSize: "20px"}}>Women's Clothing</p>
        </div>

        <div style={{width: "100%" ,paddingTop: "40px"}}>
            <div className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-flex-start gap-16 pl-14 items-flex-start gap-6 rounded-xl">
                {
                    Api.filter((item)=>(item.category === "women's clothing")).map((item) => {
                        return <Cards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
                    })
                    
                }

            </div>
        </div>

        <div style={{width: "100%" ,paddingTop: "100px",paddingBottom: "20px",marginLeft: "40px",paddingLeft:"10px",borderBottom: "2px solid #ccc"}}>
            <p style={{fontSize: "20px"}}>Electronics</p>
        </div>

        <div style={{width: "100%" ,paddingTop: "40px"}}>
            <div className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-flex-start gap-16 pl-14 items-flex-start gap-6 rounded-xl">
                {
                    Api.filter((item)=>(item.category === "electronics")).map((item) => {
                        return <Cards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
                    })
                    
                }

            </div>
        </div>

        <div style={{width: "100%" ,paddingTop: "100px",paddingBottom: "20px",marginLeft: "40px",paddingLeft:"10px",borderBottom: "2px solid #ccc"}}>
            <p style={{fontSize: "20px"}}>Jewelry</p>
        </div>

        <div style={{width: "100%" ,paddingTop: "40px"}}>
            <div className="w-[95%] mx-auto bg-white border border-gray-300 py-10 px-5 flex flex-wrap justify-flex-start gap-16 pl-14 items-flex-start gap-6 rounded-xl">
                {
                    Api.filter((item)=>(item.category === "jewelery")).map((item) => {
                        return <Cards key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} />
                    })
                    
                }

            </div>
        </div>

        </>

        }







        


    </>)
}

export default Products;