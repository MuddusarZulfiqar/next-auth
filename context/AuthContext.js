import React, { createContext } from "react";
import  useAuth  from "@/hooks/useAuth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { user, loading,setUser } = useAuth();
    return (
        <AuthContext.Provider value={{ user, loading,setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

