"use client";
import { useLandingPngsQry } from "@/hooks/queries";
import { PngItemDetailT, PngItemT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

function PNGContainer({ data, detailsData }: { data: PngItemT[]; detailsData: PngItemDetailT[] }) {
  // const { data: temp, isLoading, isError } = useLandingPngsQry();
  // console.log("*PNGContainer data:", temp);

  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");

  const [visibleCount, setVisibleCount] = useState(25);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 25);
  };

  const filteredData = useMemo(() => {
    let filtered = data;

    if (search) {
      const query = search.toLowerCase();
      filtered = filtered.filter((item) => item.title.toLowerCase().includes(query));
    }

    if (category) {
      const categoryQuery = category.toLowerCase();
      filtered = filtered.filter((item) => item.title.toLowerCase().includes(categoryQuery));
    }

    return filtered;
  }, [data, search, category]);

  return (
    <>
      <section className="columns-1 sm:columns-3 md:columns-4 lg:columns-5 gap-4 mt-5">
        {filteredData.slice(0, visibleCount).map((png) => (
          <div key={png.href} className="mb-4 break-inside-avoid">
            <PngCard item={png} detailsData={detailsData} />
          </div>
        ))}
      </section>

      {filteredData.length === 0 && <div className="text-center text-xl text-gray-500 mt-10">No results found.</div>}

      {visibleCount < filteredData.length && (
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

export const PngCard = ({ item, detailsData }: { item: PngItemT; detailsData: PngItemDetailT[] }) => {
  // const slugs = data.map((item) => item.href.split("/").filter(Boolean).pop());
  const slug = getSlug(item.href);

  const matchedItemDetails: PngItemDetailT = detailsData.find((item: PngItemDetailT) => getSlug(item.href) === slug)!;

  return (
    <Link href={slug!} className="border rounded-3xl overflow-hidden shadow-md h-fit w-fit mx-auto block">
      <Image width={+item.width} height={+item.height} src={item["data-original"]} alt={item.title} />
      <div className="bg-[#F9E0E3] flex font-semibold  divide-x-2">
        <button className="flex-1 p-3">{matchedItemDetails?.Size || "-"}</button>
        <button className="flex-1 p-3">{matchedItemDetails?.Resolution || "-"}</button>
      </div>
    </Link>
  );
};
