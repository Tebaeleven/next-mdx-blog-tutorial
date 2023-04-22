import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ja from "date-fns/locale/ja";
import format from 'date-fns/format';

function BlogHeader({ frontmatter }) {
    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
                <meta name='description' content={frontmatter.description} />
            </Head>
            <div>
                {frontmatter.bannerUrl && (
                    <Image
                        src={frontmatter.bannerUrl}
                        width={300}
                        height={200}
                    ></Image>
                )}
            </div>
            <h1>
                {frontmatter.title}
            </h1>
            {frontmatter.date && (
                <p>
                    {format(new Date(frontmatter.date), "PPP", { locale: ja })}
                </p>
            )}
            {
                frontmatter.tags && (
                    <p>タグ：
                        {frontmatter.tags.map((tag, index, tags) => (
                            <span key={tag}>
                                {tag}
                                {index < tags.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </p>
                )
            }
            {
                frontmatter.description && (
                    <p>
                        説明：{frontmatter.description}
                    </p>
                )
            }
        </>
    )
}

export default BlogHeader