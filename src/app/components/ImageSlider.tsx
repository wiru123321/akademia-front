"use client";
import { Fade } from "react-slideshow-image";
import Image from "next/image";
import myImageLoader from "app/loader";

interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}

interface SlidShowProps {
  files: {
    data: Image[];
  };
}

export default function Slideshow({ data }: { data: SlidShowProps }) {
  return (
    <div className="slide-container intersect:animate-fade animate-once animate-duration-[1500ms] intersect-half">
      <Fade>
        {data.files.data.map((fadeImage: Image, index) => {
          const imageUrl = fadeImage.attributes.url;
          return (
            <div key={index}>
              {imageUrl && (
                <Image
                  loader={myImageLoader}
                  className="w-full h-96 object-cover rounded-lg"
                  height={400}
                  width={600}
                  alt="alt text"
                  src={imageUrl}
                />
              )}
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
