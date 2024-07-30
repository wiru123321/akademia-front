"use client";
import Logo from "./Logo";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { renderButtonStyle } from "../utils/render-button-style";
import Image from "next/image";
import myImageLoader from "app/loader";
import { twMerge } from "tailwind-merge";

enum Group {
  INDYWIDUALNE = "Indywidualne",
  GRUPOWE = "Grupowe",
}

interface LinkNav {
  id: number;
  url: string;
  newTab: boolean;
  title: string;
  description: string;
  group: Group;
}

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  title: string;
  description: string;
  megaSection: Array<LinkNav>;
}

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

export default function Navbar({
  links,
  logoUrl,
  button,
  logoText,
}: {
  links: Array<NavLink>;
  button: Button;
  logoUrl: string | null;
  logoText: string | null;
}) {
  const [header, setHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  const scrollHeader = () => {
    if (window.scrollY >= 120) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && header) {
      // if scroll down hide the navbar
      setShow(false);
      setHeader(true);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
      className={twMerge(
        `transition-all duration-300 ${
          header
            ? show
              ? "fixed w-full bg-[#ffffffCC] z-20 py-3 opacity-100"
              : "fixed w-full bg-[#ffffffCC] -z-10 py-3 opacity-0"
            : "p-4 absolute top-0 left-0 right-0 z-20"
        }`
      )}
    >
      <div className="container flex justify-between h-16 mx-auto px-0 sm:px-6">
        <Logo src={logoUrl}></Logo>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <ul className="items-center hidden space-x-3 lg:flex">
            {links.map((link) => (
              <li key={link.id} className="relative group">
                <Link
                  href={link.url}
                  className="flex font-serif font-bold items-center mx-4 -mb-1 transition-all duration-300 group-hover:text-[#B8777D]"
                >
                  {link.title}
                </Link>
                {link.megaSection.length > 0 && (
                  <div className="absolute lg:-left-48 top-1 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                      <div className="relative z-30">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="uppercase tracking-wider font-serif text-gray-500 font-medium text-[13px]">
                              {Group.INDYWIDUALNE}
                            </p>
                            <ul className="mt-3 text-[15px]">
                              {link.megaSection.map((section) => {
                                return (
                                  section.group === Group.INDYWIDUALNE && (
                                    <li key={section.id}>
                                      <Link
                                        href={section.url}
                                        className="block p-2 -mx-2 group rounded-lg text-[#B8777D] font-serif hover:bg-[#DEC9CA] transition ease-in-out duration-300 font-semibold hover:text-black"
                                      >
                                        {section.title}
                                        <p className="text-black font-montserrat font-normal">
                                          {section.description}
                                        </p>
                                      </Link>
                                    </li>
                                  )
                                );
                              })}
                            </ul>
                          </div>
                          <div>
                            <p className="uppercase tracking-wider font-serif text-gray-500 font-medium text-[13px]">
                              {Group.GRUPOWE}
                            </p>
                            <ul className="mt-3 text-[15px]">
                              {link.megaSection.map((section, index) => {
                                return (
                                  section.group === Group.GRUPOWE && (
                                    <li key={index}>
                                      <Link
                                        href={section.url}
                                        className="block p-2 -mx-2 group rounded-lg text-[#B8777D] font-serif hover:bg-[#DEC9CA] transition ease-in-out duration-300 font-semibold hover:text-black"
                                      >
                                        {section.title}
                                        <p className="text-black font-montserrat font-normal">
                                          {section.description}
                                        </p>
                                      </Link>
                                    </li>
                                  )
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li className="flex">
              <Link href="/#contact">
                <p className={renderButtonStyle("primary")}>{button.text}</p>
              </Link>
            </li>
          </ul>
        </div>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75" />
          <Dialog.Panel className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/">
                <p className="-m-1.5 p-1.5">
                  {logoUrl && (
                    <Image
                      loader={myImageLoader}
                      className="h-16 w-auto"
                      src={logoUrl}
                      alt=""
                      width={100}
                      height={100}
                    />
                  )}
                </p>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  {links.map((link) => (
                    <a key={link.id} className="flex">
                      {link.megaSection.length > 0 ? (
                        <div className="block">
                          <button
                            type="button"
                            onClick={() => setAccordion(!accordion)}
                            className="-mx-3 w-auto text-start flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-base font-serif font-bold leading-7 text-black"
                          >
                            {link.title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#000"
                              className="ms-auto block w-4 h-4 text-gray-600"
                            >
                              <path
                                d="M19.5 8.25L12 15.75L4.5 8.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className={`transform origin-center transition duration-200 ease-out ${
                                  accordion && "!rotate-180"
                                }`}
                              ></path>
                            </svg>
                          </button>
                          <div
                            id={`accordion-text-nav`}
                            role="region"
                            aria-labelledby={`accordion-title-nav`}
                            className={`grid text-sm overflow-hidden text-black transition-all duration-300 ease-in-out ${
                              accordion
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <p className="uppercase tracking-wider font-serif text-gray-500 font-medium text-[13px]">
                                    {Group.INDYWIDUALNE}
                                  </p>
                                  <ul className="mt-3 text-[15px]">
                                    {link.megaSection.map((section, index) => {
                                      return (
                                        section.group ===
                                          Group.INDYWIDUALNE && (
                                          <li key={index}>
                                            <Link
                                              href={section.url}
                                              onClick={() => {
                                                closeMenu();
                                                setAccordion(!accordion);
                                              }}
                                              className="block p-2 -mx-2 rounded-lg font-serif text-[#B8777D] font-semibold"
                                            >
                                              {section.title}
                                              <p className="text-black font-montserrat font-normal">
                                                {section.description}
                                              </p>
                                            </Link>
                                          </li>
                                        )
                                      );
                                    })}
                                  </ul>
                                </div>
                                <div>
                                  <p className="uppercase tracking-wider font-serif text-gray-500 font-medium text-[13px]">
                                    {Group.GRUPOWE}
                                  </p>
                                  <ul className="mt-3 text-[15px]">
                                    {link.megaSection.map((section, index) => {
                                      return (
                                        section.group ===
                                          Group.INDYWIDUALNE && (
                                          <li key={index}>
                                            <Link
                                              href={section.url}
                                              onClick={() => {
                                                closeMenu();
                                                setAccordion(!accordion);
                                              }}
                                              className="block p-2 -mx-2 rounded-lg font-serif text-[#B8777D] font-semibold"
                                            >
                                              {section.title}
                                              <p className="text-black font-montserrat font-normal">
                                                {section.description}
                                              </p>
                                            </Link>
                                          </li>
                                        )
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.url}
                          onClick={() => closeMenu()}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-serif font-bold leading-7 text-black"
                        >
                          {link.title}
                        </Link>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="flex lg:hidden">
          <Link
            href="/#contact"
            target="_self"
            className={`${renderButtonStyle("primary")} h-fit
                    self-center`}
          >
            {button.text}
          </Link>
          <button className="p-4" onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-7 w-7 text-black" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
