import { getPostsMetadata } from "./posts"

export async function getTagsByName(tagName: string) {
  const posts = await getPostsMetadata()

  if (!posts) return undefined

  const tagPosts = posts.filter((post) => post.tags.includes(tagName))

  return tagPosts
}
