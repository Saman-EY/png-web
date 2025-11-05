"use client";
import { IImageData, IMeta } from "@/types";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Pagination from "@/app/[locale]/(dashboard)/components/Pagination";

function PNGContainer({ data, meta }: { data: IImageData[]; meta: IMeta }) {
  // const { data: temp, isLoading, isError } = useLandingPngsQry();
  // console.log("*PNGContainer data:", temp);

  // const t = useTranslations("Landing");

  return (
    <>
      <section className="columns-1 sm:columns-3 md:columns-4 lg:columns-5 gap-4 mt-5">
        {data.map((png) => (
          <div key={png.id} className="mb-4 break-inside-avoid">
            <PngCard item={png} />
          </div>
        ))}
      </section>

      <Pagination meta={meta} />

      {data.length === 0 && <div className="text-center text-xl text-gray-500 mt-10">No results found.</div>}
    </>
  );
}

export default PNGContainer;

export const PngCard = ({ item }: { item: IImageData }) => {
  // const slug = getSlug(item.href);

  return (
    <Link
      href={`/${item?.id}`}
      className="border group relative rounded-3xl overflow-hidden shadow-md h-fit w-fit mx-auto block"
    >
      <Image
        className=" min-h-40 object-cover"
        width={+item.width}
        height={+item.height}
        src={`${item.display_url}`}
        alt={item?.original_file_name}
      />

      {/* hover */}
      <div className=" opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all  absolute top-0 left-0 w-full h-full bg-white/70 z-20 flex flex-col justify-center items-center">
        <span className="truncate px-3 font-semibold text-lg w-full text-center">{item?.original_file_name}</span>
        <p className="font-medium line-clamp-3 px-3 text-xs mt-3">{item?.description}</p>
        <button className="px-4 py-2 bg-green-200 text-xs font-bold absolute bottom-11 rounded-t-full mt-3">
          Download
        </button>
      </div>

      <div className="bg-[#F9E0E3] flex font-semibold  divide-x-2 z-20 relative">
        <button className="flex-1 p-3">{item?.file_size || "-"}</button>
        <button className="flex-1 p-3">{item?.resolution || "-"}</button>
      </div>
    </Link>
  );
};
