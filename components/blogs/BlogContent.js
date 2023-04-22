import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import TextHeading from './TextHeading'
import Image from 'next/image'
const components = {
    h1: (props) => <TextHeading level={1} {...props}></TextHeading>,
    h2: (props) => <TextHeading level={2} {...props}></TextHeading>,
    h3: (props) => <TextHeading level={3} {...props}></TextHeading>,
    img: (props) => (
        <Image
            {...props}
            alt={props.alt}
            style={{ objectFit: 'contain' }}
            width={500}
            height={300}
        ></Image>
    )

}
function BlogContent({ mdxSource }) {
    return (
        <div>
            <MDXRemote {...mdxSource} components={components}></MDXRemote>
        </div>
    )
}

export default BlogContent