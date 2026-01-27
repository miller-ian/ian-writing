import { getPostById, getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id)

  if (!post) {
    return (
      <div className="max-w-[70ch] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    )
  }

  return (
    <article className="max-w-[70ch] mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-600 dark:text-gray-400">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
      </header>
      <div 
        className="prose dark:prose-invert max-w-[70ch]"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
      />
    </article>
  )
} 