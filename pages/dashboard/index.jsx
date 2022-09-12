import React,{useContext, useEffect} from 'react'
import { AuthContext } from '@/context/AuthContext';
import AdminView from '@/components/dashboard/admin/index';
import UserView from '@/components/dashboard/user/index';
import request from '@/util/request';
import Cookies from "universal-cookie";
const cookie = new Cookies()
export default function index() {
  const {user} = useContext(AuthContext);
  useEffect(()=>{
    const getAllBlogs = async ()=>{
      const res = await request.get('/app/blogs');
      console.log(res);
    }
    getAllBlogs();
  },[])
  return (
    <>
      {
        user ? (
          <>
            {
              user.role === 'admin' ? (
                <AdminView />
              ) : (
                <UserView />
              )
            }
          </>
        ) : <h1>Not Logged In</h1>
      }
    </>
  )
}

// export async function getStaticProps(){
//   const res = await request.get('/blog-app/blog',{
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   });
//   return {
//     props: {
//       blogs: res.data
//     }
//   }
// }