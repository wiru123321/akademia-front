import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import CanonicalURL from "./components/CanonicalURL";
import { Montserrat } from "next/font/google";
import { getGlobal } from "./layout";

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
