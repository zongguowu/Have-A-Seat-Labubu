import Hero from "@/components/blocks/hero";
import Feature1 from "@/components/blocks/feature1";
import Feature3 from "@/components/blocks/feature3";
import Feature from "@/components/blocks/feature";
import Stats from "@/components/blocks/stats";
import Pricing from "@/components/blocks/pricing";
import Faq from "@/components/blocks/faq";
import Cta from "@/components/blocks/cta";
import { getLandingPage } from "@/services/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}`;

  if (locale !== "en") {
    canonicalUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}`;
  }

  return {
    alternates: {
      canonical: canonicalUrl,
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
    <>
      {page.hero && <Hero hero={page.hero} />}
      {page.introduce && <Feature1 section={page.introduce} />}
      {/*{page.feature && <Feature section={page.feature} />}
      {page.stats && <Stats section={page.stats} />}
      {page.pricing && <Pricing pricing={page.pricing} />}
      {page.faq && <Faq section={page.faq} />}
      {page.cta && <Cta section={page.cta} />}*/}
    </>
  );
}
