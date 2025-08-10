import BarsIcon from "@/assets/svgs/BarsIcon";
import InternetIcon from "@/assets/svgs/InternetIcon";
import ShapesIcon from "@/assets/svgs/ShapesIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-[#FFFFFF80] py-5 px-5 flex justify-between relative">
      <button className="block md:hidden">
        <BarsIcon />
      </button>

      <ul className=" gap-5 items-center font-bold hidden md:flex text-lg">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Trends</Link>
        </li>
        <li>
          <Link href="#">Policy</Link>
        </li>
        <li>
          <Link href="#">About Us</Link>
        </li>
      </ul>

      <Image
        src="/logo.svg"
        className="w-[107px] h-[30px] md:w-[160px] lg:w-[207px] md:h-[60px] absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2"
        alt="logo"
        width={210}
        height={60}
      />
      {/* <div className="w-fit gap-5 min-w-[67%] sm:min-w-[56%] flex items-center justify-between sm:gap-10 "> */}

      <div className="flex items-center gap-3">
        <button className="bg-white shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D] rounded-full p-2 md:px-4 flex items-center gap-2">
          <InternetIcon />
          <span className="mt-[2px] hidden md:block">English</span>
        </button>
        <button className="bg-white shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D] rounded-full md:px-4 flex items-center p-2">
          <ShapesIcon />
          <span className="mt-[2px] hidden md:block">Categories</span>
        </button>
      </div>
      {/* </div> */}
    </header>
  );
}

export default Header;
