import React from 'react';
import {useAppContext} from '../context/Context.jsx';

const AdminCards = ({ user }) => {
    const {dispatch} = useAppContext();
    const handleDeleteUser = () =>{
        dispatch({type:"deleteUser", payload:{username: user.username, password: user.password}});
    }
    return (
        <div>
            <div
                key={user.id}
                className="flex justify-between items-center w-full rounded-lg px-6 py-4 shadow-md"
                style={{ backgroundColor: "#1E293B" }}
            >


                <div className="flex flex-col text-left gap-1">
                    <span className="text-lg font-semibold text-white">
                        {user.firstName} {user.lastName}
                        <span className="text-sm font-normal text-[#7bffa1] ml-3 px-2 py-0.5 rounded border border-[#7bffa1]">
                            {user.role}
                        </span>
                    </span>
                    <span className="text-sm text-gray-300 mt-1">
                        <strong className="text-gray-400">Username:</strong> {user.username}
                    </span>
                    <span className="text-sm text-gray-300">
                        <strong className="text-gray-400">Email:</strong> {user.email}
                    </span>
                </div>


                <div className="flex items-center gap-2">
                    {user.role == "user" ? <><button className="w-9 h-9 border-none align-middle rounded hover:opacity-80 transition-opacity">
                        <img src="https://th.bing.com/th/id/OIP.DPh3eotK8v3u3p2MuS-qJgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" className="rounded cursor-pointer" alt="Delete" onClick={handleDeleteUser}/>
                    </button></>:null}
                    
                </div>
            </div>


        </div>
    )
}

export default AdminCards;