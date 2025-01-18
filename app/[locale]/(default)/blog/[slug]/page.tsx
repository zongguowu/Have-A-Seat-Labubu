import BlogDetail from "@/components/blocks/blog-detail";
import { getBlogBySlug } from "@/services/blog";
import { getContent } from "@/services/blog";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const t = await getTranslations();

  const slug = `${params.locale}/${params.slug}`;
  const blog = await getBlogBySlug(slug);

  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/blog/${params.slug}`;

  if (params.locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${params.locale}/blog/${params.slug}`;
  }

  return {
    title: blog?.title,
    description: blog?.description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const slug = `${params.locale}/${params.slug}`;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const content = await getContent(params.slug, params.locale);

  return <BlogDetail blog={blog} content={content} locale={params.locale} />;
}
