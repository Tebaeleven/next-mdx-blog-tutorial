import { postsFileNames, postsPath } from "utils/mdxUtils"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import BlogList from "/components/blogs/BlogList"
import TextHeading from '/components/blogs/TextHeading'
import TagFilter from "/components/blogs/TagFilter"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Pagination from "/components/Pagination"
export default function Home({ posts }) {
  const postPerPage = 1;
  const [currentPage, setCurrentPage] = useState(null)
  const [selectedTag, setSelectedTag] = useState("all")
  const [filterPosts, setFilterPosts] = useState(posts)
  const router = useRouter()
  const allTagSet = posts.reduce((acc, posts) => {
    posts.frontmatter.tags.map((tag) => acc.add(tag))
    return acc
  }, new Set([]))

  //アルファベット順にソート
  const allTagsArr = [...allTagSet].sort((a, b) => a.localeCompare(b))
  //allを先頭に追加
  allTagsArr.unshift("all")

  useEffect(() => {
    let tempPosts = [...posts]
    if (selectedTag && selectedTag !== 'all') {
      tempPosts = posts.filter(post =>
        post.frontmatter.tags.includes(selectedTag)
      )
    }
    const page = parseInt(router.query.page, 10) || 1
    setCurrentPage(page)
    const start = (page - 1) * postPerPage
    const end =
      start + postPerPage > posts.length
      ? posts.length 
      : start + postPerPage
    const paginatedPosts = tempPosts.slice(start, end)
    setFilterPosts(paginatedPosts)
  }, [selectedTag, posts,router])

  const totalPages =
    selectedTag === 'all'
      ? Math.ceil(posts.length / postPerPage) 
      : Math.ceil(filterPosts.length / postPerPage)

  return (
    <>
      <h1>Hello World</h1>
      <TagFilter
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        tags={allTagsArr}
      ></TagFilter>
      <BlogList posts={filterPosts}></BlogList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages
        }></Pagination>
    </>
  )
}

export async function getStaticProps() {
  const posts = postsFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(postsPath, slug))
    const { data } = matter(content)
    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ""),
    }
  })
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}