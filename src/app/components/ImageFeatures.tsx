import Link from "next/link";
import Image from "next/image";
import myImageLoader from "app/loader";
import { renderButtonStyle } from "app/utils/render-button-style";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

interface ImageFeaturesProps {
  data: {
    title: string;
    description: string;
    imageFeature: ImageFeature[];
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

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface ImageFeature {
  id: string;
  title: string;
  description: string;
  picture: Picture;
  button: Button;
}

export default function ImageFeatures({ data }: ImageFeaturesProps) {
  return (
    <section className="relative py-10 overflow-hidden bg-[#CFB0AE] opacity-0 intersect:animate-fade animate-duration-[1500ms] intersect-once intersect-half">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h2 className="font-serif text-4xl mb-4 font-bold text-black">
            <span>{data.title}</span>
          </h2>
          <p className="text-lg text-black text-center font-medium font-montserrat leading-normal md:max-w-lg mx-auto">
            {data.description}
          </p>
        </div>
      </div>
      <section className="py-4">
        <div className="container lg:max-w-[1024px] mx-auto px-4">
          <div className="flex flex-wrap -mx-6">
            {data.imageFeature.map((feature, index) => (
              <div className="w-full md:w-1/2 px-6 mb-6" key={index}>
                <div className="h-full group flex flex-col bg-white rounded-3xl transition-all duration-300 hover:bg-[#DEC9CA] shadow-xl cursor-pointer">
                  <div className="rounded-t-3xl overflow-hidden">
                    <Image
                      loader={myImageLoader}
                      src={feature.picture.data.attributes.url}
                      alt={
                        feature.picture.data.attributes.alternativeText || ""
                      }
                      width={400}
                      height={400}
                      className="w-full h-52 rounded-t-3xl animate-fade-in scale-100 transform object-cover opacity-100 transition duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex grow flex-col justify-between">
                    <div>
                      <div className="h-[72px] mb-6">
                        <h3 className="mb-4 text-3xl text-[#B8777D] font-serif font-bold font-heading transition-all duration-300 group-hover:text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <div className="h-[2px] mb-6 bg-[#DEC9CA] w-full transition-all duration-300 group-hover:bg-white" />
                      <p className="font-montserrat text-lg text-[#565A5B}">
                        {feature.description}
                      </p>
                    </div>
                    {feature.button && (
                      <div>
                        <Link
                          href={feature.button.url}
                          target={feature.button.newTab ? "_blank" : "_self"}
                          className={`${renderButtonStyle(
                            "primary"
                          )} relative inline-flex pr-1 mt-10 whitespace-nowrap lg:text-xl md:pr-1 max-w-fit mx-auto transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear group-hover:bg-white group-hover:shadow-[0px_4px_4px_0px_rgba(185,123,128,0.20)] group-hover:text-[#B97B80] group-hover:shadow-[#B97B80]`}
                        >
                          <span>{feature.button.text}</span>
                          <span>
                            <BsArrowUpRightCircleFill className="ml-3 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
