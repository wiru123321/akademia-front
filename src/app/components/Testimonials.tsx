import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import moment from "moment";

interface Testimonial {
  text: string;
  authorName: string;
  date: Date;
}

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface TestimonialsProps {
  data: {
    id: string;
    title: string;
    description: string;
    testimonials: Testimonial[];
    button: Button;
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="mx-auto pb-8 bg-[#CFB0AE] overflow-hidden intersect:animate-fade animate-once animate-duration-[1500ms] intersect-half">
      <div className="container mx-auto py-16 space-y-2 text-center">
        <h2 className="text-4xl font-serif font-bold text-black leading-none text-center">
          {data.title}
        </h2>
      </div>
      <div className="container relative mx-auto pb-12 px-12 xl:px-24">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-[#CFB0AE] via-[#cfb0aec4] via-[#cfb0ae68]" />
        <div className="absolute bottom-[30px] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <Link
            href={data.button?.url}
            target={data.button?.newTab ? "_blank" : "_self"}
            className={`${renderButtonStyle(
              "primary"
            )} relative inline-flex pr-1 whitespace-nowrap lg:text-xl md:pr-1 max-w-fit mx-auto transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:shadow-[0px_4px_4px_0px_rgba(185,123,128,0.20)] hover:text-[#B97B80] hover:shadow-[#B97B80]`}
          >
            <span>{data.button?.text}</span>
            <span>
              <BsArrowUpRightCircleFill className="ml-3 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-5 grid-rows-4 md:grid-rows-2 gap-7">
          <div className="col-span-5 md:col-span-3 w-full">
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white h-full shadow-gray-600/10">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">
                    {data.testimonials[0].authorName}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {moment(data.testimonials[0].date)
                      .utc()
                      .format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
              <p className="mt-4 line-clamp-4 text-black">
                {data.testimonials[0].text}
              </p>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 col-start-1 row-start-2 w-full">
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl h-full bg-white shadow-2xl shadow-gray-600/10">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    {data.testimonials[1].authorName}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {moment(data.testimonials[1].date)
                      .utc()
                      .format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
              <p className="mt-8 line-clamp-4 text-black">
                {data.testimonials[1].text}
              </p>
            </div>
          </div>
          <div className="col-span-5 md:col-span-3 col-start-1 md:col-start-3 row-start-3 md:row-start-2 w-full">
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl h-full bg-white shadow-2xl shadow-gray-600/10">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    {data.testimonials[2].authorName}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {moment(data.testimonials[2].date)
                      .utc()
                      .format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
              <p className="mt-8 line-clamp-4 text-black">
                {data.testimonials[2].text}
              </p>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 col-start-1 md:col-start-4 row-start-1 md:row-start-1 w-full">
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl h-full bg-white shadow-2xl shadow-gray-600/10">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    {data.testimonials[3].authorName}
                  </h6>
                  <p className="text-sm text-gray-500">
                    {moment(data.testimonials[3].date)
                      .utc()
                      .format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
              <p className="mt-8 line-clamp-4 text-black">
                {data.testimonials[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
