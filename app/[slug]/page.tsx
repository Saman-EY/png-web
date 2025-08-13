import { ScrollToTop } from "@/components/ScrollToTop";
import SearchBox from "@/components/SearchBox";
import { PngItemDetailT, PngItemT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";

async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/details.json`);
    const response2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cleanpng.landing.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const landingData = await response2.json();

    const matchedItemDetails: PngItemDetailT = data.find((item: PngItemDetailT) => getSlug(item.href) === slug);
    const matchedItemLanding: PngItemT = landingData.find((item: PngItemT) => getSlug(item.href) === slug);

    console.log("*details", slug, matchedItemDetails, matchedItemLanding);

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
        <section>
          <div className="mt-10" />
          <SearchBox />

          <TempAd />

          {/* Card and description */}
          <section className="w-full max-w-[800px] mx-auto px-5 py-10 flex gap-5">
            <Image
              className="rounded-xl w-full  max-w-[500px] h-[400px] object-cover"
              // width={+matchedItemLanding.width}
              width={500}
              height={500}
              src={matchedItemLanding["data-original"]}
              alt={matchedItemLanding.title}
            />

            <div className="flex flex-col gap-8">
              <h5 className="font-semibold text-lg mt-10">{matchedItemDetails.title}</h5>

              <p>{matchedItemDetails.Description}</p>
            </div>
          </section>

          <TempAd />

          {/* Details */}
          <section className="w-full max-w-[800px] h-100 bg-white rounded-2xl  shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] mx-auto p-5 mb-10">
            <h6 className="text-[#BC90FF] font-semibold">Image Details</h6>
          </section>
        </section>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load Dataa. Please try again later.</div>;
  }
}

export default DetailPage;

const TempAd = () => {
  return (
    <div className="w-full max-w-[1200px] rounded-2xl bg-white mx-auto h-40 font-bold flex items-center justify-center my-8">
      Ad
    </div>
  );
};
