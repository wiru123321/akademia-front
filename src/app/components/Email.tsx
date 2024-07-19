import FormSubmit from "./FormSubmit";
import "../../first.css";

interface EmailProps {
  id: string;
  __component: string;
  title: string;
  description: string;
  emailPlaceholder: string;
  submitButton: {
    text: string;
  };
}

export default function Email({ data }: { data: EmailProps }) {
  return (
    <section className="relative pb-10 bg-coolGray-50 overflow-hidden">
      <nav>
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center">
            <a className="inline-block" href="#">
              <img
                className="h-5"
                src="asitrastudio-assets/logos/logo-asi.svg"
                alt=""
              />
            </a>
            <button className="lg:hidden navbar-burger py-1 ml-auto">
              <svg
                width="44"
                height="16"
                viewBox="0 0 44 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="2" rx="1" fill="black"></rect>
                <rect y="14" width="44" height="2" rx="1" fill="black"></rect>
              </svg>
            </button>
            <div className="hidden lg:flex ml-auto mr-12 items-center">
              <a className="inline-block hover:underline mr-10" href="#">
                About
              </a>
              <a className="inline-block hover:underline mr-10" href="#">
                Services
              </a>
              <a className="inline-block hover:underline mr-10" href="#">
                Projects
              </a>
              <a className="inline-block hover:underline" href="#">
                Contact us
              </a>
            </div>
            <a
              className="group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200"
              href="#"
            >
              <span className="mr-2">Get consulation</span>
              <span className="group-hover:rotate-45 transform transition duration-100">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L1 9"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 8.33571V1H1.66429"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </nav>
      <div className="relative container mx-auto px-4">
        <div className="xl:max-w-5xl mt-8">
          <h1 className="z-10 relative font-heading text-6xl xs:text-9xl md:text-11xl xl:text-12xl tracking-tightest mb-9 lg:mb-14">
            We create modern architecture
          </h1>
          <div className="lg:hidden relative ml-auto max-w-2xl sm:pb-10">
            <img
              className="w-full max-w-lg ml-auto sm:-mt-20 mb-10"
              src="asitrastudio-assets/headers/subtract-photo-right.png"
              alt=""
            />
            <div className="hidden sm:block absolute bottom-0 left-0 md:ml-12 mb-10 max-w-sm text-right">
              <span className="block text-xs">Since</span>
              <span className="block mb-3 text-xs">1979</span>
              <p>
                <span className="block">
                  Duoloco® is a strategic branding agency
                </span>
                <span className="block">
                  focused on brand creation, rebrands, and brand
                </span>
                <span className="block">
                  transformation for progressive companies.
                </span>
              </p>
            </div>
          </div>
          <div className="relative inline-flex flex-wrap md:flex-nowrap items-end">
            <div className="relative inline-block order-last lg:order-first md:mr-4 2xl:mr-24">
              <img
                className="block w-full h-80 md:max-w-sm xl:max-w-xl"
                src="asitrastudio-assets/headers/photo-rounded2.png"
                alt=""
              />
              <div className="absolute top-0 right-0 w-40 h-40 mt-5 sm:-mr-20 flex items-center justify-center">
                <img
                  className="absolute top-0 left-0 animate-spinSlow"
                  style={{
                    animationDirection: "reverse",
                  }}
                  src="asitrastudio-assets/headers/spin-bonus.svg"
                  alt=""
                />
                <img
                  className="relative"
                  src="asitrastudio-assets/headers/arrow-spin.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="sm:hidden lg:block relative z-10 ml-auto max-w-sm mb-10 2xl:mb-0 lg:mr-10 2xl:mr-4 text-right">
              <span className="block mb-1 text-xs">Since</span>
              <span className="block mb-3 text-xs">1979</span>
              <p>
                <span className="block">
                  Duoloco® is a strategic branding agency
                </span>
                <span className="block">
                  focused on brand creation, rebrands, and brand
                </span>
                <span className="block">
                  transformation for progressive companies.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 -mt-6">
          <img
            className="block"
            src="asitrastudio-assets/headers/subtract-photo-right.png"
            alt=""
          />
        </div>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
          <div className="flex mb-auto items-center">
            <a className="inline-block mr-auto" href="#">
              <img
                className="h-4"
                src="asitrastudio-assets/logos/logo-asi.svg"
                alt=""
              />
            </a>
            <a className="navbar-close" href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6" key={0}>
                <a className="inline-block text-black" href="#">
                  About
                </a>
              </li>
              <li className="mb-6" key={1}>
                <a className="inline-block text-black" href="#">
                  Services
                </a>
              </li>
              <li className="mb-6" key={2}>
                <a className="inline-block text-black" href="#">
                  Projects
                </a>
              </li>
              <li key={3}>
                <a className="inline-block text-black" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              className="block mb-3 px-4 py-4 text-center font-medium text-black hover:text-white border border-black hover:bg-black rounded-full transition duration-200"
              href="#"
            >
              Login
            </a>
            <a
              className="block px-4 py-4 text-center font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
              href="#"
            >
              Sign in
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
