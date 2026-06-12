import React,{useState,useEffect,createContext,useContext} from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [Api,setApi] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => setApi(res));
    },[])


    return(
        <AppContext.Provider value={{Api,setApi}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    return useContext(AppContext);
}

export default AppProvider;