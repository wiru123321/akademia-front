import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";
import Navbar from "./components/Navbar";
import { FALLBACK_SEO } from "./utils/constants";
import { Montserrat } from "next/font/google";
import CanonicalURL from "./components/CanonicalURL";

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
        throw new Error(
            "The Strapi API Token environment variable is not set."
        );

    const path = `/global`;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    const urlParamsObject = {
        populate: [
            "metadata.shareImage",
            "favicon",
            "notificationBanner.link",
            "contact.contactCard",
            "navbar.navbarLink",
            "navbar.button",
            "navbar.navbarLink.megaSection",
            "navbar.navbarLogo.logoImg",
            "footer.lessonSection",
            "footer.trainingSection",
            "footer.contactSection",
            "footer.pageList",
            "faq.trainingItems",
            "faq.trainingTitle",
            "faq.lessonTitle",
            "faq.lessonItems",
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
    const global = await getGlobal();
    // TODO: CREATE A CUSTOM ERROR PAGE
    if (!global.data) return null;

    const { contact, navbar, footer, faq } = global.data.attributes;

    const navbarLogoUrl = navbar.navbarLogo.logoImg.data.attributes.url;

    console.log(footer);

    return (
        <html lang="pl">
            <head>
                <CanonicalURL />
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
            </body>
        </html>
    );
}
