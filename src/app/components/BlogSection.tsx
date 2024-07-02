import React from "react";
import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import moment from "moment";
import Image from "next/image";
import myImageLoader from "app/loader";

interface Picture {
    data: {
        id: string;
        attributes: {
            url: string;
            name: string;
            alternativeText: string;
        };
    };
}

interface Button {
    id: string;
    url: string;
    text: string;
    type: string;
    newTab: boolean;
}

interface Article {
    id: string;
    attributes: {
        title: string;
        description: string;
        slug: string;
        cover: Picture;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        authorsBio: { data: { attributes: { name: string } } };
        category: { data: { attributes: { slug: string } } };
    };
}

interface BlogSectionProps {
    data: {
        id: string;
        title: string;
        description: string;
        button: Button;
        articles: { data: Article[] };
    };
}

export default function BlogSection({ data }: BlogSectionProps) {
    return (
        <div className="p-6 my-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center md:max-w-7xl max-w-lg mx-auto">
                <div>
                    <h2 className="text-4xl font-serif font-semibold text-[#B97B80] mb-6">
                        {data.title}
                    </h2>
                    <h2 className="text-3xl font-montserrat font-bold text-black uppercase leading-10 mb-6">
                        {data.description}
                    </h2>
                    {data.button && (
                        <Link
                            href={data.button.url || ""}
                            target={data?.button.newTab ? "_blank" : "_self"}
                            className={`${renderButtonStyle(
                                "primary"
                            )} relative inline-flex pr-1 lg:text-xl md:pr-1 max-w-fit mx-auto transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:shadow-[0px_4px_4px_0px_rgba(185,123,128,0.20)] hover:text-[#B97B80] hover:shadow-[#B97B80]`}
                        >
                            <span>{data.button.text}</span>
                            <span>
                                <BsArrowUpRightCircleFill className="ml-3 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
                            </span>
                        </Link>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
                    {data.articles.data.map(
                        (article: Article, index: number) => (
                            <Link
                                key={index}
                                href={`/blog/${article.attributes.category.data.attributes.slug}/${article.attributes.slug}`}
                                target={"_blank"}
                                className="cursor-pointer rounded-3xl overflow-hidden group"
                            >
                                <div className="rounded-3xl overflow-hidden">
                                    <Image
                                        loader={myImageLoader}
                                        src={
                                            article.attributes.cover.data
                                                .attributes.url
                                        }
                                        alt={
                                            article.attributes.cover.data
                                                .attributes.alternativeText ||
                                            ""
                                        }
                                        width={400}
                                        height={400}
                                        className="w-full h-52 rounded-3xl animate-fade-in scale-100 transform object-cover opacity-100 transition duration-300 group-hover:rounded-3xl group-hover:scale-110"
                                    />
                                </div>
                                <div className="py-6">
                                    <span className="text-sm font-montserrat block text-gray-400 mb-2">
                                        {moment(article.attributes.publishedAt)
                                            .utc()
                                            .format("DD/MM/YYYY")}{" "}
                                        |{" "}
                                        {
                                            article.attributes.authorsBio.data
                                                .attributes.name
                                        }
                                    </span>
                                    <h3 className="text-xl font-bold font-serif text-black group-hover:text-[#B97B80] duration-300 transition-all">
                                        {article.attributes.title}
                                    </h3>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
