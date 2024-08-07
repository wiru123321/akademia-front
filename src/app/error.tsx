"use client";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { renderButtonStyle } from "./utils/render-button-style";

export default function RootErrorBoundary() {
  return (
    <section className="overflow-hidden px-10 pb-10">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center gap-6 mb-6">
          <div
            className="hidden xl:block w-80 h-80 rounded-3xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(248, 248, 248, 0.00) 0%, #B97B80 100%)",
            }}
          ></div>
          <div
            className="hidden xl:block w-80 h-80 rounded-3xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(248, 248, 248, 0.00) 0%, #B97B80 100%)",
            }}
          ></div>
          <div
            className="hidden sm:block w-80 h-80 rounded-3xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(248, 248, 248, 0.00) 0%, #B97B80 100%)",
            }}
          ></div>
          <div
            className="w-80 h-80 rounded-3xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(248, 248, 248, 0.00) 0%, #B97B80 100%)",
            }}
          ></div>
        </div>
        <div className="flex justify-center gap-6">
          <div className="w-80 h-80 rounded-3xl bg-[#B97B80] bg-opacity-50"></div>
          <div className="hidden xl:block w-80 h-80 rounded-3xl border border-[#B97B80]"></div>
          <div className="hidden xl:block w-80 h-80 rounded-3xl border border-[#B97B80]"></div>
          <div className="hidden sm:block w-80 h-80 rounded-3xl bg-[#B97B80] bg-opacity-50"></div>
        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-full">
          <h1 className="text-center text-4xl lg:text-5xl font-bold font-heading mb-6 text-[#B8777D]">
            Na stronie wystąpił błąd
          </h1>
          <p className="text-center text-lg mb-10 max-w-lg mx-auto text-black">
            Wygląda na to, że na stronie pojawił się błąd. Przejdź do strony
            głównej lub spróbuj wejść na stronę za jakiś czas.
          </p>
          <div className="flex justify-center">
            <Link
              href="/"
              target="_self"
              className={`${renderButtonStyle(
                "primary"
              )} relative inline-flex pr-1 whitespace-nowrap lg:text-xl md:pr-1 max-w-fit mx-auto transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:shadow-[0px_4px_4px_0px_rgba(185,123,128,0.20)] hover:text-[#B97B80] hover:shadow-[#B97B80]`}
            >
              Przejdź do strony głównej
              <BsArrowUpRightCircleFill className="ml-3 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
