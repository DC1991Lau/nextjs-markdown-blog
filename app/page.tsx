import { REVALIDATION_TIME } from "@/config/site"
import PostsList from "@/components/blog/posts-list"

export const revalidate = REVALIDATION_TIME

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        {/* @ts-expect-error Server Component */}
        <PostsList />
      </div>
    </section>
  )
}
