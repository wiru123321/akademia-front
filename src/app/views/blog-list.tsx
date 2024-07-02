import Image from "next/image";
import myImageLoader from "app/loader";
import moment from "moment";
import Link from "next/link";

interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        readTime: string;
        cover: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        category: {
            data: {
                attributes: {
                    name: string;
                    slug: string;
                };
            };
        };
        authorsBio: {
            data: {
                attributes: {
                    name: string;
                    avatar: {
                        data: {
                            attributes: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
    };
}

export default function PostList({
    data: articles,
    children,
}: {
    data: Article[];
    children?: React.ReactNode;
}) {
    const preparedArticlesArray = articles.slice(1);
    return (
        <section className="overflow-hidden">
            <div className="bg-[#DEC9CA] pt-40 pb-80 px-10 relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex gap-6">
                    <div
                        className="mt-20 rounded-3xl w-80 h-80"
                        style={{
                            background: `linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #CFB0AE 100%)`,
                        }}
                    ></div>
                    <div
                        className="rounded-3xl w-80 h-80"
                        style={{
                            background: `linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #CFB0AE 100%)`,
                        }}
                    ></div>
                    <div
                        className="rounded-3xl w-80 h-80"
                        style={{
                            background: `linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #CFB0AE 100%)`,
                        }}
                    ></div>
                    <div
                        className="mt-20 rounded-3xl w-80 h-80"
                        style={{
                            background: `linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #CFB0AE 100%)`,
                        }}
                    ></div>
                </div>
                <div className="relative z-10">
                    <h1 className="text-center font-bold font-heading text-4xl lg:text-6xl text-black max-w-md lg:max-w-4xl mx-auto pb-32 lg:pb-0">
                        Discover the latest news, stories &amp; insights
                    </h1>
                </div>
            </div>
            <div className="container px-4 mx-auto">
                <Link
                    className="bg-white border border-[#DEC9CA] hover:border-[#B97B80] transition duration-200 shadow rounded-3xl transform -translate-y-1/2 flex flex-wrap"
                    href={`/blog/${articles[0].attributes.category.data.attributes.slug}/${articles[0].attributes.slug}`}
                >
                    <div className="w-full lg:w-1/2 px-8 lg:px-16 py-8">
                        <div className="flex flex-col justify-center items-start h-full">
                            <div className="py-1 px-3 rounded-md bg-[#DEC9CA] border border-[#CFB0AE] text-sm font-medium text-black inline-block mb-4">
                                {
                                    articles[0].attributes.category.data
                                        .attributes.name
                                }
                            </div>
                            <h2 className="text-2xl text-[#B8777D] lg:text-3xl font-bold font-heading mb-4 max-w-sm">
                                {articles[0].attributes.title}
                            </h2>
                            <div className="flex flex-wrap items-center gap-3">
                                <p className="text-gray-500 text-sm">
                                    {moment(articles[0].attributes.publishedAt)
                                        .utc()
                                        .format("DD/MM/YYYY")}
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="4"
                                    height="4"
                                    viewBox="0 0 4 4"
                                    fill="none"
                                >
                                    <circle
                                        cx="2"
                                        cy="2"
                                        r="2"
                                        fill="#B8B8B8"
                                    ></circle>
                                </svg>
                                <p className="text-gray-500 text-sm">
                                    Przeczytasz w{" "}
                                    {articles[0].attributes.readTime}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative" style={{ height: "396px" }}>
                            <div className="absolute top-0 left-0 z-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="155"
                                    height="154"
                                    viewBox="0 0 155 154"
                                    fill="none"
                                >
                                    <path
                                        d="M-34 79.9324V153.361C-34 153.714 -33.7141 154 -33.3615 154H17.62C17.9724 154 18.2585 153.714 18.2585 153.361V94.299C18.2585 55.5087 56.5087 17.2585 95.299 17.2585H154.361C154.714 17.2585 155 16.9724 155 16.62V-34.3615C155 -34.7139 154.714 -35 154.361 -35H80.9324C17.4572 -35 -34 16.4572 -34 79.9324Z"
                                        fill="#CFB0AE"
                                    ></path>
                                </svg>
                            </div>
                            <div className="absolute bottom-0 right-0 z-10">
                                <svg
                                    className="rounded-br-3xl"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="154"
                                    height="158"
                                    viewBox="0 0 154 158"
                                    fill="none"
                                >
                                    <path
                                        d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                                        fill="#CFB0AE"
                                    ></path>
                                </svg>
                            </div>
                            <Image
                                loader={myImageLoader}
                                className="absolute inset-0 w-full h-full object-cover lg:rounded-tr-3xl rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none"
                                src={
                                    articles[0].attributes.cover.data.attributes
                                        .url
                                }
                                width={200}
                                height={200}
                                alt=""
                            />
                        </div>
                    </div>
                </Link>
                <div className="relative h-16 -mt-48 lg:-mt-20 mb-16">
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 h-px w-full"></div>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-8 text-black rounded-2xl bg-[#DEC9CA] border border-[#CFB0AE] text-lg lg:text-2xl font-bold font-heading whitespace-nowrap">
                        Najnowsze artykuły
                    </div>
                </div>
                <div className="flex flex-wrap mb-8 -mx-4">
                    {preparedArticlesArray.map((article) => (
                        <div
                            key={article.id}
                            className="w-full md:w-1/2 lg:w-1/3 p-4"
                        >
                            <Link
                                href={`/blog/${article.attributes.category.data.attributes.slug}/${article.attributes.slug}`}
                            >
                                <div className="bg-white border border-[#DEC9CA] hover:border-[#B97B80] transition duration-200 rounded-2xl h-full">
                                    <div
                                        className="relative"
                                        style={{ height: "240px" }}
                                    >
                                        <div className="absolute top-0 left-0 z-10">
                                            <svg
                                                className="rounded-tl-2xl"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="159"
                                                height="156"
                                                viewBox="0 0 159 156"
                                                fill="none"
                                            >
                                                <path
                                                    d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                                                    fill="#CFB0AE"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className="absolute bottom-0 right-0 z-10">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="150"
                                                height="158"
                                                viewBox="0 0 150 158"
                                                fill="none"
                                            >
                                                <path
                                                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                                                    fill="#CFB0AE"
                                                ></path>
                                            </svg>
                                        </div>
                                        <Image
                                            loader={myImageLoader}
                                            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                                            src={
                                                article.attributes.cover.data
                                                    .attributes.url
                                            }
                                            width={200}
                                            height={200}
                                            alt=""
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="py-1 px-2 rounded-md bg-[#DEC9CA] border border-[#CFB0AE] text-xs font-medium text-black inline-block mb-3">
                                            {
                                                article.attributes.category.data
                                                    .attributes.name
                                            }
                                        </div>
                                        <h2 className="font-bold text-[#B8777D] font-serif mb-3">
                                            {article.attributes.title}
                                        </h2>
                                        <p className="text-black font-montserrat text-sm mb-9">
                                            {article.attributes.description}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <p className="text-gray-500 text-sm">
                                                {moment(
                                                    article.attributes
                                                        .publishedAt
                                                )
                                                    .utc()
                                                    .format("DD/MM/YYYY")}
                                            </p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="4"
                                                height="4"
                                                viewBox="0 0 4 4"
                                                fill="none"
                                            >
                                                <circle
                                                    cx="2"
                                                    cy="2"
                                                    r="2"
                                                    fill="#B8B8B8"
                                                ></circle>
                                            </svg>
                                            <p className="text-gray-500 text-sm">
                                                Przeczytasz w{" "}
                                                {article.attributes.readTime}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                {children && children}
            </div>
        </section>
    );
}
