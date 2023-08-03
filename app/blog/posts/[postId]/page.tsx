import Link from "next/link"
import { notFound } from "next/navigation"

import { getPostByName, getPostsMetadata } from "@/lib/posts"
import { getFormattedDate } from "@/lib/utils"

import "highlight.js/styles/github-dark.css"
import { REVALIDATION_TIME } from "@/config/site"

export const revalidate = REVALIDATION_TIME

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMetadata()

  if (!posts) return []

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post?.meta.title,
  }
}

export default async function PostPage({ params: { postId } }: Props) {
  const blogPost = await getPostByName(`${postId}.mdx`)

  if (!blogPost) return notFound()

  const { content, meta } = blogPost

  const pubDate = getFormattedDate(meta.date)

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/blog/tags/${tag}`}>
      {tag}
    </Link>
  ))

  return (
    <>
      <h2 className="mb-0 mt-4 text-3xl">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  )
}
