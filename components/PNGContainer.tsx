"use client";
import { IImageData } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

function PNGContainer({ data }: { data: IImageData[] }) {
  // const { data: temp, isLoading, isError } = useLandingPngsQry();
  // console.log("*PNGContainer data:", temp);
  const [visibleCount, setVisibleCount] = useState(25);

  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");

  const t = useTranslations("Landing");

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
      <section className="columns-1 sm:columns-3 md:columns-4 lg:columns-5  gap-4 mt-5">
        {filteredData.slice(0, visibleCount).map((png) => (
          <div key={png.href} className="mb-4 break-inside-avoid">
            <PngCard item={png} />
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
            {t("showMoreBtn")}
          </button>
        </div>
      )}
    </>
  );
}

export default PNGContainer;

export const PngCard = ({ item }: { item: IImageData }) => {
  const slug = getSlug(item.href);

  const locale = useLocale();

  return (
    <Link
      href={slug!}
      locale={locale}
      className="border group relative rounded-3xl overflow-hidden shadow-md h-fit w-fit mx-auto block"
    >
      <Image width={+item.width} height={+item.height} src={item["data-original"]} alt={item.title} />

      {/* hover */}
      <div className=" opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all  absolute top-0 left-0 w-full h-full bg-white/70 z-20 flex flex-col justify-center items-center">
        <span className="truncate px-3 font-semibold text-lg w-full text-center">{item?.title}</span>
        <p className="font-medium line-clamp-3 px-3 text-xs mt-3">{item?.dataDetals.Description}</p>
        <button className="px-4 py-2 bg-green-200 text-xs font-bold absolute bottom-11 rounded-t-full mt-3">
          Download
        </button>
      </div>

      <div className="bg-[#F9E0E3] flex font-semibold  divide-x-2 z-20 relative">
        <button className="flex-1 p-3">{item?.dataDetals.Size || "-"}</button>
        <button className="flex-1 p-3">{item?.dataDetals.Resolution || "-"}</button>
      </div>
    </Link>
  );
};
