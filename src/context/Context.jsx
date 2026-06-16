import React, { useState, useEffect, createContext, useContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [Api, setApi] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setApi(res));
    }, [])

    const [cUserName, cSetUserName] = useState("");
    const [cPassword, cSetPassword] = useState("");
    const [cToken, cSetToken] = useState(localStorage.getItem("token") || null);

    const addUser = (userName, password, email) => {
        const user = {
            username: userName,
            password: password,
            email: email
        };
        fetch("https://fakestoreapi.com/users", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                if (res.id) {
                    cSetToken(res.token);
                    cSetUserName(userName);
                    cSetPassword(password);
                    localStorage.setItem("token", res.token);
                    localStorage.setItem("UserName", userName);
                    localStorage.setItem("Password", password);
                }
            });
    }

    const [product, setProduct] = useState([]);
    const addToCart = (item) => {
        setProduct([...product, item]);
    }
    const removeFromCart = (id) => {
        setProduct(product.filter(item => item.id !== id));
    }

    const [filteredProducts, setFilteredProducts] = useState([]);

    const Search = (searchTerm) => {
        if (searchTerm.trim() === '') {
            setFilteredProducts([]);
            return [];
        } else {
            const filteredProducts = Api.filter((item) => {
                return item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase())
            });
            setFilteredProducts(filteredProducts);
            return filteredProducts;
        }
    }

    const CLogin = async (LuserName, Lpassword) => {
        const Credentails = { username: LuserName, password: Lpassword };
        let ans;
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Credentails)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.token);
                ans = data;
                localStorage.setItem("token", data.token);
                localStorage.setItem("UserName", LuserName);
                cSetToken(data.token);
                cSetUserName(LuserName);
                return data});
        return ans;
    
}

    const Logout = () => {
        cSetToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("UserName");
        localStorage.removeItem("Password");
    }

    return (
        <AppContext.Provider value={{ Api, filteredProducts, setFilteredProducts, setApi, cUserName, cSetUserName, cPassword, cSetPassword, cToken, cSetToken, Logout, addUser, product, addToCart, removeFromCart, Search ,CLogin}}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext);
}

export default AppProvider;