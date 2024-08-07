import { sectionRenderer } from "app/utils/section-renderer";
import { Metadata } from "next";
import { getPageBySlug } from "app/utils/get-page-by-slug";
import { FALLBACK_SEO } from "app/utils/constants";
import Hero from "../components/Hero";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);

  if (!page.data[0]?.attributes?.seo) return FALLBACK_SEO;
  const metadata = page.data[0].attributes.seo;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
  };
}

export default async function PageRoute({ params }: Props) {
  const page = await getPageBySlug(params.slug);
  if (page.data.length === 0) {
    const errorPage = await getPageBySlug("notfound");
    const contentSections = errorPage.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) =>
      sectionRenderer(section, index)
    );
  }
  const contentSections = page.data[0].attributes.contentSections;
  return contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
}
