import myImageLoader from "app/loader";
import { formatDate } from "app/utils/api-helpers";
import { postRenderer } from "app/utils/post-renderer";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    readTime: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    category: {
      data: {
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    authorsBio: {
      data: {
        attributes: {
          name: string;
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
    blocks: any[];
    publishedAt: string;
  };
}

export default function Post({ data }: { data: Article }) {
  const {
    title,
    description,
    publishedAt,
    cover,
    authorsBio,
    category,
    readTime,
  } = data.attributes;
  const author = authorsBio.data?.attributes;
  const blogCategory = category.data.attributes;
  const imageUrl = cover.data?.attributes.url;
  const authorImgUrl = authorsBio.data?.attributes.avatar.data.attributes.url;
  return (
    <section className="overflow-hidden py-24 relative">
      <div className="absolute top-0 left-0 w-full bg-[#DEC9CA] pb-40 md:pb-24">
        <div className="flex justify-center gap-6">
          <div
            className="hidden lg:block mt-20 rounded-3xl w-80 h-80"
            style={{
              background: `linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #CFB0AE 100%)`,
            }}
          ></div>
          <div
            className="rounded-3xl w-80 h-80"
            style={{
              background: `linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #CFB0AE 100%)`,
            }}
          ></div>
          <div
            className="rounded-3xl w-80 h-80"
            style={{
              background: `linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #CFB0AE 100%)`,
            }}
          ></div>
          <div
            className="hidden lg:block mt-20 rounded-3xl w-80 h-80"
            style={{
              background: `linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #CFB0AE 100%)`,
            }}
          ></div>
        </div>
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Link
              className=" group mb-12 inline-flex items-center gap-2 flex-wrap"
              href="/blog"
            >
              <div className="text-black group-hover:text-opacity-80 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.4167 10H5M5 10L10 5M5 10L10 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="text-black group-hover:text-opacity-80 transition duration-200 font-bold">
                Wróć do bazy wiedzy
              </span>
            </Link>
          </div>
          <h2 className="text-center text-black text-3xl lg:text-5xl font-bold mb-12 max-w-xl lg:max-w-3xl mx-auto">
            {title}
          </h2>
          <div className="w-full flex justify-center">
            <Image
              loader={myImageLoader}
              className="w-[75%] sm:w-[40%] rounded-2xl mb-12"
              src={imageUrl}
              width={200}
              height={200}
              alt="Zdjęcie główne do artykułu"
            />
          </div>
          <div className="px-8 lg:px-24">
            <div className="w-full h-px bg-gray-200"></div>
            <div className="flex items-center justify-between flex-wrap gap-4 py-5">
              <div className="flex items-center gap-4 flex-wrap">
                {authorImgUrl && (
                  <Image
                    loader={myImageLoader}
                    src={authorImgUrl}
                    alt="Zdjęcie autora artykułu"
                    width={400}
                    height={400}
                    className="w-14 h-14 object-cover border rounded-full"
                  />
                )}
                <div>
                  <p className="text-lg font-semibold text-black">
                    {author && author.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="rounded-md border border-gray-100 py-0.5 px-2">
                    <span className="text-gray-700 text-xs font-medium">
                      {blogCategory.name}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-gray-500">
                    {formatDate(publishedAt)}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 4 5"
                    fill="none"
                  >
                    <circle cx="2" cy="2.66669" r="2" fill="#D1D1D1"></circle>
                  </svg>
                  <span className="text-gray-500">
                    Przeczytasz w {readTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 mb-12"></div>
          </div>

          <div className="px-8 lg:px-24">
            {data.attributes.blocks.map((section: any, index: number) =>
              postRenderer(section, index)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
