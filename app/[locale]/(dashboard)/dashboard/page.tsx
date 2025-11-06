"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import CustomTable from "./components/CustomTable";
import Chart from "./components/Chart";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useGetMostDownloadedQry } from "@/hooks/queries";
import { useEffect, useState } from "react";

const DownloadHeader = {
  title1: "Top Download PNGs",
  title2: "Downloads Count",
  title3: "Views Count",
  title4: "Date",
};

function Dashboard() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "default";
  const t = useTranslations("Dashboard");
  const [mostDownload, setMostDownload] = useState();

  const { data } = useGetMostDownloadedQry();


  useEffect(() => {}, [data]);

  return (
    <section>
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
            <span>hot-deal.org</span>
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
            <span>hot-deal.org</span>
          </div>
        </Link>
      </div>

      <section className="px-5 items-center">
        {tab === "most-viewd" ? null : tab === "most-downloaded" ? (
          <CustomTable header={DownloadHeader} data={data?.data} />
        ) : (
          <CustomTable header={DownloadHeader} data={data?.data} />
        )}

        {/* CHART */}
        <Chart />
      </section>
    </section>
  );
}

export default Dashboard;

const topViewedData = {
  isIcon: true,

  header: {
    title1: "Top Viewed PNGs",
    title2: "Size",
    title3: "Resolution",
    title4: "Date",
  },

  data: [
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
  ],
};

const topDownloadData = {
  isIcon: true,

  header: {
    title1: "Top Download PNGs",
    title2: "Size",
    title3: "Resolution",
    title4: "Date",
  },

  data: [
    {
      img: "",
      title: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
    {
      content1: "hot-deal.png",
      content2: "1.248",
      content3: "3000*3000",
      content4: "Jun 2025",
    },
  ],
};
