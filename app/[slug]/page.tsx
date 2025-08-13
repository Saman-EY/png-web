import SearchBox from "@/components/SearchBox";
import { PngItemDetailT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";

interface PageProps {
  params: { slug: string };
}

async function DetailPage({ params }: PageProps) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/details.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const matchedItem: PngItemDetailT = data.find((item: PngItemDetailT) => getSlug(item.href) === params.slug);

    console.log("*details", data, params.slug, matchedItem);

    if (!matchedItem) {
      return (
        <div className="text-red-500 p-4 font-bold text-xl h-60 bg-red-100 flex items-center justify-center">
          ITEM NOT FOUND :(
        </div>
      );
    }

    return (
      <section>
        <div className="mt-10" />
        <SearchBox />

        <TempAd />

        {/* Card and description */}
        <section className="w-full max-w-[1200px] mx-auto px-5 py-10">
          {/* <Image
          src="/images/placeholder.png"
          alt="Placeholder"
          width={1200}
          height={600}
          className="w-full max-w-[1200px] mx-auto rounded-2xl"
        /> */}

          <h5 className="font-semibold text-lg">{matchedItem.title}</h5>

          <p></p>
        </section>
      </section>
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
