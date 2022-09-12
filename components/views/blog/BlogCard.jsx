import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { BlogCard,Title,Author } from './BlogCardStyle'
export default function BlogSingleCard() {
  return (
    <Link href={'/blog/1'} passHref>
        <a>
            <BlogCard>
                <Title noWrap>noWrap</Title>
                <Author noWrap variant='span'>@muddusar.zulfiqar</Author>
            </BlogCard>
        </a>
    </Link>
  )
}
