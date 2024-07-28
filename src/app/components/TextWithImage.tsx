import React from "react";
import Image from "next/image";
import myImageLoader from "app/loader";
import Link from "next/link";
import { renderButtonStyle } from "app/utils/render-button-style";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

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

interface TextWithImageProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    button: Button;
    isInverted: boolean;
  };
}

export default function TextWithImage({ data }: TextWithImageProps) {
  return (
    <section className="container px-4 mx-auto intersect:animate-fade animate-once animate-duration-[1500ms] intersect-half">
      <div
        className={`flex items-center flex-wrap mb-10 mt-14 ${
          data.isInverted ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-full lg:w-1/2 p-0 md:p-8">
          <div className="flex items-center -mx-3 sm:-mx-4">
            <div className="w-full px-3 sm:px-4">
              {data.picture && (
                <Image
                  loader={myImageLoader}
                  src={data.picture.data.attributes.url}
                  width={518}
                  height={537}
                  alt={data.picture.data.attributes.alternativeText}
                  className="w-full"
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-0 md:p-8 pt-4">
          <div className="lg:mt-0">
            <h2 className="mb-5 text-4xl font-serif font-bold text-[#B8777D] sm:text-[40px]/[48px]">
              {data.title}
            </h2>
            <p className="mb-5 font-montserrat text-lg font-medium text-[#000033]">
              {data.description}
            </p>
            {data.button && (
              <Link
                href={data.button.url}
                target={data.button.newTab ? "_blank" : "_self"}
                className={`${renderButtonStyle(
                  "primary"
                )} relative inline-flex pr-1 mt-10 whitespace-nowrap lg:text-xl md:pr-1 max-w-fit mx-auto transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:shadow-[0px_4px_4px_0px_rgba(185,123,128,0.20)] hover:text-[#B97B80] hover:shadow-[#B97B80]`}
              >
                <span>{data.button.text}</span>
                <span>
                  <BsArrowUpRightCircleFill className="ml-3 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
