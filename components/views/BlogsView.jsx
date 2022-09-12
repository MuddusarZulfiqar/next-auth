import React from 'react';
import Header from '@/components/base/Header';
import { Container } from '@mui/system';
import { Title } from '../baseStyle/base';
import { Grid } from '@mui/material';
import BlogCard from './blog/BlogCard';
export default function Blogs({blogs}) {
  const title = 'Blogs'
  return (
    <>
      <Header title={title} />
      <Container maxWidth='xl' sx={{mt:20}}>
        <Title variant='h4' sx={{textAlign:'center'}}>All Related Blogs</Title>
        <Grid container spacing={3} sx={{mt:10}}>
          <Grid item xs={12} md={4} lg={3}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
