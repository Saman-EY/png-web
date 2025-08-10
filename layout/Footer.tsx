import RightArrow from "@/assets/svgs/RightArrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#FFFFFF80]  pt-10 md:pt-20 px-4 pb-10">
      <section className="w-full max-w-[1180px] mx-auto ">
        {/* first row */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-3 md:flex-nowrap  md:flex-row md:justify-between md:items-start">
          <Image
            src="/logo.svg"
            className="w-full h-[60px]  md:w-[280px] md:h-[80px] "
            alt="logo"
            width={210}
            height={60}
          />
          
          {/* links */}
          <ul className="flex flex-col gap-3">
            <h6 className="font-bold text-xl">Home</h6>
            <li className="text-slate-500 text-sm">
              <Link href="#">Download</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">Search</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h6 className="font-bold text-xl">Categories</h6>
            <li className="text-slate-500 text-sm">
              <Link href="#">Animals</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">Color</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">Flowers</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h6 className="font-bold text-xl">Company</h6>
            <li className="text-slate-500 text-sm">
              <Link href="#">About us</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">Partners</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">Customers</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* second row */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* card */}
          <div className="bg-[#DCEFFE80] rounded p-6 px-10 relative w-[340px] md:shrink-0 mt-5 md:-mt-10">
            {/* <div className="flex flex-col px-2"> */}
            <h6 className="font-bold text-lg mb-3">Subscribe</h6>
            <div className="flex">
              <input
                type="text"
                className="border border-slate-300 py-2 px-4 rounded-lg border-r-0 rounded-r-none w-44"
                placeholder="Email adress"
              />
              <button className="bg-black h-[41px] border border-black w-[50px] rounded-r-lg hover:bg-black/80 transition-all flex items-center justify-center">
                <RightArrow />
              </button>
            </div>

            <p className="text-slate-500 text-sm mt-10 max-w-60 w-full">
              Hello, we are ABC. trying to make an effort to put the right people for you to get the best results. Just
              insight
            </p>
            {/* </div> */}
          </div>

          {/* bottom bar  */}
          <div className="border-t border-slate-300 pt-8 px-6 mt-5 md:-mt-10 w-full">
            <div className="flex flex-wrap gap-5 md:flex-nowrap items-center justify-between">
              {/* links */}
              <div className="flex items-center gap-8 text-black font-bold">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
              </div>

              {/* socials */}
              <div className="flex items-center gap-5">
                <a href="#">
                  <Image className="w-[35px] h-[35px]" src="/facebook.svg" alt="Facebook" width={35} height={35} />
                </a>
                <a href="#">
                  <Image className="w-[35px] h-[35px]" src="/twitter.svg" alt="Twitter" width={35} height={35} />
                </a>
                <a href="#">
                  <Image className="w-[35px] h-[35px]" src="/linkedin.svg" alt="Linkedin" width={35} height={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
