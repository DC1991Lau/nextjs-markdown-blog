import { JSXElementConstructor, ReactElement } from "react"

export type BlogPost = {
  meta: PostMeta
  content: ReactElement<any, string | JSXElementConstructor<any>>
}

export type PostMeta = {
  id: string
  title: string
  date: string
  tags: string[]
}
