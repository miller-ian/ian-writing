import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = false

export default function AboutPage() {
  return (
    <div className="max-w-[70ch] mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Hi, I'm Ian Miller</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I'm a software engineer passionate about technology, programming, and sharing knowledge. 
          This blog serves as a platform for me to document my journey in software development, 
          share insights about technology, and contribute to the developer community.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About This Blog</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This blog is a space where I write about:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>Software development and programming</li>
          <li>Technical tutorials and how-to guides</li>
          <li>Personal projects and experiences</li>
          <li>Thoughts on technology and industry trends</li>
          <li>Learning and growth in the tech field</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I'm always interested in connecting with fellow developers and tech enthusiasts. 
          Feel free to reach out through any of the following channels:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>
            <a 
              href="https://www.linkedin.com/in/ian-miller-48812b14a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/miller-ian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="mailto:imiller7255@gmail.com"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Email
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Check out my most recent blog posts to see what I've been writing about.
        </p>
        <Link 
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Blog Posts
        </Link>
      </section>
    </div>
  )
} 