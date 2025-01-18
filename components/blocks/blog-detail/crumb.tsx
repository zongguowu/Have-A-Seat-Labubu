import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { BlogItem } from "@/types/blocks/blog";
import { Home } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Crumb({
  blog,
  locale,
}: {
  blog: BlogItem;
  locale: string;
}) {
  const t = useTranslations();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={locale === "en" ? "/" : `/${locale}`}>
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href={locale === "en" ? "/blogs" : `/${locale}/blogs`}
          >
            {t("blog.title")}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{blog.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
