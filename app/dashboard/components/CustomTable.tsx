import { tableT } from "@/types";
import Image from "next/image";

function CustomTable({ data }: { data?: tableT }) {
  return (
    <div className="w-full max-w-[950px] mx-auto my-5 bg-white shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] rounded-2xl p-5">
      {/* <div className="flex items-center justify-between mb-5">
        <h6 className="text-base font-bold text-stone-700  min-w-50">Top Viewed PNGs</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Size</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Resolution</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Date</h6>
      </div> */}
      <div className="flex items-center justify-between mb-5">
        <h6 className="text-base font-bold text-stone-700  min-w-50">{data?.header.title1}</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">{data?.header.title2}</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">{data?.header.title3}</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">{data?.header.title4}</h6>
      </div>

      <section className="flex flex-col gap-5">
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
        {data?.data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className=" min-w-50 text-start font-bold flex items-center gap-1">
              {data?.isIcon && <Image src={"/tableicon.svg"} width={37} height={37} alt="" />}
              {item.content1}
            </span>
            <span className=" w-30 truncate text-center">{item.content2}</span>
            <span className=" w-30 truncate text-center">{item.content3}</span>
            <span className=" w-30 truncate text-center">{item.content4}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CustomTable;
