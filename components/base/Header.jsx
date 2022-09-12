import React from 'react'
import { HeadMain,Title } from './style/Header'
export default function HeaderBlog({title}) {
  return (
    <HeadMain>
        <Title variant='h2'>{title || 'Null'}</Title>
    </HeadMain>
  )
}
