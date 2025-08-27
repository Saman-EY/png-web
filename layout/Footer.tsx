import RightArrow from "@/assets/svgs/RightArrow";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React, { use } from "react";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");

  const b = useTranslations();
  const Cats = b.raw("Cats");

  return (
    <footer className="bg-[#FFFFFF80]  pt-10 md:pt-20 px-4 pb-10 ">
      <section className="w-full max-w-[1180px] mx-auto ">
        {/* first row */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-3 md:flex-nowrap  md:flex-row md:justify-between md:items-start ">
          <Link href="/">
            <Image
              src="/logo.svg"
              className="w-full h-[60px]  md:w-[280px] md:h-[80px] "
              alt="logo"
              width={210}
              height={60}
            />
          </Link>

          {/* links */}
          <ul className="flex flex-col gap-3">
            <Link href={"/"}>
              <h6 className="font-bold text-xl">{t("home")}</h6>
            </Link>
            <li className="text-slate-500 text-sm">
              <Link href="/">{t("aboutus")}</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="/terms">{t("privacy")}</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 lg:mr-40">
            <h6 className="font-bold text-xl">{t("categories")}</h6>
            <li className="text-slate-500 text-sm">
              <Link href={`/?category=${Cats[0]}`}>{Cats[0]}</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href={`/?category=${Cats[1]}`}>{Cats[1]}</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href={`/?category=${Cats[2]}`}>{Cats[2]}</Link>
            </li>
          </ul>
          {/* <ul className="flex flex-col gap-3">
            <h6 className="font-bold text-xl">{t("company")}</h6>
            <li className="text-slate-500 text-sm">
              <Link href="#">{t("aboutus")}</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">{t("partners")}</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">{t("customers")}</Link>
            </li>
            <li className="text-slate-500 text-sm">
              <Link href="#">{t("contactUs")}</Link>
            </li>
          </ul> */}
        </div>

        {/* second row */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* card */}
          <div className="bg-[#DCEFFE80] rounded p-6 md:px-10 relative w-full max-w-[340px] md:shrink-0 mt-5 md:-mt-10">
            {/* <div className="flex flex-col px-2"> */}
            <h6 className="font-bold text-lg mb-3">{t("subscribe")}</h6>
            <div className="flex">
              <input
                type="text"
                className="border border-slate-300 py-2 px-4 rounded-lg border-r-0 rounded-r-none w-full max-w-44"
                placeholder={t("inputPlaceholder")}
              />
              <button className="bg-black h-[41px] border border-black w-[50px]  shrink-0 min-w-10 rounded-r-lg hover:bg-black/80 transition-all flex items-center justify-center">
                <RightArrow />
              </button>
            </div>

            <p className="text-slate-500 text-sm mt-10 max-w-60 w-full">{t("subText")}</p>
            {/* </div> */}
          </div>

          {/* bottom bar  */}
          <div className="border-t border-slate-300 pt-8 px-6 mt-5 md:-mt-10 w-full">
            <div className="flex flex-wrap gap-5 md:flex-nowrap items-center justify-between">
              {/* links */}
              <div className="flex items-center flex-wrap gap-8 text-black font-bold">
                <a href="#">{t("terms")}</a>
                <a href="#">{t("privacy")}</a>
                <a href="#">{t("cookies")}</a>
              </div>

              {/* socials */}
              <div className="flex items-center gap-5">
                <a href="#">
                  <Image className="w-[35px] h-[35px]" src="/Facebook.svg" alt="Facebook" width={35} height={35} />
                </a>
                <a href="#">
                  <Image className="w-[35px] h-[35px]" src="/Twitter.svg" alt="Twitter" width={35} height={35} />
                </a>
                <a href="#">
                  <Image className="w-[35px] h-[35px]" src="/Linkedin.svg" alt="Linkedin" width={35} height={35} />
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
