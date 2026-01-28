import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = false

export default function AboutPage() {
  return (
    <div className="max-w-[70ch] mx-auto">
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-zinc-950 mb-4">
          I'm a software engineer passionate about technology and writing. <br /> <br />
          
          I currently work at Rune Technologies, a startup working on AI-powered military logistics. <br /> <br />

          Before that, I worked at Anduril Industries, a former startup working on all kinds of military technology.
        </p>
      </section>


      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-zinc-950 mb-4">
          I'm always interested in connecting with people who have their own thoughts to share. 
          Feel free to reach out through any of the following channels:
        </p>
        <div className="text-zinc-950 space-y-2">
          <a
            href="https://www.linkedin.com/in/ian-miller-48812b14a/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-700 hover:text-blue-900 underline underline-offset-4 decoration-current"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/miller__ian"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-700 hover:text-blue-900 underline underline-offset-4 decoration-current"
          >
            Twitter / X
          </a>
          <Link
            href="/contact"
            className="block text-blue-700 hover:text-blue-900 underline underline-offset-4 decoration-current"
          >
            Email
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        <p className="text-zinc-950 mb-4">
          Check out my most recent blog posts to see what I've been writing about.
        </p>
        <Link
          href="/essays"
          className="text-blue-700 hover:text-blue-900 underline underline-offset-4 decoration-current"
        >
          Essays
        </Link>
      </section>
    </div>
  )
} 