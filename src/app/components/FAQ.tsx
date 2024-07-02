"use client";
import FAQItem from "./FAQItem";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface Items {
    title: string;
    content: string;
    active: boolean;
}

interface FAQProps {
    title: string;
    lessonTitle: string;
    trainingTitle: string;
    lessonItems: Items[];
    trainingItems: Items[];
}

export default function FAQ({
    title,
    lessonItems,
    lessonTitle,
    trainingItems,
    trainingTitle,
}: FAQProps) {
    const [swiper, setSwiper] = useState<any>();
    const [activeTab, setActiveTab] = useState("faqsl-0");
    const [activeElement, setActiveElement] = useState<string | undefined>(
        undefined
    );

    return (
        <section className="mx-auto pb-8 bg-[#CFB0AE] overflow-hidden">
            <div className="container mx-auto py-16 space-y-2 text-center">
                <h1 className="text-4xl font-serif font-bold text-white leading-none text-center">
                    {title}
                </h1>
            </div>
            <div className="container mx-auto pb-12 px-8 xl:px-36">
                <div className="flex justify-center gap-8 md:gap-12">
                    <button
                        className={`p-4 rounded-xl font-bold font-montserrat transition-all duration-300 ease-in-out ${
                            activeTab === "0"
                                ? "bg-[#B97B80] text-white"
                                : "bg-white text-black"
                        } shadow-md`}
                        onClick={() => {
                            setActiveElement(undefined);
                            setTimeout(() => {
                                swiper.slideTo(0, 500);
                                setActiveTab("0");
                            }, 300);
                        }}
                    >
                        {lessonTitle}
                    </button>
                    <button
                        className={` p-4 rounded-xl font-bold font-montserrat transition-all duration-300 ease-in-out ${
                            activeTab === "1"
                                ? "bg-[#B97B80] text-white"
                                : "bg-white text-black"
                        } shadow-md`}
                        onClick={() => {
                            setActiveElement(undefined);
                            setTimeout(() => {
                                swiper.slideTo(1, 500);
                                setActiveTab("1");
                            }, 300);
                        }}
                    >
                        {trainingTitle}
                    </button>
                </div>
                <Swiper
                    onSwiper={(swiper) => setSwiper(swiper)}
                    className="rounded-[48px] mt-8"
                    draggable={false}
                >
                    <SwiperSlide>
                        <div className="bg-white py-8 px-8 md:px-24 md:py-16 h-full">
                            <div className="divide-y divide-slate-200">
                                {lessonItems.map((faq, index) => (
                                    <FAQItem
                                        key={`faqsl-${index}`}
                                        value={`faqsl-${index}`}
                                        title={faq.title}
                                        id={`faqsl-${index}`}
                                        active={
                                            activeElement === `faqsl-${index}`
                                        }
                                        setActive={setActiveElement}
                                    >
                                        {faq.content}
                                    </FAQItem>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white py-8 px-8 md:px-24 md:py-16 h-full">
                            <div className="divide-y divide-slate-200">
                                {trainingItems.map((faq, index) => (
                                    <FAQItem
                                        key={`faqst-${index}`}
                                        title={faq.title}
                                        value={`faqst-${index}`}
                                        id={`faqst-${index}`}
                                        active={
                                            activeElement === `faqst-${index}`
                                        }
                                        setActive={setActiveElement}
                                    >
                                        {faq.content}
                                    </FAQItem>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
