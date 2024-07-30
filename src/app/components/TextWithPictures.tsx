"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
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

interface TextWithPictureProps {
  data: {
    id: string;
    title: string;
    description: string;
    pictures: { data: Picture[] };
  };
}

export default function TextWithPictures({ data }: TextWithPictureProps) {
  return (
    <>
      <section className="container py-10 px-4 md:px-10 mx-auto m:py-12 lg:py-24 opacity-0 intersect:animate-fade animate-duration-[1500ms] intersect-once">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
            <div className="mt-10 lg:mt-0">
              <h2 className="mb-5 text-4xl font-serif font-bold text-[#B8777D] sm:text-[40px]/[48px]">
                {data.title}
              </h2>
              <p className="mb-5 font-montserrat text-base text-[#000033]">
                {data.description}
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="w-[270px] h-[320px]"
            >
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[0].attributes.url}
                  alt={data.pictures.data[0].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[1].attributes.url}
                  alt={data.pictures.data[1].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[2].attributes.url}
                  alt={data.pictures.data[2].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[0].attributes.url}
                  alt={data.pictures.data[0].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[1].attributes.url}
                  alt={data.pictures.data[1].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[2].attributes.url}
                  alt={data.pictures.data[2].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[0].attributes.url}
                  alt={data.pictures.data[0].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[1].attributes.url}
                  alt={data.pictures.data[1].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide className="flex  items-center justify-center rounded-2xl">
                <Image
                  loader={myImageLoader}
                  src={data.pictures.data[2].attributes.url}
                  alt={data.pictures.data[2].attributes.alternativeText}
                  width={290}
                  height={320}
                  className="h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
