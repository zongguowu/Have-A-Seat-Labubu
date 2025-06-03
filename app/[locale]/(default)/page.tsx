import Hero from "@/components/blocks/hero";
import Feature1 from "@/components/blocks/feature1";
import Feature3 from "@/components/blocks/feature3";
import Feature from "@/components/blocks/feature";
import Stats from "@/components/blocks/stats";
import Pricing from "@/components/blocks/pricing";
import Faq from "@/components/blocks/faq";
import Cta from "@/components/blocks/cta";
import { getLandingPage } from "@/services/page";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();
  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}`;
  }

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t("metadata.keywords"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': '/',
        'zh': '/zh',
      },
    },
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: canonicalUrl,
      siteName: "Have A Seat Labubu",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_WEB_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: locale === "en" 
            ? "Have A Seat Labubu - Premium Artistic Lifestyle Brand"
            : "Have A Seat Labubu - 高端艺术生活方式品牌",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.title"),
      description: t("metadata.description"),
      images: [`${process.env.NEXT_PUBLIC_WEB_URL}/og-image.jpg`],
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getLandingPage(locale);

  return (
    <div className="min-h-screen bg-white">
      {page.hero && <Hero hero={page.hero} />}
      {page.introduce && <Feature1 section={page.introduce} />}
      {page.feature && <Feature section={page.feature} />}
      {page.stats && <Stats section={page.stats} />}
      {/*
      {page.pricing && <Pricing pricing={page.pricing} />}
      {page.faq && <Faq section={page.faq} />}
      {page.cta && <Cta section={page.cta} />}
      */}
    </div>
  );
}
