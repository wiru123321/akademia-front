type FAQItemProps = {
    children: React.ReactNode;
    title: string;
    id: string;
    active?: boolean;
    setActive: (index: string | undefined) => void;
    value: string;
};

export default function FAQItem({
    children,
    title,
    id,
    active = false,
    setActive,
    value,
}: FAQItemProps) {
    return (
        <div className="py-2">
            <h2>
                <button
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    onClick={(e) => {
                        e.preventDefault();
                        setActive(active ? undefined : value);
                    }}
                    aria-expanded={active}
                    aria-controls={`accordion-text-${id}`}
                >
                    <span
                        className={`font-montserrat text-sm md:text-base font-bold transition-all duration-300 ease-in-out ${
                            active ? "text-[#B97B80]" : "text-black"
                        }`}
                    >
                        {title}
                    </span>
                    <svg
                        className="fill-black shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`ttransform origin-center transition duration-200 ease-out ${
                                active && "!rotate-180"
                            }`}
                        />
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                active && "!rotate-180"
                            }`}
                        />
                    </svg>
                </button>
            </h2>
            <div
                id={`accordion-text-${id}`}
                role="region"
                aria-labelledby={`accordion-title-${id}`}
                className={`grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out ${
                    active
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <p className="pb-3 font-montserrat">{children}</p>
                </div>
            </div>
        </div>
    );
}
