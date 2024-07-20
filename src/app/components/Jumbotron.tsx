import React from "react";
import { getStrapiMedia } from "../utils/api-helpers";
import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";
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

interface JumbotronProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    button: Button;
  };
}

export default function Jumbotron({ data }: JumbotronProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
  return (
    <div className="mx-auto my-16 md:my-28 flex items-center">
      <section
        className="w-full bg-cover bg-center py-32"
        style={{
          backgroundImage: `url(${imgUrl || ""})`,
        }}
      >
        <div className="container p-4 mx-auto text-center backdrop-blur-sm md:max-w-[600px]">
          <h2 className="text-4xl font-serif font-bold text-black mb-6">
            {data.title}
          </h2>
          <p className="text-base md:text-xl font-montserrat text-black mb-12">
            {data.description}
          </p>
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
      </section>
    </div>
  );
}
