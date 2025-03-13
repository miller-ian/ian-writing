import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ian\'s Blog',
  description: 'Personal blog and writing space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <div className="min-h-screen">
          <header className="border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">Ian's Blog</a>
                <div className="space-x-4">
                  <a href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a>
                  <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
                </div>
              </nav>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Ian's Blog. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 