import Link from 'next/link'
import React from 'react'
import BlogHeader from "./BlogHeader"
import Image from 'next/image'
import ja from "date-fns/locale/ja";
import format from 'date-fns/format';
import BlogContent from './BlogContent';
function SingleBlog({mdxSource,frontmatter}) {
    return (
        <>
            <Link href="/">
                top
            </Link>
            <BlogHeader frontmatter={frontmatter}></BlogHeader>
            <BlogContent mdxSource={mdxSource}></BlogContent>
        </>

    )
}

export default SingleBlog