// import React from 'react'
import { createContext, useState ,useEffect} from 'react';
import {getCurrentUser} from '../service/authService.jsx';

export const AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const loadCurrentUser = async () => {
            const token = localStorage.getItem("authToken");
            if(!token){
                setLoading(false);
                return;
            }
            try{
                const response = await getCurrentUser(token);
                setUser(response.data);
            } catch(error){
                console.log(error);
                localStorage.removeItem("authToken");
                setUser(null);
            }
            finally{
                setLoading(false);
            }
    } 
    loadCurrentUser();
},[])



const logout =() =>
{
    localStorage.removeItem("authToken");
    setUser(null);
};

const isAuthenticated =user !== null;
return(
    <AuthContext.Provider value={{ user,setUser, loading, logout, isAuthenticated }}>
        {children}
        </AuthContext.Provider>
        
)
}

export default AuthProvider;