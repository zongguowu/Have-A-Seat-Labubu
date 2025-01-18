import { BlogItem } from "@/types/blocks/blog";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import glob from "fast-glob";
import matter from "gray-matter";
import { mdxComponents } from "@/components/markdown/mdx";
import path from "path";

async function importBlog(blogFilename: string): Promise<BlogItem> {
  const source = await fs.readFile(
    path.join(process.cwd(), "content/blog", blogFilename),
    "utf-8"
  );

  const { data } = matter(source);

  return {
    slug: blogFilename.replace(/\.mdx$/, ""),
    ...data,
  };
}

export async function getAllBlogs({ locale }: { locale?: string }) {
  // Get blog files from root blog directory
  let rootBlogFiles = await glob("*.mdx", {
    cwd: "./content/blog",
  });

  // Get locale-specific blog files if locale is provided
  let localeBlogFiles: string[] = [];
  if (locale) {
    localeBlogFiles = await glob("*.mdx", {
      cwd: `./content/blog/${locale}`,
    });
  }

  // Combine and process all blog files
  const allBlogFiles = [
    ...rootBlogFiles.map((file) => ({ file, _path: "./content/blog" })),
    ...localeBlogFiles.map((file) => ({
      file,
      _path: `./content/blog/${locale}`,
      locale,
    })),
  ];

  // Modified importBlog to accept full path
  const importBlogWithPath = async ({
    file,
    _path,
    locale,
  }: {
    file: string;
    _path: string;
    locale?: string;
  }): Promise<BlogItem> => {
    const source = await fs.readFile(
      path.join(process.cwd(), _path, file),
      "utf-8"
    );
    const { data } = matter(source);
    return {
      slug: locale
        ? `/${locale}/blog/${file.replace(/\.mdx$/, "")}`
        : `/blog/${file.replace(/\.mdx$/, "")}`,
      ...data,
    };
  };

  let blogs = await Promise.all(allBlogFiles.map(importBlogWithPath));

  return blogs.sort((a, z) => {
    const aDate = a.created_at ? +new Date(a.created_at) : 0;
    const zDate = z.created_at ? +new Date(z.created_at) : 0;
    return zDate - aDate;
  });
}

export async function getBlogBySlug(slug: string): Promise<BlogItem | null> {
  try {
    const cleanSlug = slug.replace(/\.mdx$/, "");
    return await importBlog(`${cleanSlug}.mdx`);
  } catch (error) {
    console.error(`Failed to load blog with slug: ${slug}`, error);
    return null;
  }
}

export async function getContent(slug: string, locale: string) {
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${locale}`,
    `${slug}.mdx`
  );
  const source = await fs.readFile(filePath, "utf-8");

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  return content;
}
