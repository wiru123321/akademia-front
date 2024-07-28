import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
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

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="mb-10 overflow-hidden mx-auto opacity-0 intersect:animate-fade animate-duration-[1500ms] intersect-once intersect-half">
      <div
        style={{
          backgroundImage: `url(${imgUrl || ""})`,
        }}
        className="relative overflow-hidden bg-cover bg-no-repeat bg-center min-h-[500px] lg:min-h-[600px] xl:min-h-[800px] h-[100vh]"
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
          <div className="container flex flex-col justify-center px-6 mx-auto items-center lg:items-start lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center items-center px-8 md:px-6 text-center lg:items-start min-h-[500px] lg:min-h-[600px] xl:min-h-[800px] h-[100vh] rounded-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl lg:text-left">
              {data.title && (
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#B97B80] leading-none lg:text-5xl xl:text-7xl mb-8">
                  {data.title}
                </h1>
              )}

              <p className="tmt-6 font-serif font-semibold mb-8 text-md sm:text-lg md:text-2xl sm:mb-12 text-white">
                {data.description ? data.description : " "}
              </p>

              <div className="flex flex-col space-y-4 items-center lg:items-start sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  href={data.buttons[0].url}
                  target={data.buttons[0].newTab ? "_blank" : "_self"}
                  className={`${renderButtonStyle(
                    "primary"
                  )} relative inline-flex pr-1 whitespace-nowrap lg:text-xl md:pr-1 max-w-fit mx-auto transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:shadow-[0px_4px_4px_0px_rgba(185,123,128,0.20)] hover:text-[#B97B80] hover:shadow-[#B97B80]`}
                >
                  {data.buttons[0].text}
                  <BsArrowUpRightCircleFill className="ml-3 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
