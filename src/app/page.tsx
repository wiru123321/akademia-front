import { sectionRenderer } from "./utils/section-renderer";
import { getPageBySlug } from "app/utils/get-page-by-slug";

export default async function RootRoute() {
  try {
    const page = await getPageBySlug("home");
    if (page.error && page.error.status == 401)
      throw new Error(
        "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
      );
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) =>
      sectionRenderer(section, index)
    );
  } catch (error: any) {
    window.alert("Missing or invalid credentials");
  }
}
