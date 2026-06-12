import React,{useState,useEffect,createContext,useContext} from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [Api,setApi] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => setApi(res));
    },[])

    const [cUserName,cSetUserName] = useState("");
    const [cPassword,cSetPassword] = useState("");
    const [cToken,cSetToken] = useState(localStorage.getItem("token") || null);

    const addUser = (userName,password,email) => {
        const user = {
            username: userName,
            password: password,
            email: email
        };
        fetch("https://fakestoreapi.com/users",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(res => {
            if(res.id){
                cSetToken(res.token);
                cSetUserName(userName);
                cSetPassword(password);
                localStorage.setItem("token",res.token);
                localStorage.setItem("UserName",userName);
                localStorage.setItem("Password",password);
            }
        });
    }

    const Logout = () =>{
        cSetToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("UserName");
        localStorage.removeItem("Password");
    }

    return(
        <AppContext.Provider value={{Api,setApi,cUserName,cSetUserName,cPassword,cSetPassword,cToken,cSetToken,Logout,addUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    return useContext(AppContext);
}

export default AppProvider;