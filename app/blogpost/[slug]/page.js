export const runtime = "nodejs";

import fs from "fs"
import matter from "gray-matter";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import BlogError from '@/components/blog-error'


export default async function Page({ params }) {

  const { slug } = await params;

  const filePath = `public/content/${slug}.md`;

  
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    if (!data || !content) {
      throw new Error('Invalid markdown content');
    }

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, { title: '👋🌍' })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypePrettyCode, {
        theme: "github-dark",
        transformers: [
          transformerCopyButton({
            visibility: 'always',
            feedbackDuration: 3_000,
          }),
        ],
      })


      .process(content)


    const htmlContent = processedContent.toString();







    return (
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 py-20">
          {/* 📝 Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {data.title}
          </h1>


          {/* 📜 Description */}
          <p className="border-l-4 border-primary pl-4 text-lg text-gray-700 dark:text-gray-300 mb-8 font-semibold italic">
            {data.description}
          </p>

          {/* 👤 Author & Date */}
          <div className="flex flex-wrap items-center gap-3 text-gray-500 dark:text-gray-400 text-sm mb-6">
            <span>👤 {data.author}</span>
            <span>•</span>
            <span>📅 {new Date(data.date).toDateString()}</span>
          </div>

          {/* 📖 HTML Content */}
          <article
            className="prose dark:prose-invert prose-lg max-w-none
                     prose-headings:text-gray-900 dark:prose-headings:text-gray-100
                     prose-a:text-primary dark:prose-a:text-primary
                     prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                     prose-p:text-gray-700 dark:prose-p:text-gray-300"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </main>
    );
}
