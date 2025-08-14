"use client";
import BarsIcon from "@/assets/svgs/BarsIcon";
import InternetIcon from "@/assets/svgs/InternetIcon";
import ShapesIcon from "@/assets/svgs/ShapesIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [openLinks, setOpenLinks] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdown2Ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const btnRef2 = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        btnRef.current &&
        dropdownRef.current &&
        !btnRef.current.contains(e.target as Node) &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        btnRef2.current &&
        !btnRef2.current.contains(event.target as Node) &&
        dropdown2Ref.current &&
        !dropdown2Ref.current.contains(event.target as Node)
      ) {
        setOpenLinks(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      <header className="bg-[#FFFFFF80] py-5 px-5 flex justify-between  sticky top-0 backdrop-blur-[4px]">
        <button onClick={() => setDrawer(true)} className="block md:hidden">
          <BarsIcon />
        </button>

        <ul className=" gap-8 items-center font-bold hidden md:flex text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            <button ref={btnRef2} onClick={() => setOpenLinks(!openLinks)} className="flex items-center gap-1">
              Trends <Image src={"/arrowDown.svg"} alt="" width={10} height={10} />{" "}
            </button>
            {/* dropdown */}
            {openLinks && (
              <div
                ref={dropdown2Ref}
                onClick={() => setOpenLinks(false)}
                className="bg-white absolute top-[85%] left-0 mt-2 min-w-28 max-w-30 rounded-lg shadow-lg overflow-hidden  flex flex-col"
              >
                <Link
                  href={"/"}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 hover:bg-slate-100 w-full font-light text-sm truncate"
                >
                  Menu item
                </Link>
                <Link
                  href={"/"}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 hover:bg-slate-100 w-full font-light text-sm truncate"
                >
                  Menu item
                </Link>
                <Link
                  href={"/"}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 hover:bg-slate-100 w-full font-light text-sm truncate"
                >
                  Menu item
                </Link>
                <Link
                  href={"/"}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 hover:bg-slate-100 w-full font-light text-sm truncate"
                >
                  Menu item
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/copyright-policy">Policy</Link>
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
          <div className="relative">
            <button
              ref={btnRef}
              onClick={() => setOpen(!open)}
              className={` ${
                open ? "rounded-t-3xl" : "rounded-full"
              }  hover:bg-slate-100 transition-colors bg-white shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D]  md:px-4 flex items-center p-2`}
            >
              <ShapesIcon />
              <span className=" hidden md:block font-semibold text-sm">Categories</span>
            </button>
            {/* dropdown */}
            {open && (
              <div
                ref={dropdownRef}
                onClick={() => null}
                className="bg-white absolute top-[85%] left-[50%] -translate-x-1/2 md:translate-x-0 md:left-0 mt-2 w-full rounded-b-3xl shadow-lg overflow-hidden min-w-20"
              >
                <button onClick={() => setOpen(false)} className="px-2 py-3 hover:bg-slate-100 w-full">
                  Animals
                </button>
                <button onClick={() => setOpen(false)} className="px-2 py-3 hover:bg-slate-100 w-full">
                  Food
                </button>
                <button onClick={() => setOpen(false)} className="px-2 py-3 hover:bg-slate-100 w-full">
                  Flowers
                </button>
                <button onClick={() => setOpen(false)} className="px-2 py-3 hover:bg-slate-100 w-full">
                  Hearts
                </button>
              </div>
            )}
          </div>
          <button className="hover:bg-slate-100 w-[43px] h-[43px] md:w-auto md:h-auto transition-all bg-white shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D] rounded-full p-2 md:px-4 flex items-center ">
            <InternetIcon />
            <span className="text-sm font-semibold hidden md:block">English</span>
          </button>
        </div>
        {/* </div> */}
      </header>
      {/* MOBILE DRAWER */}
      <div
        onClick={() => setDrawer(false)}
        className={`bg-black/80  ${
          drawer ? "visible opacity-100" : "invisible opacity-0"
        } fixed w-full h-full inset-0 z-40 transition-all`}
      />
      <div
        className={`fixed  ${
          drawer ? "translate-x-0" : "-translate-x-full"
        } transition-all left-0 top-0 w-[60vw] bg-[#F9E0E3] p-5 h-full z-50 shadow-xl`}
      >
        <ul>
          <li>
            <Link href="/" onClick={() => setDrawer(false)} className="block py-3 text-lg font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/copyright-policy" onClick={() => setDrawer(false)} className="block py-3 text-lg font-semibold">
              Policy
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setDrawer(false)} className="block py-3 text-lg font-semibold">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
