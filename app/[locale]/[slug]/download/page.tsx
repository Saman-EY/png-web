import SearchBox from "@/components/SearchBox";
import { PngItemDetailT, PngItemT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { TempAd } from "../components/TempAd";
import { SimilarCards } from "../components/SimilarCards";
import { getTranslations } from "next-intl/server";

async function DownloadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = await getTranslations("downloadPage");

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/details.json`);
    const response2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cleanpng.landing.json`);

    if (!response.ok || !response2.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const landingData = await response2.json();

    const matchedItemDetails: PngItemDetailT = data.find((item: PngItemDetailT) => getSlug(item.href) === slug);
    const matchedItemLanding: PngItemT = landingData.find((item: PngItemT) => getSlug(item.href) === slug);
    const tags = matchedItemDetails.tag.split(",").map((tag: string) => tag.trim());

    console.log("*details", slug, matchedItemDetails);

    if (!matchedItemDetails) {
      return (
        <div className="text-red-500 p-4 font-bold text-xl h-60 bg-red-100 flex items-center justify-center">
          ITEM NOT FOUND :(
        </div>
      );
    }

    return (
      <section className="px-5">
        <SearchBox />

        <TempAd />

        <h6 className="font-bold text-2xl max-w-[1000px] mx-auto">{matchedItemDetails.title}</h6>

        {/* Details */}
        <section className="w-full max-w-[1000px] bg-white rounded-2xl shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] mx-auto p-5 mb-10 pb-12 mt-5">
          <h6 className="text-[#BC90FF] font-semibold">{t("imageDetails")} Image Details</h6>

          <div className="flex justify-between w-full max-w-[70%] mx-auto mb-8 mt-8">
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("contributor")}</span>
              <span>{matchedItemDetails.Contributor ?? "-"}</span>
            </div>
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("resolution")}</span>
              <span>{matchedItemDetails.Resolution ?? "-"}</span>
            </div>
          </div>
          <div className="flex justify-between w-full max-w-[70%] mx-auto">
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("fileSize")}</span>
              <span>{matchedItemDetails.Size ?? "-"}</span>
            </div>
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("category")}</span>
              <span>-</span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl my-5 bg-[#E6DAF8] p-5 flex flex-col md:flex-row gap-3 md:gap-5 max-w-[1000px] mx-auto shadow-[0px_2px_3px_0px_#0000004D,0px_6px_10px_4px_#00000026]">
          <Image
            src={matchedItemLanding["data-original"]}
            alt={matchedItemDetails.title}
            width={500}
            height={500}
            className="w-full md:w-1/2  object-cover rounded-xl"
          />

          <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-5">
            <h6 className="font-bold text-2xl">
              {t("size")} {matchedItemDetails.Size}
            </h6>
            <Link href={`/${slug}/download`} className="bg-[#5AB696] font-bold text-white rounded-xl px-7 py-3">
              {t("freeDownload")}
            </Link>
            <div className="font-semibold text-lg flex flex-col">
              <span>- {t("unlimitedDownloads")}</span>
              <span>- {t("noAttribution")}</span>
            </div>
          </div>
        </section>

        {/* TAGS */}
        <section className="w-full max-w-[800px] mx-auto px-5 py-10 flex gap-4 flex-wrap justify-center">
          {tags.map((tag: string, index: number) => (
            <span key={index} className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">
              {tag}
            </span>
          ))}
        </section>

        <SimilarCards landingData={landingData} />
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load Data. Please try again later.</div>;
  }
}

export default DownloadPage;
