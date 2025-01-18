import Blog from "@/components/blocks/blog";
import { Blog as BlogType } from "@/types/blocks/blog";
import { getAllBlogs } from "@/services/blog";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();

  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/blogs`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/blogs`;
  }

  return {
    title: t("blog.title"),
    description: t("blog.description"),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ({ params }: { params: { locale: string } }) {
  const t = await getTranslations();

  const blogs = await getAllBlogs({ locale: params.locale });

  const blog: BlogType = {
    title: t("blog.title"),
    description: t("blog.description"),
    items: blogs,
    read_more_text: t("blog.read_more_text"),
  };

  return <Blog blog={blog} />;
}
