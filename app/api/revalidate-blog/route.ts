import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const postId = request.nextUrl.searchParams.get("postId") || "/"
  revalidatePath(`/blog/posts/${postId}`)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
