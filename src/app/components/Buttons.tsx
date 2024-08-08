"use client";
import { setCookie } from "./SetCookies";

export default function Buttons() {
  return (
    <>
      <button
        className="inline-block w-full sm:w-auto py-4 px-6 mb-4 sm:mb-0 sm:mr-4 text-center font-heading font-medium text-base text-white bg-[#b8777e] hover:bg-[#DEC9CA] hover:text-black border border-white opacity-100 rounded-sm transition duration-200"
        onClick={async () => {
          await setCookie("true");
        }}
      >
        Zaakceptuj
      </button>
      <button
        className="inline-block w-full sm:w-auto py-4 px-6 text-center font-heading font-medium text-base text-white bg-black hover:text-[#B8777D] border border-white hover:border-[#B8777D] rounded-sm transition duration-150"
        onClick={async () => {
          await setCookie("false");
        }}
      >
        Odrzuć
      </button>
    </>
  );
}
