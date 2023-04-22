import { postsPath } from '/utils/mdxUtils'
import React from 'react'
import { postsFileNames } from 'utils/mdxUtils'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import fs from 'fs'
import SingleBlog from "/components/blogs/SingleBlog"
import rehypeHighlight from 'rehype-highlight/lib'
export default function SingleBlogPage({mdxSource,frontmatter}) {
    return ( 
        <SingleBlog mdxSource={mdxSource} frontmatter={frontmatter}></SingleBlog>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const filePath = path.join(postsPath, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data: frontmatter, content } = matter(fileContent)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins:[rehypeHighlight]
        }
    })
    return { 
        props: {
            mdxSource,
            frontmatter,
            slug,
        }
    }
}

export async function getStaticPaths(){
    const postsPaths = postsFileNames.map((slug) => ({
        params: {
            slug: slug.replace(/\.mdx?$/, ""),
        }
    }))

    return {
        paths: postsPaths,
        fallback:false
    }
}