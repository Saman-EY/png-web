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

  let finalData: IImageData | null = null;
  let finalSimilarData: IImageData[] | null = null;

  try {
    // Base API endpoint
    let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`;
    let similarEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/products/similar/title`;

    // ✅ Always include locale in query
    if (locale) {
      const query = new URLSearchParams();
      query.set("locale", locale);
      endpoint += `?${query.toString()}`;
      similarEndpoint += `?product_id=${slug}&${query.toString()}`;
    }

    // Fetch data
    const response = await fetch(endpoint);
    const response2 = await fetch(similarEndpoint);

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    const similarData = await response2.json();
    finalData = data?.data.product;
    finalSimilarData = similarData?.data;

    if (!finalData) {
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
          <section
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#ffffff #989898",
            }}
            className="w-full   max-w-[1000px] bg-white/40 max-h-140 border border-gray-400 rounded-lg overflow-auto mx-auto px-5 py-10 flex gap-4 flex-wrap justify-center"
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

          <TempAd />

          {finalSimilarData && <SimilarCards landingData={finalSimilarData} />}
        </section>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load Data. Please try again later.</div>;
  }
}

export default DetailPage;
