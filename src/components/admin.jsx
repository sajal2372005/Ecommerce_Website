import React,{useEffect} from 'react';
import credentials from '../context/users.json';
import AdminCards from './AdminCards.jsx';
import {useNavigate} from 'react-router-dom';
import { useAppContext } from '../context/Context.jsx';

const Admin = () => {
    const navigate = useNavigate();
    const {state} = useAppContext();
    const userArray = localStorage.getItem("userArray");
    const users = userArray ? JSON.parse(userArray) : [];

    useEffect(()=>{
        if(state.role !== "admin"){
            navigate('/');
            alert("You are not authorized to access this page.");

        }
    },[])

    return (
        <div className="bg-[#141A26] w-full min-h-screen text-white pt-10 pb-10 px-4">
            <h1 className="text-center text-3xl font-bold mb-10">Admin Dashboard</h1>

            
            <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-4 w-full">

                    
                    {credentials.map((user) => (
                        <AdminCards key={user.id} user={user} />                        
                    ))}
                    {
            
                    users.length > 0 ? users.map((user) => (
                        <AdminCards key={user.id} user={user} />
                    )) : null}
                </div>
            </div>
        </div>
    );
}

export default Admin;