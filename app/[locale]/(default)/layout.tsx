import Footer from "@/components/blocks/footer";
import Header from "@/components/blocks/header";
import { ReactNode } from "react";
import { getLandingPage } from "@/services/page";
import Feedback from "@/components/feedback";

export default async function DefaultLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getLandingPage(locale);

  return (
    <>
      {page.header && <Header header={page.header} />}
      <main className="overflow-x-hidden">{children}</main>
      {page.footer && <Footer footer={page.footer} />}
      {/* <Feedback socialLinks={page.footer?.social?.items} /> */}
    </>
  );
}
