// Language: javascript
// Path: pages/blog/index.jsx
// Compare this snippet from components/views/BlogsView.jsx

import React, { useEffect } from 'react'
import BlogsView from '@/components/views/BlogsView';
import request from '@/util/request';
export default function index() {
  useEffect(()=>{
    const getBlogs = async ()=>{
      const res = await request.get('/blog-app/blog-list');
      console.log(res);
    }
    getBlogs();
  },[])
  return (
    <BlogsView />
  )
}

// export async function getServerSideProps(){
//   const res = await request.get('blog-app/blog');
//   console.log(res,'Blogs res')
//   return {
//     props:{
//       data: res.data
//     }
//   }
// }