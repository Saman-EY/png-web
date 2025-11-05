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
  const { slug } = await params;
  const t = await getTranslations("Details");

  let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL2}/products/${slug}`;
  let finalData: IImageData | null = null;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    finalData = data?.data.product;


    // if (!matchedItem) {
    //   return (
    //     <div className="text-red-500 p-4 font-bold text-xl h-60 bg-red-100 flex items-center justify-center">
    //       ITEM NOT FOUND :(
    //     </div>
    //   );
    // }

    return (
      <>
        <ScrollToTop />
        <section className="px-4">
          <div className="mt-10" />
          <SearchBox />

          <TempAd />

          {/* Card and description */}
          <section className="w-full max-w-[900px] mx-auto px-5 py-10 flex flex-col md:flex-row gap-5">
            <Image
              className="rounded-xl w-full max-w-[250px] mx-auto  md:max-w-[380px] md:h-[400px] object-cover"
              width={800}
              height={800}
              src={`${finalData?.display_url}`}
              alt={finalData?.title || ""}
            />

            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg md:mt-10">{finalData?.original_file_name}</h5>

              <p>{finalData?.description}</p>
              <Link href={`/${slug}/copyright-policy`} className="text-[#BC90FF] font-semibold hover:underline">
                &copy; {t("copyRight")}
              </Link>
            </div>
          </section>

          <Timer slug={slug} />

          <TempAd />

          {/* TAGS */}
          <section className="w-full max-w-[800px] mx-auto px-5 py-10 flex gap-4 flex-wrap justify-center">
            {/* {finalData?.tags.slice(0, 5).map((item: string, index: number) => (
              <span key={item.id} className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">
                {item.name}
              </span>
            ))} */}
          </section>

          <TempAd />

          {/* <SimilarCards landingData={data} /> */}
        </section>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load Data. Please try again later.</div>;
  }
}

export default DetailPage;
