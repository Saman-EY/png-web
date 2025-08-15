import Image from "next/image";
import React from "react";

function BrokenImage() {
  return (
    <div className="w-full max-w-[950px] mx-auto my-10 bg-white shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h6 className="text-base font-bold text-stone-700  min-w-50">Broken Image</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Image URL</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Status</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Actions</h6>
      </div>
      {/* Table or list of top viewed items would go here */}

      <section className="flex flex-col gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className=" min-w-50 text-start font-bold flex items-center gap-1">
              <Image src={"/tableicon.svg"} width={37} height={37} alt="" />
              hot-deal.png
            </span>
            <span className=" w-30 text-center truncate">https://www.cleanpng.com/...aaaaaaaaaaaaaaaaa</span>
            <span className=" w-30 text-center truncate text-red-500">404 Not Found</span>
            <span className=" w-30 text-center truncate text-blue-600">View/ Delete</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default BrokenImage;
