import dynamic from "next/dynamic";

const Hero = dynamic(() => import("app/components/Hero"), {
    loading: () => <p>Loading...</p>,
});
const Features = dynamic(() => import("app/components/Features"), {
    loading: () => <p>Loading...</p>,
});
const Testimonials = dynamic(() => import("app/components/Testimonials"), {
    loading: () => <p>Loading...</p>,
});
const Pricing = dynamic(() => import("app/components/Pricing"), {
    loading: () => <p>Loading...</p>,
});
const TextWithPictures = dynamic(
    () => import("app/components/TextWithPictures"),
    {
        loading: () => <p>Loading...</p>,
    }
);
const Jumbotron = dynamic(() => import("app/components/Jumbotron"), {
    loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("app/components/BlogSection"), {
    loading: () => <p>Loading...</p>,
});
const TextWithImage = dynamic(() => import("app/components/TextWithImage"), {
    loading: () => <p>Loading...</p>,
});
const CardFeatures = dynamic(() => import("app/components/CardFeatures"), {
    loading: () => <p>Loading...</p>,
});
const TextWithCards = dynamic(() => import("app/components/TextWithCards"), {
    loading: () => <p>Loading...</p>,
});
const ImageFeatures = dynamic(() => import("app/components/ImageFeatures"), {
    loading: () => <p>Loading...</p>,
});
const LessonContent = dynamic(() => import("app/components/LessonContent"), {
    loading: () => <p>Loading...</p>,
});
const LessonFeature = dynamic(() => import("app/components/LessonFeature"), {
    loading: () => <p>Loading...</p>,
});
const LessonDivider = dynamic(() => import("app/components/LessonDivider"), {
    loading: () => <p>Loading...</p>,
});
const Training = dynamic(() => import("app/components/Training"), {
    loading: () => <p>Loading...</p>,
});
const SmallGalery = dynamic(() => import("app/components/SmallGalery"), {
    loading: () => <p>Loading...</p>,
});

export function sectionRenderer(section: any, index: number) {
    console.log(section);
    switch (section.__component) {
        case "sections.hero":
            return <Hero key={index} data={section} />;
        case "sections.features":
            return <Features key={index} data={section} />;
        case "sections.testimonials-group":
            return <Testimonials key={index} data={section} />;
        case "sections.pricing":
            return <Pricing key={index} data={section} />;
        case "sections.text-with-pictures":
            return <TextWithPictures key={index} data={section} />;
        case "sections.jumbotron":
            return <Jumbotron key={index} data={section} />;
        case "sections.text-with-image":
            return <TextWithImage key={index} data={section} />;
        case "sections.small-galery":
            return <SmallGalery key={index} data={section} />;
        case "sections.text-with-cards":
            return <TextWithCards key={index} data={section} />;
        case "sections.card-features":
            return <CardFeatures key={index} data={section} />;
        case "sections.image-features":
            return <ImageFeatures key={index} data={section} />;
        case "sections.lesson-content":
            return <LessonContent key={index} data={section} />;
        case "sections.lesson-feature":
            return <LessonFeature key={index} data={section} />;
        case "sections.lesson-divider":
            return <LessonDivider key={index} data={section} />;
        case "sections.training":
            return <Training key={index} data={section} />;
        case "sections.blog-section":
            return <BlogSection key={index} data={section} />;
        default:
            return null;
    }
}
