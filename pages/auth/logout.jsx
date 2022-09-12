import React,{useEffect,useContext} from 'react'
import Cookies from 'universal-cookie';
import {useRouter} from 'next/router';
import {AuthContext} from '@/context/AuthContext';
function logout() {
    const {setUser} = useContext(AuthContext);
    const cookies = new Cookies();
    const router = useRouter();
    useEffect(() => {
        cookies.remove('user');
        setUser(null);
        router.push('/auth/login');
    },[])
  return (
    <div>Loading...</div>
  )
}

export default logout