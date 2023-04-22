import React from 'react'
import BlogItemCard from "./BlogItemCard"

function BlogList({ posts }) {
    return (
        <>
            {posts.map((post) => (
                <BlogItemCard post={post} key={post.slug}></BlogItemCard>
            ))}
        </>
    )
}

export default BlogList