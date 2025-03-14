import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'

export const dynamic = 'force-static'
export const revalidate = false

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </Link>
            </h2>
            <time className="text-gray-600 dark:text-gray-400 mb-4 block">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <p className="text-gray-600 dark:text-gray-400">
              {post.content.substring(0, 200)}...
            </p>
            <Link 
              href={`/blog/${post.id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block"
            >
              Read more →
            </Link>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-gray-600 dark:text-gray-400">
            No blog posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  )
} 