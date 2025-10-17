import { ScrollToTop } from "@/components/ScrollToTop";
import SearchBox from "@/components/SearchBox";
import { IImageData, PngItemDetailT, PngItemT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { TempAd } from "./components/TempAd";
import { SimilarCards } from "./components/SimilarCards";
import { getTranslations } from "next-intl/server";
import Timer from "./components/Timer";

async function DetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const t = await getTranslations("Details");

  let endpoint = "";

  switch (locale) {
    case "es":
      endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/Spanish.json`;
      break;
    case "pt":
      endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/Portuguese.json`;
      break;
    case "de":
      endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/German.json`;
      break;
    case "fr":
      endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/French.json`;
      break;
    case "en":
    default:
      // endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/mixpng.json`;
      endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/output.json`;
      break;
  }

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const matchedItem: IImageData = data.find((item: IImageData) => getSlug(item.href) === slug);

    const tags = matchedItem?.tag.split(",").map((tag: string) => tag.trim());

    if (!matchedItem) {
      return (
        <div className="text-red-500 p-4 font-bold text-xl h-60 bg-red-100 flex items-center justify-center">
          ITEM NOT FOUND :(
        </div>
      );
    }

    return (
      <>
        <ScrollToTop />
        <section className="px-4">
          <div className="mt-10" />
          <SearchBox />

          <TempAd />

          {/* Card and description */}
          <section className="w-full max-w-[800px] mx-auto px-5 py-10 flex flex-col md:flex-row gap-5">
            <Image
              className="rounded-xl w-full max-w-[250px] mx-auto  md:w-[500px] md:h-[400px] object-cover"
              width={500}
              height={500}
              // src={matchedItem["data-original"]}
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/webp/${matchedItem?.original_file_name}.webp`}
              alt={matchedItem.title}
            />

            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg md:mt-10">{matchedItem.original_file_name}</h5>

              <p>{matchedItem?.description}</p>
              <Link href={`/${slug}/copyright-policy`} className="text-[#BC90FF] font-semibold hover:underline">
                &copy; {t("copyRight")}
              </Link>
            </div>
          </section>

          <Timer slug={slug} />

          <TempAd />

          {/* TAGS */}
          <section className="w-full max-w-[800px] mx-auto px-5 py-10 flex gap-4 flex-wrap justify-center">
            {tags.map((tag: string, index: number) => (
              <span key={index} className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">
                {tag}
              </span>
            ))}
          </section>

          <TempAd />

          <SimilarCards landingData={data} />
        </section>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load Data. Please try again later.</div>;
  }
}

export default DetailPage;
