import React, { useState, useEffect, createContext, useContext ,useReducer} from 'react';
import credentials from './users.json';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [Api, setApi] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setApi(res));
    }, []);


    const [cUserName, cSetUserName] = useState("");
    const [cPassword, cSetPassword] = useState("");
    const [cToken, cSetToken] = useState(localStorage.getItem("token") || null);

     
    const userArray = localStorage.getItem("userArray");
    const [users, setUsers] = useState(userArray ? JSON.parse(userArray) : []);

    const initialState = {
        isLoggedIn: false,
        "firstName": "" || localStorage.getItem("firstName"),
        "lastName": "" || localStorage.getItem("lastName"),
        "username": "" || localStorage.getItem("UserName"),
        "email": "" || localStorage.getItem("email"),
        "password": "",
        "role": "" || localStorage.getItem("role")};

    const reducer = (state,action) =>{
        if (action.type === "login"){
            const find = credentials.find((user)=> user.username === action.payload.username && user.password === action.payload.password);
            if (find){
                localStorage.setItem("role", find.role);
                localStorage.setItem("UserName", find.username);
                console.log(find.role);
                return{...state,firstName: find.firstName, lastName: find.lastName, username: find.username,email: find.email,password: find.password, role: find.role, isLoggedIn: true}

            }
            else if(!find && users.length > 0){
                const findLocal = users.find((user)=> user.username === action.payload.username && user.password === action.payload.password);
                if(findLocal){
                    localStorage.setItem("role", "user");
                    localStorage.setItem("UserName", findLocal.username);
                    return{...state, username: findLocal.username,email: findLocal.email,password: findLocal.password, role: "user", isLoggedIn: true}
                }
            }
            else{
                alert("Invalid username or password");
                return state;
            }
        }
        else if (action.type === "logout"){
            localStorage.removeItem("role");
            return{...state, isLoggedIn: false, firstName: "", lastName: "", username: "",email: "",password: "", role: ""}
        }
        else if (action.type === "signup"){
            const newUser = {
                id: users.length + 1,
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email,
                firstName: action.payload.firstName,
                role: action.payload.role
            };
            setUsers([...users, newUser]);
            localStorage.setItem("userArray", JSON.stringify([...users, newUser]));
            return {...state,isLoggedIn: true, firstName: action.payload.firstName, username: action.payload.username,email: action.payload.email,password: action.payload.password, role: action.payload.role}
        }
        else if (action.type === "deleteUser"){
            setUsers(users.filter((user)=> user.username !== action.payload.username || user.password !== action.payload.password));
            localStorage.setItem("userArray",JSON.stringify(users.filter((user)=> user.username !== action.payload.username || user.password !== action.payload.password)));
            return state;
        }
        
    }


    const [state, dispatch] = useReducer(reducer, initialState);

        

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
                    return data
                });
            return ans;

        }

    const Logout = () => {
            cSetToken(null);
            localStorage.removeItem("token");
            localStorage.removeItem("UserName");
            cSetUserName("");
            cSetPassword("");
            cSetToken(null);
            dispatch({type:"logout"});
        }

    return(
        <AppContext.Provider value={{ Api, filteredProducts, setFilteredProducts, setApi, cUserName, cSetUserName, cPassword, cSetPassword, cToken, cSetToken, Logout, product, addToCart, removeFromCart, Search, CLogin ,state, dispatch}
}>
    { children }
        </AppContext.Provider >
    )
}


export const useAppContext = () => {
    return useContext(AppContext);
}

export default AppProvider;