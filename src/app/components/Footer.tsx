import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrInstagram } from "react-icons/gr";

interface Lesson {
  id: string;
  title: string;
  url: string;
}

interface Training {
  id: string;
  title: string;
  url: string;
}

interface Contact {
  id: string;
  title: string;
  address: string;
  addressUrl: string;
  phone: string;
  email: string;
  instagram: string;
  instagramUrl: string;
}

interface Page {
  id: string;
  url: string;
  newTab: boolean;
  title: string;
}

interface TrainingProps {
  title: string;
  description: string;
  lessonTitle: string;
  lessonSection: Lesson[];
  trainingTitle: string;
  trainingSection: Training[];
  contactSection: Contact;
  copyrights: string;
  pageList: Page[];
}

export default function Footer({
  title,
  description,
  lessonTitle,
  lessonSection,
  trainingTitle,
  trainingSection,
  contactSection,
  copyrights,
  pageList,
}: TrainingProps) {
  return (
    <div className="bg-[#1E1E1E] intersect:animate-fade animate-once animate-duration-[1500ms] intersect-half">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center w-full md:text-left md:w-auto">
            <span className="font-serif ml-2 text-base font-bold tracking-wide text-white text-sm">
              {title && title}
            </span>
            <div className="mt-6 lg:max-w-sm">
              <p className="font-montserrat text-sm text-[#999999]">
                {description && description}
              </p>
            </div>
          </div>
          <div className="justify-self-start text-center w-full md:text-left md:w-auto lg:justify-self-end text-sm">
            <p className="font-serif text-base font-bold tracking-wide text-white">
              {lessonTitle && lessonTitle}
            </p>
            <div className="mt-6">
              {lessonSection.length > 0 &&
                lessonSection.map((lesson, index) => (
                  <div
                    key={index}
                    className="flex mb-3 justify-center md:justify-start items-center"
                  >
                    <Link
                      href={lesson.url}
                      target="_self"
                      title={lesson.title}
                      className="font-montserrat text-[#999999]"
                    >
                      • {lesson.title && lesson.title}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="justify-self-start text-center w-full md:text-left md:w-auto lg:justify-self-center text-sm">
            <p className="font-serif text-base font-bold tracking-wide text-white">
              {trainingTitle && trainingTitle}
            </p>
            <div className="mt-6">
              {trainingSection.length > 0 &&
                trainingSection.map((training, index) => (
                  <div
                    key={index}
                    className="flex mb-3 justify-center md:justify-start items-center"
                  >
                    <Link
                      href={training.url}
                      target="_self"
                      title={training.title}
                      className="font-montserrat text-[#999999]"
                    >
                      • {training.title && training.title}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="justify-self-start text-center w-full md:text-left md:w-auto lg:justify-self-center">
            <span className="font-serif text-base font-bold tracking-wide text-white">
              {contactSection.title && contactSection.title}
            </span>
            <div className="mt-6">
              <div className="flex mb-3 text-left justify-center md:justify-start items-center">
                <IoHome color="#999999" size={30} />
                <Link
                  href={contactSection.addressUrl}
                  target="_blank"
                  aria-label="Nasz adres"
                  title="Nasz adres"
                  className="font-montserrat ml-3 text-[#999999]"
                >
                  {contactSection.address && contactSection.address}
                </Link>
              </div>
              <div className="flex mb-3 text-left justify-center md:justify-start items-center">
                <HiOutlinePhone color="#999999" size={30} />
                <Link
                  href={`tel:${contactSection.phone}`}
                  aria-label="Nasz telefon"
                  title="Nasz telefon"
                  className="font-montserrat ml-3 text-[#999999]"
                >
                  {contactSection.phone && contactSection.phone}
                </Link>
              </div>
              <div className="flex mb-3 text-left justify-center md:justify-start items-center">
                <HiOutlineMailOpen color="#999999" size={30} />
                <Link
                  href={`mailto:${contactSection.email}`}
                  aria-label="Nasz email"
                  title="Nasz email"
                  className="font-montserrat ml-3 text-[#999999]"
                >
                  {contactSection.email && contactSection.email}
                </Link>
              </div>
              <div className="flex justify-center text-left md:justify-start items-center">
                <GrInstagram color="#999999" size={30} />
                <Link
                  href={contactSection.instagramUrl}
                  target="_blank"
                  aria-label="Nasz instagram"
                  title="Nasz instagram"
                  className="font-montserrat ml-3 text-[#999999]"
                >
                  {contactSection.instagram && contactSection.instagram}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-[#393939] lg:flex-row">
          <p className="font-montserrat text-center text-sm text-[#FFFFFF] md:text-left">
            {copyrights && copyrights}
          </p>
          <ul className="flex gap-1 text-center self-center md:gap-8 flex-col mb-3 space-y-2 md:text-left lg:mb-0 sm:space-y-0 sm:flex-row">
            {pageList.length > 0 &&
              pageList.map((page, index) => (
                <>
                  <li>
                    <Link
                      href={page.url}
                      target="_self"
                      className="font-montserrat text-sm text-white whitespace-nowrap"
                    >
                      {page.title && page.title}
                    </Link>
                  </li>
                  {index !== pageList.length - 1 && (
                    <li className="hidden sm:block">
                      <div className="w-px h-full bg-white" />
                    </li>
                  )}
                </>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
