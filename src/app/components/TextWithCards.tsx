"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegClock } from "react-icons/fa";
import { Swiper as SwiperType } from "swiper";
import { BsPeople } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";

interface Card {
  description: string;
  icon: string;
}

interface Card {
  card: Card[];
  title: string;
  description: string;
}

interface TextWithCardsProps {
  data: {
    id: string;
    title: string;
    description: string;
    items: Card[];
  };
}

function RenderIcon({ icon }: { icon: string | undefined }) {
  switch (icon) {
    case "CLOCK":
      return <FaRegClock size={30} color="white" />;
    case "PEOPLE":
      return <BsPeople size={30} color="white" />;
    case "SOCIAL":
      return <TbWorld size={30} color="white" />;
    default:
      return null;
  }
}

export default function TextWithCards({ data }: TextWithCardsProps) {
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <section className="py-8 bg-[#CFB0AE] opacity-0 intersect:animate-fade animate-duration-[1500ms] intersect-once">
        <div className="container px-4 mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 8000,
              disableOnInteraction: true,
            }}
            className="mx-auto swiper-button-white"
          >
            {data.items.length > 0 &&
              data.items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-wrap items-center justify-between -mx-4">
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                      <div className="mt-10 lg:mt-0">
                        <h2 className="mb-5 text-4xl font-serif font-bold text-black sm:text-[40px]/[48px]">
                          {item.title}
                        </h2>
                        <p className="mb-5 font-montserrat text-base text-black">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-full px-4 lg:w-6/12">
                      <div className="flex flex-col sm:flex-row items-center mt-6 -mx-3 sm:-mx-4">
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                          <div className="p-6 md:p-8 h-full mb-6 group bg-white rounded-lg transition-all duration-200 shadow-xl">
                            <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 mb-4 md:mb-6 bg-[#B97B80] rounded-xl">
                              {RenderIcon({
                                icon: item.card[0].icon,
                              })}
                            </span>
                            <div className="h-[2px] bg-black w-1/3 group-hover:w-full transition-all duration-500" />
                            <div className="pt-4 md:pt-6">
                              <p className="font-montserrat text-lg text-[#565A5B]">
                                {item.card[0].description}
                              </p>
                            </div>
                          </div>
                          <div className="p-6 md:p-8 h-full mt-6 group bg-white rounded-lg transition-all duration-200 shadow-xl">
                            <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 mb-4 md:mb-6 bg-[#B97B80] rounded-xl">
                              {RenderIcon({
                                icon: item.card[1].icon,
                              })}
                            </span>
                            <div className="h-[2px] bg-black w-1/3 group-hover:w-full transition-all duration-500" />
                            <div className="pt-4 md:pt-6">
                              <p className="font-montserrat text-lg text-[#565A5B]">
                                {item.card[1].description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                          <div className="relative z-10 my-4">
                            <div className="p-6 md:p-8 h-full group bg-white rounded-lg transition-all duration-200 shadow-xl">
                              <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 mb-4 md:mb-6 bg-[#B97B80] rounded-xl">
                                {RenderIcon({
                                  icon: item.card[2].icon,
                                })}
                              </span>
                              <div className="h-[2px] bg-black w-1/3 group-hover:w-full transition-all duration-500" />
                              <div className="pt-4 md:pt-6">
                                <p className="font-montserrat text-lg text-[#565A5B]">
                                  {item.card[2].description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            <div className="flex flex-wrap gap-2 justify-start p-4">
              <button
                className="p-2 rounded-full border border-gray-200 shadow hover:bg-gray-50 transition duration-200"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.125 16.25L6.875 10L13.125 3.75"
                    stroke="#282828"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                className="p-2 rounded-full border border-gray-200 shadow hover:bg-gray-50 transition duration-200"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.875 3.75L13.125 10L6.875 16.25"
                    stroke="#282828"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
