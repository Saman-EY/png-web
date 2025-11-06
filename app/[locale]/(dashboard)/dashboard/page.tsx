"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import CustomTable from "./components/CustomTable";
import Chart from "./components/Chart";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useGetMeQry, useGetMostDownloadedQry, useGetMostViewQry } from "@/hooks/queries";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const DownloadHeader = {
  title1: "Top Download PNGs",
  title2: "Downloads Count",
  title3: "Views Count",
  title4: "Date",
};

function Dashboard() {
  const searchParams = useSearchParams();
  const [period, setPeriod] = useState("week");
  const [limit, setlimit] = useState(20);
  const tab = searchParams.get("tab") || "default";
  const t = useTranslations("Dashboard");

  const { data } = useGetMostDownloadedQry({ limit, period });
  const { data: mostViewData } = useGetMostViewQry({ limit, period });
  const { data: myData } = useGetMeQry();

  useEffect(() => {}, [data]);

  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    window.location.href = "/";
  };

  const formatedView = mostViewData?.data.map((item: any) => ({
    title: item.title,
    download: Number(item.downloads_count),
    view: Number(item.views_count),
  }));
  const formatedDownload = data?.data.map((item: any) => ({
    title: item.title,
    download: Number(item.downloads_count),
    view: Number(item.views_count),
  }));

  console.log("*dashboard", mostViewData?.data, formatedView);
  // console.log(formatedView);

  return (
    <section>
      <section className="py-2 w-full bg-white">
        <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between ">
          <h6>
            Account Name: <span className="text-blue-400">{myData?.user?.name} </span>{" "}
          </h6>
          <button onClick={handleLogout} className="bg-red-500 px-5 rounded-md text-white">
            Logout
          </button>
        </div>
      </section>

      {/* card container */}
      <div className="w-full max-w-[1320px] mx-auto mt-10 mb-5 flex flex-wrap gap-5 justify-center ">
        {/* carad */}
        <Link
          href={"/dashboard?tab=most-viewd"}
          className="rounded-2xl bg-white px-4 py-4 flex items-center justify-center gap-3 w-full max-w-55 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]"
        >
          <span className="rounded-full hidden md:flex w-10 h-10 bg-[#F9E0E3] items-center justify-center shrink-0">
            <Image className="mr-1" src="/eyeIcon.svg" alt="logo" width={18} height={18} />
          </span>
          <div className="flex flex-col gap-5 text-sm flex-1">
            <h6 className="font-bold">{t("mostViewd")}</h6>
            {/* <span>hot-deal.org</span> */}
          </div>
        </Link>

        <Link
          href={"/dashboard?tab=most-downloaded"}
          className="rounded-2xl bg-white px-4 py-4 flex items-center justify-center gap-3 w-full max-w-55 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]"
        >
          <span className="rounded-full hidden md:flex w-10 h-10 bg-[#F9E0E3] items-center justify-center shrink-0">
            <Image className="mr-1" src="/arrowLongDown.svg" alt="logo" width={18} height={18} />
          </span>
          <div className="flex flex-col gap-5 text-sm flex-1">
            <h6 className="font-bold">{t("mostDownloaded")}</h6>
            {/* <span>hot-deal.org</span> */}
          </div>
        </Link>
      </div>

      <section className="px-5 items-center ">
        <div className="w-full max-w-[950px] flex items-center gap-5 mx-auto">
          {/* Period Dropdown */}
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="border border-gray-300 shadow rounded bg-white px-3 py-1"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="all">All Time</option>
          </select>
          <select
            value={limit}
            onChange={(e) => setlimit(+e.target.value)}
            className="border border-gray-300 shadow rounded bg-white px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
        </div>

        {tab === "most-viewd" ? (
          <CustomTable header={DownloadHeader} data={mostViewData?.data} />
        ) : tab === "most-downloaded" ? (
          <CustomTable header={DownloadHeader} data={data?.data} />
        ) : (
          <CustomTable header={DownloadHeader} data={data?.data} />
        )}
        {tab === "most-viewd" ? (
          <Chart data={formatedView} />
        ) : tab === "most-downloaded" ? (
          <Chart data={formatedDownload} />
        ) : (
          <Chart data={formatedDownload} />
        )}
      </section>
    </section>
  );
}

export default Dashboard;
