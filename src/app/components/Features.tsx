"use client";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import myImageLoader from "app/loader";
import { renderButtonStyle } from "app/utils/render-button-style";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useRef } from "react";

interface FeaturesProps {
  data: {
    title: string;
    description: string;
    feature: Feature[];
  };
}

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

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
  media: Picture;
}

export default function Features({ data }: FeaturesProps) {
  const swiperRef = useRef<SwiperType>();
  return (
    <section className="relative py-10 overflow-hidden intersect:animate-fade animate-once animate-duration-[1500ms] intersect-once">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#B8777D]">
            <span>{data.title}</span>
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            1280: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
          }}
          className="max-w-7xl mx-auto swiper-button-white"
        >
          {data.feature.map((item, index) => (
            <SwiperSlide className="w-full lg:w-1/3 px-4" key={index}>
              <div className="p-6 pb-7 h-full flex flex-col justify-between bg-[#DEC9CA] border rounded-xl transition-all duration-300 hover:bg-[#CFB0AE]">
                <div>
                  <div className="relative flex justify-center items-center mb-5 h-56 overflow-hidden rounded-md">
                    <Image
                      loader={myImageLoader}
                      src={item.media.data.attributes.url}
                      alt={item.media.data.attributes.alternativeText}
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>
                  <h3 className="font-heading mb-3 font-serif text-lg font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="mb-7 font-montserrat text-black">
                    {item.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={item.url}
                    target={item.newTab ? "_blank" : "_self"}
                    className={`${renderButtonStyle(
                      "primary"
                    )} relative inline-flex pr-1 whitespace-nowrap lg:text-xl md:pr-1 max-w-fit mx-auto transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:shadow-[0px_4px_4px_0px_rgba(185,123,128,0.20)] hover:text-[#B97B80] hover:shadow-[#B97B80]`}
                  >
                    <span>{item.text}</span>
                    <span>
                      <BsArrowUpRightCircleFill className="ml-3 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
                    </span>
                  </Link>
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
  );
}
