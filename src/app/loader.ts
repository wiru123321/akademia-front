"use client";

export default function myImageLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width?: number;
    quality?: number;
}) {
    return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`;
}
