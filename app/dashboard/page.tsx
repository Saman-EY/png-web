import Image from "next/image";
import Link from "next/link";
import BrokenImage from "./components/BrokenImage";
import CustomTable from "./components/CustomTable";
import Chart from "./components/Chart";

async function Dashboard({ searchParams }: { searchParams: Promise<{ tab?: string | undefined }> }) {
  const { tab } = await searchParams; // "search"

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
            <h6 className="font-bold">Most viewd</h6>
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
            <h6 className="font-bold">Most downloaded</h6>
            <span>hot-deal.org</span>
          </div>
        </Link>

        <Link
          href={"/dashboard?tab=traffic-by-search"}
          className="rounded-2xl bg-white px-4 py-4 flex items-center justify-center gap-3 w-full max-w-55 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]"
        >
          <span className="rounded-full hidden md:flex w-10 h-10 bg-[#F9E0E3] items-center justify-center shrink-0">
            <Image className="mr-1" src="/earth.svg" alt="logo" width={18} height={18} />
          </span>
          <div className="flex flex-col gap-5 text-sm flex-1">
            <h6 className="font-bold">Traffic source by search engine</h6>
            <span>Google</span>
          </div>
        </Link>

        <Link
          href={"/dashboard?tab=traffic-by-country"}
          className="rounded-2xl bg-white px-4 py-4 flex items-center justify-center gap-3 w-full max-w-55 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]"
        >
          <span className="rounded-full hidden md:flex w-10 h-10 bg-[#F9E0E3] items-center justify-center shrink-0">
            <Image className="mr-1" src="/steeringWheel.svg" alt="logo" width={18} height={18} />
          </span>
          <div className="flex flex-col gap-5 text-sm flex-1">
            <h6 className="font-bold">Traffic source by country</h6>
            <span>Iran</span>
          </div>
        </Link>
      </div>

      <section className="px-5">
        {tab === "most-viewd" ? (
          <CustomTable data={topViewedData} />
        ) : tab === "most-downloaded" ? (
          <CustomTable data={topViewedData} />
        ) : tab === "traffic-by-search" ? (
          <CustomTable data={searchEngineData} />
        ) : tab === "traffic-by-country" ? (
          <CustomTable data={countryData} />
        ) : (
          <CustomTable data={topViewedData} />
        )}

        <BrokenImage />

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
const searchEngineData = {
  isIcon: false,

  header: {
    title1: "Search Engine",
    title2: "Visits",
    title3: "Percentage",
    title4: "Date",
  },

  data: [
    {
      content1: "Google",
      content2: "1.200",
      content3: "75%",
      content4: "Jun 2025",
    },
    {
      content1: "Google",
      content2: "1.200",
      content3: "75%",
      content4: "Jun 2025",
    },
    {
      content1: "Google",
      content2: "1.200",
      content3: "75%",
      content4: "Jun 2025",
    },
    {
      content1: "Google",
      content2: "1.200",
      content3: "75%",
      content4: "Jun 2025",
    },
    {
      content1: "Google",
      content2: "1.200",
      content3: "75%",
      content4: "Jun 2025",
    },
  ],
};

const countryData = {
  isIcon: false,

  header: {
    title1: "Country",
    title2: "Visitors",
    title3: "Percentage",
    title4: "Date",
  },

  data: [
    {
      content1: "Iran",
      content2: "United States",
      content3: "75%",
      content4: "Jun 2025",
    },
    {
      content1: "Iran",
      content2: "United States",
      content3: "75%",
      content4: "Jun 2025",
    },
    {
      content1: "Iran",
      content2: "United States",
      content3: "75%",
      content4: "Jun 2025",
    },
    {
      content1: "Iran",
      content2: "United States",
      content3: "75%",
      content4: "Jun 2025",
    },
    {
      content1: "Iran",
      content2: "United States",
      content3: "75%",
      content4: "Jun 2025",
    },
  ],
};
