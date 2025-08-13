import PNGContainer from "@/components/PNGContainer";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import SearchBox from "@/components/SearchBox";

const TagsData = ["Animals", "Nature", "Food", "Technology", "Sports", "People"];

// Move the PNGContainer to a separate component that can be suspended
async function PNGContainerWithData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cleanpng.landing.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return <PNGContainer data={data} />;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load images. Please try again later.</div>;
  }
}

export default function Home() {
  return (
    <section className="w-full max-w-[1320px] mx-auto pb-10 pt-5 px-5">
      {/* titles */}
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className="font-bold text-lg sm:text-3xl  flex items-center gap-3 ">
          <Image
            src="/magnet.svg"
            className="w-[58px] h-[58px] md:w-[78px] md:h-[78px]"
            alt="logo"
            width={78}
            height={78}
          />
          Free PNG Image
        </h1>
        <h6 className="text-lg font-semibold">With Transparent Backgrounds</h6>
      </div>

      {/* SEARCH BOX */}
      <SearchBox />

      {/* Tags */}
      <div className="flex items-center justify-center flex-wrap gap-2 mt-5 mb-10">
        {TagsData.map((tag, index) => (
          <button
            key={index}
            className="border border-white rounded-full px-6 py-2 bg-green-300 text-black font-semibold"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* PNGs CONTAINER */}
      {/* Dynamic content with loading fallback */}
      <Suspense
        fallback={
          // <div className="flex justify-center py-10">
          //   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          // </div>
          <Loader />
        }
      >
        <PNGContainerWithData />
      </Suspense>
    </section>
  );
}
