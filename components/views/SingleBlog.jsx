import React from "react";
import Header from "@/components/base/Header";
import { Container } from '@mui/system';
import { Title } from '../baseStyle/base';
export default function SingleBlog() {
  const title = "Blog Title";
  function createMarkup(text) { return {__html: text}; };

  return (
    <>
      <Header title={title}>SingleBlog</Header>
      <Container maxWidth='xl' sx={{mt:20}}>
        <Title variant='h4'>Single Blog page</Title>
        <div dangerouslySetInnerHTML={createMarkup('<h3>This is wow</h3><span>text</span>')} /> 
      </Container>
    </>
  );
}
