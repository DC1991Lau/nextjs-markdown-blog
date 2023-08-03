import { FC } from "react"
import Link from "next/link"

import { REVALIDATION_TIME } from "@/config/site"
import { getPostByName, getPostsMetadata } from "@/lib/posts"
import { getTagsByName } from "@/lib/tags"
import Post from "@/components/blog/post"

export const revalidate = REVALIDATION_TIME

type TagPageProps = {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMetadata()

  if (!posts) return []

  const tags = new Set(posts.map((post) => post.tags).flat())

  return Array.from(tags).map((tag) => ({ tag }))
}

export async function generateMetadata({ params: { tag } }: TagPageProps) {
  return {
    title: `Posts about ${tag}`,
  }
}

export default async function TagsPage({ params: { tag } }: TagPageProps) {
  const tagPosts = await getTagsByName(tag)

  if (!tagPosts) return <p>Sorry, no posts for that keyword</p>

  return (
    <>
      <h2 className="mb-0 mt-4 text-3xl">Results for: #{tag}</h2>
      <section className="mx-auto mt-6 max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  )
}
