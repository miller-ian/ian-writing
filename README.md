# Personal Blog

A modern, responsive blog built with Next.js and hosted on GitHub Pages.

## Features

- Modern, responsive design with dark mode support
- Markdown blog post support
- Fast page loads with static site generation
- SEO optimized
- Syntax highlighting for code blocks
- Automatic blog post listing and pagination
- Clean typography with Tailwind CSS

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-blog-repo.git
cd your-blog-repo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Writing Blog Posts

Blog posts are written in Markdown format and stored in the `posts` directory. Each post should include front matter with title and date:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
---

Your content here...
```

## Deployment

This blog is designed to be deployed to GitHub Pages. To deploy:

1. Push your changes to GitHub
2. Configure GitHub Pages to deploy from your desired branch
3. GitHub Actions will automatically build and deploy your site

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Front matter parser
- [remark](https://github.com/remarkjs/remark) - Markdown processor

## License

This project is licensed under the MIT License - see the LICENSE file for details. 