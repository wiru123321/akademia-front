import React from "react";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { MdOutlineAccessTime, MdOutlineGroups } from "react-icons/md";

interface Item {
  title: string;
  subtitle: string;
  icon: string;
}

interface LessonDividerProps {
  data: {
    id: string;
    items: Item[];
  };
}

function RenderIcon({ icon }: { icon: string | undefined }) {
  switch (icon) {
    case "TIME":
      return <MdOutlineAccessTime size={30} color="white" />;
    case "GROUP":
      return <MdOutlineGroups size={30} color="white" />;
    case "MONEY":
      return <FaRegMoneyBill1 size={30} color="white" />;
    default:
      return null;
  }
}

export default function LessonDivider({ data }: LessonDividerProps) {
  return (
    <section className="pt-8 pb-2 bg-[#CFB0AE] opacity-0 opacity-0 intersect:animate-fade animate-duration-[1500ms] intersect-once">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-3 justify-center">
          {data.items &&
            data.items.map((item, index) => (
              <div key={index} className="w-full md:w-1/4 lg:w-1/5 px-3 mb-6">
                <div className="p-6 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                  {item.icon && (
                    <div className="flex justify-center">
                      <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 mb-3 md:mb-6 bg-[#B97B80] rounded-xl">
                        {RenderIcon({
                          icon: item.icon,
                        })}
                      </span>
                    </div>
                  )}
                  {item.title && (
                    <p className="mb-2 text-xl text-black font-serif">
                      {item.title}
                    </p>
                  )}
                  {item.subtitle && (
                    <span className="text-2xl font-bold font-montserrat text-black">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
