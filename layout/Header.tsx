"use client";
import BarsIcon from "@/assets/svgs/BarsIcon";
import InternetIcon from "@/assets/svgs/InternetIcon";
import ShapesIcon from "@/assets/svgs/ShapesIcon";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

// const TagsData = ["Girl", "Boy", "Cartoon", "Character", "Anime", "Zombie"];
const Languages = [
  { name: "English", prefix: "en" },
  { name: "French", prefix: "fr" },
  { name: "Spanish", prefix: "es" },
  { name: "German", prefix: "de" },
  { name: "Portuguese", prefix: "pt" },
];

function Header() {
  const [currentLocale, setCurrentLocale] = useState("English");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openLinks, setOpenLinks] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdown2Ref = useRef<HTMLDivElement>(null);
  const LangdropdownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const btnRef2 = useRef<HTMLButtonElement>(null);
  const LangbtnRef = useRef<HTMLButtonElement>(null);

  const LNav = useTranslations("NavbarLinks");
  const LCat = useTranslations();
  const TagsData = LCat.raw("Cats");

  const locale = useLocale();

  useEffect(() => {
    setCurrentLocale(locale);

    switch (locale) {
      case "en": {
        return setCurrentLocale("English");
      }
      case "fr": {
        return setCurrentLocale("French");
      }
      case "es": {
        return setCurrentLocale("Spanish");
      }
      case "de": {
        return setCurrentLocale("German");
      }
      case "pt": {
        return setCurrentLocale("Portuguese");
      }

      default: {
        return setCurrentLocale("English");
      }
    }
  }, [locale]);

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
    function handleClickOutside(e: MouseEvent) {
      if (
        LangbtnRef.current &&
        LangdropdownRef.current &&
        !LangbtnRef.current.contains(e.target as Node) &&
        !LangdropdownRef.current.contains(e.target as Node)
      ) {
        setOpen2(false);
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
      <header className="bg-[#FFFFFF80] py-5 px-5 flex justify-between  sticky top-0  backdrop-blur-[4px] z-30">
        <button onClick={() => setDrawer(true)} className="block md:hidden">
          <BarsIcon />
        </button>

        <ul className=" gap-8 items-center font-bold hidden md:flex text-lg">
          <li>
            <Link href="/">{LNav("home")}</Link>
          </li>
          <li className="relative">
            <button ref={btnRef2} onClick={() => setOpenLinks(!openLinks)} className="flex items-center gap-1">
              {LNav("trends")} <Image src={"/arrowDown.svg"} alt="" width={10} height={10} />{" "}
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
            <Link href="/terms">{LNav("policy")}</Link>
          </li>
          <li>
            <Link href="#">{LNav("about")}</Link>
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
              <span className=" hidden md:block font-semibold text-sm">{LNav("categories")}</span>
            </button>
            {/* dropdown */}
            {open && (
              <div
                ref={dropdownRef}
                onClick={() => null}
                className="bg-white absolute top-[85%] left-[50%] -translate-x-1/2 md:translate-x-0 md:left-0 mt-2 w-full rounded-b-3xl shadow-lg overflow-hidden min-w-20"
              >
                {TagsData.slice(0, 4).map((tag: string, index: number) => (
                  <Link
                    href={`/?category=${tag}`}
                    key={index}
                    onClick={() => setOpen(false)}
                    className="px-2 py-3 hover:bg-slate-100 w-full text-center block "
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              ref={LangbtnRef}
              onClick={() => setOpen2(!open2)}
              className={`  ${
                open2 ? "rounded-t-3xl" : "rounded-full"
              }  hover:bg-slate-100 transition-colors bg-white shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D]  md:px-4 flex items-center p-2`}
            >
              <InternetIcon />
              <span className="text-sm font-semibold hidden md:block">{currentLocale}</span>
            </button>

            {/* dropdown */}
            {open2 && (
              <div
                ref={LangdropdownRef}
                onClick={() => null}
                className="bg-white absolute top-[85%] left-[50%] -translate-x-1/2 md:translate-x-0 md:left-0 mt-2 w-full rounded-b-3xl shadow-lg overflow-hidden min-w-20"
              >
                {Languages.map((lang, index) => (
                  <Link
                    href={`/`}
                    locale={lang.prefix}
                    key={index}
                    onClick={() => setOpen(false)}
                    className="px-2 py-3 hover:bg-slate-100 w-full text-center block "
                  >
                    {lang.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
            <Link
              // href="/copyright-policy"
              href="/terms"
              onClick={() => setDrawer(false)}
              className="block py-3 text-lg font-semibold"
            >
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
