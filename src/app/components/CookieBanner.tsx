"use client";
import Link from "next/link";
import { useState } from "react";

export default function CookieBanner() {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <div className="fixed z-40 bottom-0 w-full p-6 intersect:animate-fade animate-once animate-duration-[1500ms] intersect-once">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto px-8 py-6 w-full bg-[#000000dc] rounded-md">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full md:w-1/2 xl:w-3/5 px-4 mr-auto mb-8 md:mb-0">
                <p className="max-w-lg font-heading leading-6 text-white">
                  Przetwarzamy Twoje dane zgodnie z{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="font-medium underline-offset-4 text-[#DEC9CA] underline hover:no-underline"
                  >
                    polityką cookies.
                  </Link>
                </p>
              </div>
              <div className="w-full md:w-1/2 xl:w-auto px-4">
                <div className="sm:flex items-center justify-end">
                  <Link
                    className="inline-block w-full sm:w-auto py-4 px-6 mb-4 sm:mb-0 sm:mr-4 text-center font-heading font-medium text-base text-white bg-[#b8777e] hover:bg-[#DEC9CA] hover:text-black border border-white opacity-100 rounded-sm transition duration-200"
                    href="/"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Zaakceptuj
                  </Link>
                  <Link
                    className="inline-block w-full sm:w-auto py-4 px-6 text-center font-heading font-medium text-base text-white bg-black hover:text-[#B8777D] border border-white hover:border-[#B8777D] rounded-sm transition duration-150"
                    href="/"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Odrzuć
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
