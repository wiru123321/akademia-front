"use client";
import Link from "next/link";
import { renderButtonStyle } from "app/utils/render-button-style";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { getStrapiURL } from "app/utils/api-helpers";
import { IoHome } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrInstagram, GrCircleInformation } from "react-icons/gr";
import {
  IoCloseSharp,
  IoCheckmarkCircleSharp,
  IoCloseCircle,
  IoAlertCircleSharp,
} from "react-icons/io5";

interface ContactProps {
  title: string;
  description: string;
  contactCard: ContactCard[];
}

interface ContactCard {
  id: string;
  title: string;
  description: string;
  additionalDescription: string;
  icon: string;
  isSocialMedia: boolean;
}

function RenderIcon({ icon }: { icon: string | undefined }) {
  switch (icon) {
    case "MAIL":
      return <HiOutlineMailOpen size={40} color="black" />;
    case "PHONE":
      return <HiOutlinePhone size={40} color="black" />;
    case "ADRESS":
      return <IoHome size={40} color="black" />;
    case "INSTAGRAM":
      return <GrInstagram size={40} color="black" />;
    case "COMPANY":
      return <GrCircleInformation size={40} color="black" />;
    default:
      return null;
  }
}

function GenerateLink({
  icon,
  link,
}: {
  icon: string | undefined;
  link: string | undefined;
}) {
  switch (icon) {
    case "MAIL":
      return `mailto:${link}`;
    case "PHONE":
      return `tel:${link}`;
    case "ADRESS":
      return link;
    case "INSTAGRAM":
      return link;
    default:
      return null;
  }
}

