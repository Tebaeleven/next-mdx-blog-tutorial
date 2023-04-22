import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import format from 'date-fns/format'
import ja from "date-fns/locale/ja";

function BlogItemCard({ post }) {
    return (
        <>
            <div>{post.frontmatter.title}</div>
            {
                post.frontmatter.bannerUrl && (
                    <div>
                        <Image
                            src={post.frontmatter.bannerUrl}
                            alt={post.frontmatter.title}
                            width={50}
                            height={50}
                        >
                        </Image>
                    </div>
                )
            }
            <Link href={`blogs/${post.slug}`}>
                {post.frontmatter.title}
            </Link>
            {
                post.frontmatter.date && (
                    <p>{format(new Date(post.frontmatter.date), "PPP", { locale: ja }) }</p>
                )
            }
            {
                post.frontmatter.tags && (
                    <p>タグ：
                        {post.frontmatter.tags.map((tag, index, tags) => (
                            <span key={tag}>
                                {tag}
                                {index < tags.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </p>
                )
            }
            {
                post.frontmatter.description && (
                    <p>
                        説明：{post.frontmatter.description}
                    </p>
                )
            }
        </>
    )
}

export default BlogItemCard