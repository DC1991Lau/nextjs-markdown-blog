import { FC } from "react"

import { getSortedPostsData } from "@/lib/posts"
import Post from "@/components/posts/post"

interface PostsListProps {}

const PostsList: FC<PostsListProps> = ({}) => {
  const posts = getSortedPostsData()
  return (
    <section className="my-4 space-y-4">
      <h2 className="text-2xl font-bold">My Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </section>
  )
}

export default PostsList
