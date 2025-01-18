"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { BlogItem } from "@/types/blocks/blog";
import Crumb from "./crumb";
import Prose from "@/components/markdown/prose";
import moment from "moment";

export default function BlogDetail({
  blog,
  content,
  locale,
}: {
  blog: BlogItem;
  content: any;
  locale: string;
}) {
  return (
    <section className="py-16">
      <div className="container">
        <Crumb blog={blog} locale={locale} />
        <h1 className="mb-7 mt-9 max-w-3xl text-2xl font-bold md:mb-10 md:text-4xl">
          {blog.title}
        </h1>
        <div className="flex items-center gap-3 text-sm md:text-base">
          {blog.author_avatar_url && (
            <Avatar className="h-8 w-8 border">
              <AvatarImage
                src={blog.author_avatar_url}
                alt={blog.author_name}
              />
            </Avatar>
          )}
          <div>
            {blog.author_name && (
              <a href="javascript:void(0)" className="font-medium">
                {blog.author_name}
              </a>
            )}

            <span className="ml-2 text-muted-foreground">
              on {moment(blog.created_at).fromNow()}
            </span>
          </div>
        </div>
        <div className="relative mt-0 grid max-w-screen-xl gap-4 lg:mt-0 lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="order-2 lg:order-none lg:col-span-8">
            <Prose className="mt-8" data-mdx-content>
              {content}
            </Prose>
          </div>
          <div className="order-1 flex h-fit flex-col text-sm lg:sticky lg:top-8 lg:order-none lg:col-span-3 lg:col-start-10 lg:text-xs"></div>
        </div>
      </div>
    </section>
  );
}
