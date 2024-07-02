export function renderButtonStyle(type: string) {
    switch (type) {
        case "primary":
            return "px-4 py-2 text-sm text-white font-serif bg-[#B8777D] rounded-3xl md:text-base md:px-6";
        case "secondary":
            return "px-8 py-3 text-lg font-semibold border rounded";
        default:
            return "px-8 py-3 text-lg font-semibold rounded";
    }
}
