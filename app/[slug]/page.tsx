import { ScrollToTop } from "@/components/ScrollToTop";
import SearchBox from "@/components/SearchBox";
import { PngItemDetailT, PngItemT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";

async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

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

    // console.log("*details", slug, matchedItemDetails, matchedItemLanding);

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
              className="rounded-xl w-full max-w-[250px] mx-auto  md:max-w-[500px] md:h-[400px] object-cover"
              // width={+matchedItemLanding.width}
              width={500}
              height={500}
              src={matchedItemLanding["data-original"]}
              alt={matchedItemLanding.title}
            />

            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-lg md:mt-10">{matchedItemDetails.title}</h5>

              <p>{matchedItemDetails.Description}</p>
            </div>
          </section>

          <TempAd />

          {/* Details */}
          <section className="w-full max-w-[800px] bg-white rounded-2xl  shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] mx-auto p-5 mb-10 pb-12">
            <h6 className="text-[#BC90FF] font-semibold">Image Details</h6>

            <div className="flex justify-between w-full max-w-[70%] mx-auto mb-8 mt-8">
              <div className="flex flex-col gap-2 font-bold min-w-30 ">
                <span className="text-emerald-700 ">Contributor:</span>
                <span>{matchedItemDetails.Contributor ?? "-"}</span>
              </div>
              <div className="flex flex-col gap-2 font-bold min-w-30 ">
                <span className="text-emerald-700 ">Resolution:</span>
                <span>{matchedItemDetails.Resolution ?? "-"}</span>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-[70%] mx-auto">
              <div className="flex flex-col gap-2 font-bold min-w-30 ">
                <span className="text-emerald-700 ">File Size:</span>
                <span>{matchedItemDetails.Size ?? "-"}</span>
              </div>
              <div className="flex flex-col gap-2 font-bold min-w-30 ">
                <span className="text-emerald-700 ">Category:</span>
                <span>-</span>
              </div>
            </div>
          </section>

          {/* TAGS */}
          <section className="w-full max-w-[800px] mx-auto px-5 py-10 flex gap-5 flex-wrap justify-center">
            <span className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">Angry Dastan</span>
            <span className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">Angry Dastan</span>
            <span className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">Angry Dastan</span>
            <span className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">Angry Dastan</span>
            <span className="border rounded-xl bg-white font-bold px-5 py-3 min-w-44 text-center">Angry Dastan</span>
          </section>

          <div className="flex items-center justify-center my-5 w-full">
            <button className="bg-[#5AB696] font-bold text-white rounded-xl px-7 py-3">Free Downloadd</button>
          </div>

          <TempAd />

          <section className="w-full max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-bold mb-10">Similar Photo</h2>

            <section className="columns-1 sm:columns-3 md:columns-4 lg:columns-5 gap-4 mt-5 mb-10">
              {landingData.slice(0, 15).map((png: PngItemT) => (
                <PngOverlayCard item={png} key={png.href} />
              ))}
            </section>
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

const PngOverlayCard = ({ item }: { item: PngItemT }) => {
  const slug = getSlug(item.href);

  return (
    <Link
      href={`/${slug}`}
      key={item.href}
      className="mb-4 border rounded-3xl overflow-hidden shadow-md h-fit w-fit mx-auto relative block"
    >
      <Image
        width={+item.width}
        height={+item.height}
        src={item["data-original"]}
        alt={item.title}
        className="w-full object-cover"
      />

      <div className="bg-white/70 absolute px-5 py-2 bottom-0 left-0 right-0 font-bold">{item.title}</div>
    </Link>
  );
};