export default function Contact({
  title,
  description,
  contactCard,
}: ContactProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [displayWarning, setDisplayWarning] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);
  const [messageSend, setMessageSend] = useState(false);
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  async function handleSubmit() {
    if (messageSend) {
      setDisplayWarning(true);
      setErrorMessage("Możliwe jest wysłanie jednej wiadomości na 2 minuty");
      setFormSubmited(false);
      setTimeout(() => {
        setDisplayWarning(false);
      }, 5000);
      return;
    }

    setFormSubmited(true);
    if (name === "") {
      setDisplayWarning(true);
      setErrorMessage("Uzupełnij swoje imię");
      setFormSubmited(false);
      setTimeout(() => {
        setDisplayWarning(false);
      }, 5000);
      return;
    }

    if (email === "") {
      setDisplayWarning(true);
      setErrorMessage("Uzupełnij swój e-mail");
      setFormSubmited(false);
      setTimeout(() => {
        setDisplayWarning(false);
      }, 5000);
      return;
    }

    if (!emailRegex.test(email)) {
      setDisplayWarning(true);
      setErrorMessage("Zły format adresu e-mail");
      setFormSubmited(false);
      setTimeout(() => {
        setDisplayWarning(false);
      }, 5000);
      return;
    }

    if (message === "") {
      setDisplayWarning(true);
      setErrorMessage("Wpisz swoją wiadomość");
      setFormSubmited(false);
      setTimeout(() => {
        setDisplayWarning(false);
      }, 5000);
      return;
    }

    if (!checkbox) {
      setDisplayWarning(true);
      setErrorMessage("Zaakceptuj wymagane zgody");
      setFormSubmited(false);
      setTimeout(() => {
        setDisplayWarning(false);
      }, 5000);
      return;
    }

    const res = await fetch(getStrapiURL() + "/api/lead-form-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { email, name, message, checkbox } }),
    });

    if (!res.ok) {
      setDisplayError(true);
      setErrorMessage("Błąd połączenia! Spróbuj ponownie");
      setFormSubmited(false);
      setTimeout(() => {
        setDisplayError(false);
      }, 5000);
      return;
    }
    if (res.ok) {
      setDisplaySuccess(true);
      setSuccessMessage("Wiadomość została przesłana!");
      setFormSubmited(false);
      setEmail("");
      setName("");
      setMessage("");
      setMessageSend(true);
      setTimeout(() => {
        setDisplaySuccess(false);
      }, 5000);
      setTimeout(() => {
        setMessageSend(false);
      }, 120000);
    }
  }

  return (
    <section id="contact">
      <>
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap mb-6 sm:mb-12 lg:mb-18 items-center justify-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="mb-5 text-4xl text-center font-bold font-serif text-[#B8777D]">
                  {title && title}
                </h2>
                <p className="text-lg md:text-xl text-black font-montserrat text-center font-medium">
                  {description && description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-7 lg:mb-0">
                <div className="flex flex-wrap -mx-4">
                  {contactCard.map((card, index) => (
                    <div
                      key={index}
                      className={`w-full md:w-1/2 px-6 mb-10 ${
                        card.icon === "MAIL" ? "md:w-full" : ""
                      }`}
                    >
                      <div className="p-6 h-full text-center bg-[#DEC9CA] bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                        <Link
                          href={
                            GenerateLink({
                              link: card.additionalDescription,
                              icon: card.icon,
                            }) || ""
                          }
                          target={
                            card.icon === "INSTAGRAM" || card.icon === "ADRESS"
                              ? "_blank"
                              : "_self"
                          }
                        >
                          <div className="mb-6 relative mx-auto w-16 h-16 rounded-full bg-white">
                            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                              {RenderIcon({
                                icon: card.icon,
                              })}
                            </div>
                          </div>
                          {card.title && (
                            <h3 className="mb-4 text-xl md:text-2xl font-bold leading-9">
                              {card.title}
                            </h3>
                          )}
                          {card.description && (
                            <p className="text-md md:text-lg font-medium break-words">
                              {card.description}
                            </p>
                          )}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <h3 className="text-3xl text-center font-bold font-serif text-[#B8777D]">
                  Formularz kontaktowy
                </h3>
                <div className="px-4 py-8 md:p-10 bg-coolGray-50 rounded-md">
                  <form>
                    <div className="relative flex flex-wrap mb-6">
                      <input
                        className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border font-montserrat rounded focus:outline-none focus:border-[#B97B80]"
                        type="text"
                        placeholder="Wpisz swoje imię"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                      <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block font-serif bg-white text-black text-xs">
                        Imię
                      </span>
                    </div>
                    <div className="relative flex flex-wrap mb-6">
                      <input
                        className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border font-montserrat rounded focus:outline-none focus:border-[#B97B80]"
                        type="email"
                        placeholder="Wpisz swój e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block font-serif bg-white text-black text-xs">
                        E-mail
                      </span>
                    </div>
                    <div className="relative flex flex-wrap mb-6">
                      <textarea
                        className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded font-montserrat resize-none focus:outline-none focus:border-[#B97B80]"
                        id="1"
                        typeof="message"
                        cols={30}
                        rows={10}
                        placeholder="Napisz wiadomość..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></textarea>
                      <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block font-serif bg-white text-black text-xs">
                        Wiadomość
                      </span>
                    </div>
                    <div className="relative flex flex-wrap mb-6">
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center p-3 rounded-full cursor-pointer"
                          htmlFor="check"
                        >
                          <input
                            type="checkbox"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray checked:bg-[#B97B80] checked:before:bg-gray hover:before:opacity-10"
                            id="check"
                            checked={checkbox}
                            onChange={() => setCheckbox(!checkbox)}
                          />
                          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                        <label
                          className="mt-px font-light text-gray-700 cursor-pointer select-none"
                          htmlFor="check"
                        >
                          Wyrażam zgodę na przetwarzanie podanych danych
                          osobowych oraz na kontakt ze strony
                          akademiarozwojudziecka.pl
                        </label>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={formSubmited}
                      className={`${renderButtonStyle(
                        "primary"
                      )} relative inline-flex pr-1 lg:text-xl md:pr-1 max-w-fit mx-auto transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear ${
                        formSubmited
                          ? " pr-4 md:pr-6"
                          : "hover:bg-white hover:shadow-[0px_4px_4px_0px_rgba(185,123,128,0.20)] hover:text-[#B97B80] hover:shadow-[#B97B80]"
                      }`}
                    >
                      {formSubmited ? (
                        <div className="hollow-dots-spinner">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      ) : (
                        <>
                          <span>Wyślij zapytanie</span>
                          <span>
                            <BsArrowUpRightCircleFill className="ml-3 w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
                          </span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className={`transition-all duration-200 fixed left-0 bottom-0 p-4 ${
            displaySuccess ? "z-50 opacity-100" : "-z-10 opacity-0"
          }`}
        >
          <div className="max-w-xs p-4 bg-black rounded-lg shadow">
            <div className="flex w-full h-full items-center justify-between">
              <div className="flex items-center pr-6">
                <div className="flex-shrink-0 self-start inline-flex items-center justify-center w-10 h-10 mr-3 bg-opacity-20 rounded-xl bg-green-500">
                  <IoCheckmarkCircleSharp size={20} color="#54D62C" />
                </div>
                <span className="text-sm leading-5 text-gray-200 font-semibold">
                  {successMessage}
                </span>
              </div>
              <button
                type="button"
                className="inline-block text-gray-400 hover:text-gray-300"
                onClick={() => {
                  setDisplaySuccess(false);
                }}
              >
                <IoCloseSharp size={20} color="white" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`transition-all duration-200 fixed left-0 bottom-0 p-4 ${
            displayError ? "z-50 opacity-100" : "-z-10 opacity-0"
          }`}
        >
          <div className="max-w-xs p-4 bg-black rounded-lg shadow">
            <div className="flex w-full h-full items-center justify-between">
              <div className="flex items-center pr-6">
                <div className="flex-shrink-0 self-start inline-flex items-center justify-center w-10 h-10 mr-3 bg-opacity-20 rounded-xl bg-red-500">
                  <IoCloseCircle size={20} color="#e2453a" />
                </div>
                <span className="text-sm leading-5 text-gray-200 font-semibold">
                  {errorMessage}
                </span>
              </div>
              <button
                type="button"
                className="inline-block text-gray-400 hover:text-gray-300"
                onClick={() => {
                  setDisplayError(false);
                }}
              >
                <IoCloseSharp size={20} color="white" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`transition-all duration-200 fixed left-0 bottom-0 p-4 ${
            displayWarning ? "z-50 opacity-100" : "-z-10 opacity-0"
          }`}
        >
          <div className="max-w-xs p-4 bg-black rounded-lg shadow">
            <div className="flex w-full h-full items-center justify-between">
              <div className="flex items-center pr-6">
                <div className="flex-shrink-0 self-start inline-flex items-center justify-center w-10 h-10 mr-3 bg-opacity-20 rounded-xl bg-yellow-500">
                  <IoAlertCircleSharp size={20} color="#FFDB58" />
                </div>
                <span className="text-sm leading-5 text-gray-200 font-semibold">
                  {errorMessage}
                </span>
              </div>
              <button
                type="button"
                className="inline-block text-gray-400 hover:text-gray-300"
                onClick={() => {
                  setDisplayWarning(false);
                }}
              >
                <IoCloseSharp size={20} color="white" />
              </button>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
