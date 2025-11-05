import { IMostDownloadStat, tableT } from "@/types";
import Image from "next/image";

function CustomTable({ data, header }: { data?: IMostDownloadStat[]; header: any }) {
  return (
    <div className="w-full max-w-[950px] mx-auto my-5 bg-white shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] rounded-2xl p-5 overflow-x-auto">
      <div className="flex items-center justify-between mb-5 ">
        <h6 className="text-base font-bold text-stone-700  min-w-50">{header.title1}</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">{header.title2}</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">{header.title3}</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">{header.title4}</h6>
      </div>

      <section className="flex flex-col gap-5 ">
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className=" min-w-50 text-start font-bold flex items-center gap-1">
              <Image src={"/tableicon.svg"} width={37} height={37} alt="" />
              hot-deal.png
            </span>
            <span className=" w-30 truncate text-center">1.248</span>
            <span className=" w-30 truncate text-center">3000*3000</span>
            <span className=" w-30 truncate text-center">Jun 2025</span>
          </div>
        ))} */}
        {data?.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm  ">
            <span className="shrink-0 min-w-50 max-w-50 text-start font-bold flex items-center truncate gap-1">
              <Image src={item.display_url} width={37} height={37} alt="" />
              {item.title}
            </span>
            <span className="shrink-0 w-30 truncate text-center">{item.downloads_count}</span>
            <span className="shrink-0 w-30 truncate text-center">{item.views_count}</span>
            <span className="shrink-0 w-30 truncate text-center">
              {item.created_at ? new Date(item.created_at).toLocaleDateString() : ""}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CustomTable;
