import { PostStatus, findPostBySlug, insertPost } from "@/models/post";
import { localeNames, locales } from "@/i18n/locale";

import Empty from "@/components/blocks/empty";
import FormSlot from "@/components/dashboard/slots/form";
import { Form as FormSlotType } from "@/types/slots/form";
import { Post } from "@/types/post";
import { getIsoTimestr } from "@/lib/time";
import { getUserInfo } from "@/services/user";
import { getUuid } from "@/lib/hash";

export default async function () {
  const user = await getUserInfo();
  if (!user || !user.uuid) {
    return <Empty message="no auth" />;
  }

  const form: FormSlotType = {
    title: "Add Post",
    crumb: {
      items: [
        {
          title: "Posts",
          url: "/admin/posts",
        },
        {
          title: "Add Post",
          is_active: true,
        },
      ],
    },
    fields: [
      {
        name: "title",
        title: "Title",
        type: "text",
        placeholder: "Post Title",
        validation: {
          required: true,
        },
      },
      {
        name: "slug",
        title: "Slug",
        type: "text",
        placeholder: "what-is-shipany",
        validation: {
          required: true,
        },
        tip: "post slug should be unique, visit like: /blog/what-is-shipany",
      },
      {
        name: "locale",
        title: "Locale",
        type: "select",
        options: locales.map((locale: string) => ({
          title: localeNames[locale],
          value: locale,
        })),
        value: "en",
        validation: {
          required: true,
        },
      },
      {
        name: "status",
        title: "Status",
        type: "select",
        options: Object.values(PostStatus).map((status: string) => ({
          title: status,
          value: status,
        })),
        value: PostStatus.Created,
      },
      {
        name: "description",
        title: "Description",
        type: "textarea",
        placeholder: "Post Description",
      },
      {
        name: "cover_url",
        title: "Cover URL",
        type: "url",
        placeholder: "Post Cover Image URL",
      },
      {
        name: "author_name",
        title: "Author Name",
        type: "text",
        placeholder: "Author Name",
      },
      {
        name: "author_avatar_url",
        title: "Author Avatar URL",
        type: "url",
        placeholder: "Author Avatar Image URL",
      },
      {
        name: "content",
        title: "Content",
        type: "editor",
        placeholder: "Post Content",
      },
    ],
    submit: {
      button: {
        title: "Submit",
      },
      handler: async (data: FormData, passby: any) => {
        "use server";

        const title = data.get("title") as string;
        const slug = data.get("slug") as string;
        const locale = data.get("locale") as string;
        const status = data.get("status") as string;
        const description = data.get("description") as string;
        const cover_url = data.get("cover_url") as string;
        const author_name = data.get("author_name") as string;
        const author_avatar_url = data.get("author_avatar_url") as string;
        const content = data.get("content") as string;

        if (
          !title ||
          !title.trim() ||
          !slug ||
          !slug.trim() ||
          !locale ||
          !locale.trim()
        ) {
          throw new Error("invalid form data");
        }

        const existPost = await findPostBySlug(slug, locale);
        if (existPost) {
          throw new Error("post with same slug already exists");
        }

        const post: Post = {
          uuid: getUuid(),
          created_at: getIsoTimestr(),
          status: status as PostStatus,
          title,
          slug,
          locale,
          description,
          cover_url,
          author_name,
          author_avatar_url,
          content,
        };

        try {
          await insertPost(post);

          return {
            status: "success",
            message: "Post added",
            redirect_url: "/admin/posts",
          };
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
    },
  };

  return <FormSlot {...form} />;
}
