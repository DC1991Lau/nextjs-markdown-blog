import { FC } from "react"
import Link from "next/link"

import { PostMeta } from "@/types/blog"
import { getFormattedDate } from "@/lib/utils"

interface PostProps {
  post: PostMeta
}

const Post: FC<PostProps> = ({ post }) => {
  const { date, id, title } = post
  const formattedDate = getFormattedDate(date)
  return (
    <li>
      <Link
        href={`/blog/posts/${id}`}
        className="text-xl font-semibold underline"
      >
        {title}
      </Link>
      <br />
      <p className="text-sm">{formattedDate}</p>
    </li>
  )
}

export default Post
