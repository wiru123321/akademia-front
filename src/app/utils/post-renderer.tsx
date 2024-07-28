import dynamic from "next/dynamic";

const RichText = dynamic(() => import("app/components/RichText"), {
  loading: () => <p>Loading...</p>,
});
const ImageSlider = dynamic(() => import("app/components/ImageSlider"), {
  loading: () => <p>Loading...</p>,
});
const Quote = dynamic(() => import("app/components/Quote"), {
  loading: () => <p>Loading...</p>,
});
const Media = dynamic(() => import("app/components/Media"), {
  loading: () => <p>Loading...</p>,
});
const VideoEmbed = dynamic(() => import("app/components/VideoEmbed"), {
  loading: () => <p>Loading...</p>,
});

export function postRenderer(section: any, index: number) {
  switch (section.__component) {
    case "shared.rich-text":
      return <RichText key={index} data={section} />;
    case "shared.slider":
      return <ImageSlider key={index} data={section} />;
    case "shared.quote":
      return <Quote key={index} data={section} />;
    case "shared.media":
      return <Media key={index} data={section} />;
    case "shared.video-embed":
      return <VideoEmbed key={index} data={section} />;
    default:
      return null;
  }
}
