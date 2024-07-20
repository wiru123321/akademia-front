import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";

interface TrainingProps {
  data: {
    title: string;
    description: string;
    item: Training[];
    section: string;
  };
}

interface Training {
  id: string;
  title: string;
  description: string;
}

function RenderIcon({ icon }: { icon: number }) {
  switch (icon) {
    case 0:
      return <RiNumber1 size={30} color="white" />;
    case 1:
      return <RiNumber2 size={30} color="white" />;
    case 2:
      return <RiNumber3 size={30} color="white" />;
    case 3:
      return <RiNumber4 size={30} color="white" />;
    case 4:
      return <RiNumber5 size={30} color="white" />;
    case 5:
      return <RiNumber6 size={30} color="white" />;
    default:
      return null;
  }
}

export default function Training({ data }: TrainingProps) {
  return (
    <section className="py-2 -mt-16 pt-28" id={data.section}>
      <div className="container py-10 mx-auto">
        <div className="max-w-3xl mx-auto mb-8 text-center px-4">
          <h2 className="text-4xl font-serif font-bold mb-6 text-[#B8777D]">
            {data.title && data.title}
          </h2>
          <p className="mb-5 font-montserrat text-base text-black">
            {data.description && data.description}
          </p>
        </div>
      </div>
      <section className="py-4">
        <div className="container lg:max-w-[1224px] mx-auto">
          <div className="flex flex-wrap">
            {data.item.length > 0 &&
              data.item.map((item, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-6" key={index}>
                  <div className="p-6 md:p-8 h-full bg-white rounded-lg transition-all duration-200 hover:bg-[#DEC9CA] shadow-xl">
                    <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 mb-8 md:mb-12 bg-[#B97B80] rounded-xl">
                      {RenderIcon({ icon: index })}
                    </span>
                    <div>
                      <h3 className="mb-4 text-2xl font-serif font-bold font-heading text-black">
                        {item.title && item.title}
                      </h3>
                      <p className="font-montserrat text-lg text-[#565A5B]">
                        {item.description && item.description}
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
