import Link from "next/link"
import { notFound } from "next/navigation"

import { getPostData, getSortedPostsData } from "@/lib/posts"
import { getFormattedDate } from "@/lib/utils"

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = params

  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post?.title,
  }
}

export default async function PostPage({
  params,
}: {
  params: { postId: string }
}) {
  const posts = getSortedPostsData()
  const { postId } = params

  if (!posts.find((post) => post.id === postId)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm">{pubDate}</p>
      </div>
      <article>
        <section
          className="prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p>
          <Link href="/">Back Home</Link>
        </p>
      </article>
    </main>
  )
}
