import Link from "next/link";
import Image from "next/image";
import myImageLoader from "app/loader";

export default function Logo({
    src,
    children,
}: {
    src: string | null;
    children?: React.ReactNode;
}) {
    return (
        <Link
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
        >
            {src && (
                <Image
                    loader={myImageLoader}
                    src={src}
                    alt="logo"
                    width={100}
                    height={100}
                />
            )}
            <div className="ml-2">{children}</div>
        </Link>
    );
}
