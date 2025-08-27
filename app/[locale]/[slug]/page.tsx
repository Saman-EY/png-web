import { ScrollToTop } from "@/components/ScrollToTop";
import SearchBox from "@/components/SearchBox";
import { PngItemDetailT, PngItemT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { TempAd } from "./components/TempAd";
import { SimilarCards } from "./components/SimilarCards";
import { getTranslations } from "next-intl/server";

async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = await getTranslations("Details");

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

    if (!matchedItemDetails) {
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
              src={matchedItemLanding["data-original"]}
              alt={matchedItemLanding.title}
            />

            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg md:mt-10">{matchedItemDetails.title}</h5>

              <p>{matchedItemDetails.Description}</p>
              <Link href={`/${slug}/copyright-policy`} className="text-[#BC90FF] font-semibold hover:underline">
                &copy; {t("copyRight")}
              </Link>
            </div>
          </section>

          <TempAd />

          {/* Details */}
          <section className="w-full max-w-[800px] bg-white rounded-2xl  shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] mx-auto p-5 mb-10 pb-12">
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

          {/* TAGS */}
          <section className="w-full max-w-[800px] mx-auto px-5 py-10 flex gap-4 flex-wrap justify-center">
            {tags.map((tag: string, index: number) => (
              <span key={index} className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">
                {tag}
              </span>
            ))}
          </section>

          <div className="flex items-center justify-center my-5 w-full">
            <Link href={`/${slug}/download`} className="bg-[#5AB696] font-bold text-white rounded-xl px-7 py-3">
              {t("freeDownload")}
            </Link>
          </div>

          <TempAd />

          <SimilarCards landingData={landingData} />
        </section>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load Data. Please try again later.</div>;
  }
}

export default DetailPage;
