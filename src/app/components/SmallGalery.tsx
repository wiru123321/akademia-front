import React from "react";
import Image from "next/image";
import myImageLoader from "app/loader";

interface Picture {
    id: string;
    attributes: {
        url: string;
        name: string;
        alternativeText: string;
    };
}

interface SmallGaleryProps {
    data: {
        id: string;
        title: string;
        description: string;
        picture: { data: Picture[] };
    };
}

export default function SmallGalery({ data }: SmallGaleryProps) {
    console.log(data.picture.data[0]);
    return (
        <section className="py-12 md:py-20">
            <div className="container px-4 mx-auto">
                <div className="max-w-lg mx-auto mb-12 text-center">
                    <h2 className="text-4xl mb-4 font-bold font-serif text-[#B8777D]">
                        {data.title && data.title}
                    </h2>
                    <p className="font-montserrat text-base text-black">
                        {data.description && data.description}
                    </p>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/3 h-full px-3 mb-6 md:mb-0">
                        {data.picture.data[0] && (
                            <Image
                                loader={myImageLoader}
                                className="w-full rounded object-cover"
                                height={1000}
                                width={1200}
                                alt={
                                    data.picture.data[0].attributes
                                        .alternativeText
                                }
                                src={data.picture.data[0].attributes.url}
                            />
                        )}
                    </div>
                    <div className="w-full md:w-2/3 px-3">
                        <div className="h-64 mb-6">
                            {data.picture.data[1] && (
                                <Image
                                    loader={myImageLoader}
                                    className="h-64 md:h-128 w-full rounded object-cover"
                                    height={1000}
                                    width={1200}
                                    alt={
                                        data.picture.data[1].attributes
                                            .alternativeText
                                    }
                                    src={data.picture.data[1].attributes.url}
                                />
                            )}
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 h-64 px-3">
                                {data.picture.data[2] && (
                                    <Image
                                        loader={myImageLoader}
                                        className="h-full w-full object-cover rounded object-cover"
                                        height={1000}
                                        width={1200}
                                        alt={
                                            data.picture.data[2].attributes
                                                .alternativeText
                                        }
                                        src={
                                            data.picture.data[2].attributes.url
                                        }
                                    />
                                )}
                            </div>
                            <div className="w-1/2 h-64 px-3">
                                {data.picture.data[3] && (
                                    <Image
                                        loader={myImageLoader}
                                        className="h-full w-full object-cover rounded object-cover"
                                        height={1000}
                                        width={1200}
                                        alt={
                                            data.picture.data[3].attributes
                                                .alternativeText
                                        }
                                        src={
                                            data.picture.data[3].attributes.url
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
