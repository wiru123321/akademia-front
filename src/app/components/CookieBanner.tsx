import Link from "next/link";
import { cookies } from "next/headers";
import Buttons from "./Buttons";

export default function CookieBanner() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("gdpr");

  return (
    cookie === undefined && (
      <div className="fixed z-40 bottom-0 w-full p-6 opacity-0 intersect:animate-fade animate-duration-[1500ms] intersect-once">
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
                  <Buttons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
