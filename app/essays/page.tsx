import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'
export const revalidate = false

export default async function EssaysPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-[70ch] mx-auto">
      <div className="space-y-3">
        {posts.map((post) => (
          <article key={post.id} className="py-1">
            <h2 className="text-sm sm:text-base font-medium tracking-tight">
              <Link
                href={`/${post.id}`}
                className="text-blue-700 hover:text-blue-900 visited:text-purple-700 underline underline-offset-4 decoration-current hover:decoration-current"
              >
                {post.title}
              </Link>
            </h2>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-zinc-500">No essays yet. Check back soon!</p>
        )}
      </div>
    </div>
  )
}


