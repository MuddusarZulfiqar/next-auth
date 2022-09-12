// useAuth
// This hook is used to handle authentication

import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
const useAuth = () => {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // get user form cookie and set user
        const user = cookies.get('user');

        if (user) {
            setUser(user.detail);
        }
        setLoading(false);
        return () => {
            setUser(null);
        }
    }, []);
    return { user, loading,setUser };
}

export default useAuth;
