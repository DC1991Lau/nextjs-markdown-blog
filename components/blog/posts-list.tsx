import { getPostsMetadata } from "@/lib/posts"
import Post from "@/components/blog/post"

export default async function PostsList() {
  const posts = await getPostsMetadata()

  if (!posts) {
    return <p>No posts available</p>
  }

  return (
    <section className="my-4 space-y-4">
      <h2 className="text-2xl font-bold">My Posts</h2>
      <ul className="list-none space-y-4">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </section>
  )
}
