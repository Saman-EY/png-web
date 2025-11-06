import SearchBox from "@/components/SearchBox";
import { IImageData } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { TempAd } from "../components/TempAd";
import { SimilarCards } from "../components/SimilarCards";
import { getTranslations } from "next-intl/server";
import DownloadComponent from "../components/DownloadComponent";

async function DownloadPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const t = await getTranslations("downloadPage");

  let finalData: IImageData | null = null;
  let finalSimilarData: IImageData[] | null = null;

  try {
    let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`;
    let similarEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/products/similar/title`;

    // ✅ Always include locale in query
    if (locale) {
      const query = new URLSearchParams();
      query.set("locale", locale);
      endpoint += `?${query.toString()}`;
      similarEndpoint += `?product_id=${slug}&${query.toString()}`;
    }

    const response = await fetch(endpoint);
    const response2 = await fetch(similarEndpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const similarData = await response2.json();
    finalData = data?.data.product;
    finalSimilarData = similarData?.data;

    console.log("*", finalData);

    if (!finalData) {
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

        <h6 className="font-bold text-2xl max-w-[1000px] mx-auto">{finalData?.title}</h6>

        {/* Details */}
        <section className="w-full max-w-[1000px] bg-white rounded-2xl shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] mx-auto p-5 mb-10 pb-12 mt-5">
          <h6 className="text-[#BC90FF] font-semibold">{t("imageDetails")} Image Details</h6>

          <div className="flex items-center justify-between  max-w-[70%] mx-auto  mt-8">
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("resolution")}</span>
              <span>{finalData?.resolution ?? "-"}</span>
            </div>
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("fileSize")}</span>
              <span>{finalData?.file_size ?? "-"}</span>
            </div>
          </div>

          {/* <div className="flex justify-between w-full max-w-[70%] mx-auto mb-8 mt-8">
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("contributor")}</span>
              <span>{finalData?.dataDetals.Contributor ?? "-"}</span>
            </div>
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("resolution")}</span>
              <span>{finalData?.resolution ?? "-"}</span>
            </div>
          </div>
          <div className="flex justify-between w-full max-w-[70%] mx-auto">
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("fileSize")}</span>
              <span>{finalData?.file_size ?? "-"}</span>
            </div>
            <div className="flex flex-col gap-2 font-bold min-w-30 ">
              <span className="text-emerald-700 ">{t("category")}</span>
              <span>{tags[0]}</span>
            </div>
          </div> */}
        </section>

        <section className="rounded-2xl my-5 bg-[#E6DAF8] p-5 flex flex-col md:flex-row gap-3 md:gap-5 max-w-[1000px] mx-auto shadow-[0px_2px_3px_0px_#0000004D,0px_6px_10px_4px_#00000026]">
          <Image
            src={`${finalData?.display_url}`}
            alt={finalData?.title || ""}
            width={500}
            height={500}
            className="w-full md:w-1/2  object-cover rounded-xl"
          />

          <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-5">
            <h6 className="font-bold text-2xl">
              {t("size")} {finalData?.file_size}
            </h6>

            <DownloadComponent title={finalData?.title} link={`${finalData.download_url}`} />

            <div className="font-semibold text-lg flex flex-col">
              <span>- {t("unlimitedDownloads")}</span>
              <span>- {t("noAttribution")}</span>
            </div>
          </div>
        </section>

        {/* TAGS */}
        <section
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#ffffff #989898",
          }}
          className="w-full mb-5 max-w-[1000px] bg-white/40 max-h-140 border border-gray-400 rounded-lg overflow-auto mx-auto px-5 py-10 flex gap-4 flex-wrap justify-center"
        >
          {finalData?.tags.map((item) => (
            <Link
              key={item.id}
              href={`/?tag=${item.name}`}
              className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center"
            >
              {item.name}
            </Link>
          ))}
        </section>

        {finalSimilarData && <SimilarCards landingData={finalSimilarData} />}
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load Data. Please try again later.</div>;
  }
}

export default DownloadPage;
