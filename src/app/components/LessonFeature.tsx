import React from "react";
import {
    RiNumber1,
    RiNumber2,
    RiNumber3,
    RiNumber4,
    RiNumber5,
    RiNumber6,
} from "react-icons/ri";

interface LessonFeatureProps {
    data: {
        id: string;
        pretitle: string;
        title: string;
        subtitle: string;
        item: Item[];
    };
}

interface Item {
    id: string;
    title: string;
    description: string;
}

function RenderIcon({ icon }: { icon: number }) {
    switch (icon) {
        case 0:
            return <RiNumber1 size={30} color="white" />;
        case 1:
            return <RiNumber2 size={30} color="white" />;
        case 2:
            return <RiNumber3 size={30} color="white" />;
        case 3:
            return <RiNumber4 size={30} color="white" />;
        case 4:
            return <RiNumber5 size={30} color="white" />;
        case 5:
            return <RiNumber6 size={30} color="white" />;
        default:
            return null;
    }
}

export default function LessonFeature({ data }: LessonFeatureProps) {
    return (
        <section className="py-8 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="mb-14 max-w-xl">
                    {data.title && (
                        <h2 className="font-serif text-4xl mb-4 font-bold text-[#B8777D]">
                            {data.title}
                        </h2>
                    )}
                </div>
                <div className="flex flex-wrap -m-8">
                    {data.item.map((item, index) => (
                        <div
                            className="w-full md:w-1/2 lg:w-1/3 p-8"
                            key={index}
                        >
                            <div className="md:max-w-sm">
                                <div className="flex flex-wrap -m-1.5">
                                    <div className="w-auto p-1.5">
                                        <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-[#B97B80] rounded-xl">
                                            {RenderIcon({ icon: index })}
                                        </span>
                                    </div>
                                    <div className="flex-1 p-1.5">
                                        {item.title && (
                                            <h3 className="mb-2 text-xl font-serif text-black">
                                                {item.title}
                                            </h3>
                                        )}
                                        {item.description && (
                                            <p className="font-montserrat text-black">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
