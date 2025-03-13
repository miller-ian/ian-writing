import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = false

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Thoughts, stories, and ideas.
        </p>
        <Link 
          href="/blog" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read Blog Posts
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Check out my most recent blog posts and articles.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Learn more about who I am and what I write about.
          </p>
        </div>
      </section>
    </div>
  )
} 