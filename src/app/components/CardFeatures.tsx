import {
  IoPersonOutline,
  IoTimeOutline,
  IoCheckmarkDoneSharp,
  IoPricetagOutline,
} from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { GiBookmarklet } from "react-icons/gi";

interface CardFeaturesProps {
  data: {
    title: string;
    description: string;
    cardFeature: CardFeature[];
  };
}

interface CardFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

function RenderIcon({ icon }: { icon: string | undefined }) {
  switch (icon) {
    case "PERSON":
      return <IoPersonOutline size={30} color="white" />;
    case "CHECK":
      return <IoCheckmarkDoneSharp size={30} color="white" />;
    case "FILE":
      return <FaRegFileAlt size={30} color="white" />;
    case "LAPTOP":
      return <AiOutlineLaptop size={30} color="white" />;
    case "GROUP":
      return <GrGroup size={30} color="white" />;
    case "TIME":
      return <IoTimeOutline size={30} color="white" />;
    case "PRICE":
      return <IoPricetagOutline size={30} color="white" />;
    case "BOOK":
      return <GiBookmarklet size={30} color="white" />;
    default:
      return null;
  }
}

export default function CardFeatures({ data }: CardFeaturesProps) {
  return (
    <section className="relative py-10 overflow-hidden opacity-0 intersect:animate-fade animate-duration-[1500ms] intersect-once">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h2 className="font-serif text-4xl mb-4 font-bold text-[#B8777D]">
            <span>{data.title}</span>
          </h2>
          {data.description && (
            <p className="text-lg text-black text-center font-medium font-montserrat leading-normal md:max-w-lg mx-auto">
              {data.description}
            </p>
          )}
        </div>
      </div>
      <section className="py-4">
        <div className="container lg:max-w-[1024px] mx-auto px-4">
          <div className="flex flex-wrap -mx-6">
            {data.cardFeature.map((feature, index) => (
              <div className="w-full md:w-1/2 px-6 mb-6" key={index}>
                <div className="p-6 md:p-8 h-full bg-white rounded-lg transition-all duration-200 hover:bg-[#DEC9CA] shadow-xl">
                  <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-[#B97B80] rounded-xl">
                    {RenderIcon({ icon: feature.icon })}
                  </span>
                  <div>
                    <h3 className="mb-4 text-2xl font-serif font-bold font-heading text-black">
                      {feature.title}
                    </h3>
                    <p className="font-montserrat text-lg text-black">
                      {feature.description}
                    </p>
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
