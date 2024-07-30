import React from "react";
import RichText from "./RichText";

interface LessonContentProps {
  data: {
    id: string;
    section: string;
    pretitle: string;
    title: string;
    leftContent: string;
    rightContent: string;
  };
}

export default function LessonContent({ data }: LessonContentProps) {
  return (
    <section
      className="relative py-12 -mt-16 pt-28 opacity-0 intersect:animate-fade animate-duration-[1500ms] intersect-once"
      id={data.section}
    >
      <div className="relative container px-4 mx-auto">
        <div className="mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-md md:max-w-lg mx-auto lg:mx-0">
                {data.pretitle && (
                  <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-white bg-[#B97B80] rounded-full">
                    {data.pretitle}
                  </span>
                )}
                {data.title && (
                  <h2 className="font-serif text-4xl font-bold text-[#B8777D] mb-12">
                    {data.title}
                  </h2>
                )}
                {data.leftContent && (
                  <RichText
                    data={{
                      body: data.leftContent,
                      style: "font-medium font-montserrat text-lg text-black",
                    }}
                  />
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md md:max-w-lg mx-auto lg:mx-0 lg:mr-0">
                {data.rightContent && (
                  <RichText
                    data={{
                      body: data.rightContent,
                      style: "font-medium font-montserrat text-lg text-black",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
