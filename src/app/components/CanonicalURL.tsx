"use client";
import { usePathname } from "next/navigation";

export default function CanonicalURL() {
    const siteUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    const pathname = usePathname();
    const cleanPath = pathname.split("#")[0].split("?")[0];
    const canonicalUrl = `${siteUrl}` + (pathname === "/" ? "" : cleanPath);

    return <link rel="canonical" href={canonicalUrl} />;
}
