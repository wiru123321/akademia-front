import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { twMerge } from "tailwind-merge";

interface RichTextProps {
    data: {
        body: string;
        style?: string;
    };
}

export default function RichText({ data }: RichTextProps) {
    return (
        <section
            className={twMerge(`rich-text ${data.style ? data.style : ""}`)}
        >
            <Markdown
                children={data.body}
                remarkPlugins={[remarkGfm]}
                className={data?.style}
            />
        </section>
    );
}
