"use client";
import { useLandingPngsQry } from "@/hooks/queries";
import { PngItemT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function PNGContainer({ data }: { data: PngItemT[] }) {
  // const { data: temp, isLoading, isError } = useLandingPngsQry();

  // console.log("* PNGContainer data:", temp);

  const [visibleCount, setVisibleCount] = useState(25);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 25);
  };

  return (
    <>
      <section className="columns-1 sm:columns-3 md:columns-4 lg:columns-5 gap-4 mt-5">
        {data?.slice(0, visibleCount).map((png, indx) => (
          <div key={png.href} className="mb-4 break-inside-avoid">
            <PngCard item={png} />
          </div>
        ))}
      </section>

      {visibleCount < data.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-400 transition"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}

export default PNGContainer;

export const PngCard = ({ item }: { item: PngItemT }) => {
  // const slugs = data.map((item) => item.href.split("/").filter(Boolean).pop());
  const slug = getSlug(item.href);

  return (
    <Link href={slug!} className="border rounded-3xl overflow-hidden shadow-md h-fit w-fit mx-auto block">
      <Image width={+item.width} height={+item.height} src={item["data-original"]} alt={item.title} />
      <div className="bg-[#F9E0E3] flex font-semibold  divide-x-2">
        <button className="flex-1 p-3">30MB</button>
        <button className="flex-1 p-3">800*800</button>
      </div>
    </Link>
  );
};
