import { Button, Container, Modal, TextField } from "@mui/material";
import React,{useEffect, useState} from "react";
import {TabPanel,TabsList,Tabs,Tab} from '@/components/baseStyle/base';
import UserProfile from "@/components/dashboard/common/Profile";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Editor from '@/components/base/Editor';
import { toast } from "react-toastify";
import request from '@/util/request';
import Cookies from "universal-cookie";
const cookie = new Cookies()
function index({blogs}) {
  const [open, setOpen] = useState(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
  };
  useEffect(()=>{
    console.log(blogs)
  },[])
  const [editorText, setEditorText] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const createBlog = async ()=>{
    const user = cookie.get('user');
    if(!blogTitle){
      toast.error('Please enter blog title');
      return;
    }
    if(!editorText){
      toast.error('Please enter blog content');
      return;
    }
    try {
      const res = await request.post('/blog-app/blog', {
        title: blogTitle,
        blog_text: editorText
      },{
        headers:{
          'Content-Type': 'application/json',
          'Authorization':user.detail.token
        }
      });
      console.log(res,'Response');
      toast.success(res?.data?.detail?.message);
      setOpen(false);
    } catch (error) {
      toast.error(error?.response?.data?.detail || 'Something went wrong');
    }
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <h1>Admin Dashboard</h1>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab>Profile</Tab>
          <Tab>Blogs</Tab>
        </TabsList>
        <TabPanel value={0}>
          <h1>Profile</h1>
            <UserProfile />
        </TabPanel>
        <TabPanel value={1}>
          <div style={{textAlign:'right'}}>
            <Button variant="contained" color="primary" onClick={()=>setOpen(true)}>Create Blog</Button>
          </div>
        </TabPanel>
      </Tabs>
      <Modal 
      open={open}
      onClose={()=>setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Create Blog
          </Typography>
          <TextField
            id="outlined-multiline-static"
            value={blogTitle}
            onChange={(e)=>setBlogTitle(e.target.value)}
            label="Title"
            multiline
            rows={1}
            fullWidth
            sx={{my:3,mt:5}}
          />
          <Editor setEditorText={setEditorText} />
          <Button variant="contained" fullWidth color="secondary" onClick={createBlog}>Create Post</Button>
        </Box>
     </Modal>
    </Container>
  );
}

export default index;
