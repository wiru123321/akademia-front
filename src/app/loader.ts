"use client";

import { getStrapiMedia } from "./utils/api-helpers";

export default function myImageLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width?: number;
    quality?: number;
}) {
    const imgUrl = getStrapiMedia(src);
    return `${imgUrl}?w=${width}&q=${quality || 75}`;
}
