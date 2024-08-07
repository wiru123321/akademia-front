import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";
import Navbar from "./components/Navbar";
import { FALLBACK_SEO } from "./utils/constants";
import { Montserrat } from "next/font/google";
import CanonicalURL from "./components/CanonicalURL";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import { GoogleTagManager } from "@next/third-parties/google";
import { cookies } from "next/headers";

const FAQ = dynamic(() => import("./components/FAQ"), {
  loading: () => <p>Loading...</p>,
});
const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "metadata.metaTitle",
      "metadata.metaDescription",
      "favicon",
      "contact.contactCard",
      "footer.lessonSection",
      "footer.trainingSection",
      "footer.contactSection",
      "footer.pageList",
    ],
  };

  return await fetchAPI(path, urlParamsObject, options);
}

export async function getGlobalAnother(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const urlParamsObject = {
    populate: [
      "navbar.navbarLink",
      "navbar.button",
      "navbar.navbarLink.megaSection",
      "navbar.navbarLogo.logoImg",
      "faq.trainingItems",
      "faq.trainingTitle",
      "faq.lessonTitle",
      "faq.lessonItems",
    ],
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function getGlobalMeta(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const urlParamsObject = {
    populate: [
      "opengraph.title",
      "opengraph.url",
      "opengraph.description",
      "opengraph.image",
      "opengraph.type",
      "twitter.title",
      "twitter.card",
      "twitter.description",
      "twitter.image",
    ],
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalComponents = await getGlobalAnother();
  const global = await getGlobal();
  const globalMeta = await getGlobalMeta();
  const gtmKey = process.env.NEXT_GTM_KEY;
  const cookieStore = cookies();
  const cookie = cookieStore.get("gdpr");

  if (!global.data || !globalComponents.data || !globalMeta.data) return null;

  const { contact, footer } = global.data.attributes;

  const { navbar, faq } = globalComponents.data.attributes;

  const { opengraph, twitter } = globalMeta.data.attributes;

  const navbarLogoUrl = navbar.navbarLogo.logoImg.data.attributes.url;

  const ogUrl = opengraph.image.data.attributes.url;

  const twitterUrl = twitter.image.data.attributes.url;

  return (
    <html lang="pl">
      <head>
        <CanonicalURL />
        <link
          rel="icon"
          href="https://admin.akademiarozwojudziecka.pl/uploads/logo_40x40_Akademia_Rozwoju_Dziecka_4bb5b2f6e5.png"
          sizes="40x40"
        />
        <link
          rel="icon"
          href="https://admin.akademiarozwojudziecka.pl/uploads/logo_192x193_Akademia_Rozwoju_Dziecka_png_f962451a93.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://admin.akademiarozwojudziecka.pl/uploads/logo_180_180_Akademia_Rozwoju_Dziecka_png_39a3ddfd26.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://admin.akademiarozwojudziecka.pl/uploads/logo_270x270_Akademia_Rozwoju_Dziecka_png_11bd47e3a7.png"
        />
        <meta name="twitter:card" content={twitter.card} />
        <meta name="twitter:title" content={twitter.title} />
        <meta name="twitter:description" content={twitter.description} />
        <meta
          name="twitter:image"
          content={getStrapiMedia(twitterUrl) || twitterUrl}
        />
        <meta property="og:url" content={opengraph.url} />
        <meta property="og:type" content={opengraph.type} />
        <meta property="og:title" content={opengraph.title} />
        <meta property="og:description" content={opengraph.description} />
        <meta property="og:image" content={getStrapiMedia(ogUrl) || ogUrl} />
      </head>
      <body>
        <Navbar
          links={navbar.navbarLink}
          button={navbar.button}
          logoUrl={navbarLogoUrl}
          logoText={navbar.navbarLogo.logoText}
        />

        <main
          className={`${montserrat.variable} "dark:bg-black dark:text-gray-100 min-h-screen`}
        >
          {children}
        </main>

        <ScrollToTop />

        <CookieBanner />

        <Contact
          title={contact.title}
          description={contact.description}
          contactCard={contact.contactCard}
        />

        <FAQ
          title={faq.title}
          trainingItems={faq.trainingItems}
          trainingTitle={faq.trainingTitle}
          lessonItems={faq.lessonItems}
          lessonTitle={faq.lessonTitle}
        />

        <Footer
          title={footer.title}
          description={footer.description}
          lessonTitle={footer.lessonTitle}
          lessonSection={footer.lessonSection}
          trainingTitle={footer.trainingTitle}
          trainingSection={footer.trainingSection}
          contactSection={footer.contactSection}
          copyrights={footer.copyrights}
          pageList={footer.pageList}
        />
        <script
          defer
          src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js"
        ></script>
      </body>
      {cookie?.value === "true" && gtmKey && (
        <GoogleTagManager gtmId={gtmKey} />
      )}
    </html>
  );
}
