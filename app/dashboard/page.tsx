import Image from "next/image";

function Dashboard() {
  return (
    <section>
      {/* card container */}
      <div className="w-full max-w-[1320px] mx-auto mt-10 mb-5 flex gap-5 justify-center ">
        {/* carad */}
        <div className="rounded-2xl bg-white px-4 py-4 flex items-center justify-center gap-3 w-full max-w-55 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
          <span className="rounded-full w-10 h-10 flex bg-[#F9E0E3] items-center justify-center shrink-0">
            <Image className="mr-1" src="/eyeIcon.svg" alt="logo" width={18} height={18} />
          </span>
          <div className="flex flex-col gap-5 text-sm flex-1">
            <h6 className="font-bold">Most viewd</h6>
            <span>hot-deal.org</span>
          </div>
        </div>
        <div className="rounded-2xl bg-white px-4 py-4 flex items-center justify-center gap-3 w-full max-w-55 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
          <span className="rounded-full w-10 h-10 flex bg-[#F9E0E3] items-center justify-center shrink-0">
            <Image className="mr-1" src="/arrowLongDown.svg" alt="logo" width={18} height={18} />
          </span>
          <div className="flex flex-col gap-5 text-sm flex-1">
            <h6 className="font-bold">Most downloaded</h6>
            <span>hot-deal.org</span>
          </div>
        </div>

        <div className="rounded-2xl bg-white px-4 py-4 flex items-center justify-center gap-3 w-full max-w-55 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
          <span className="rounded-full w-10 h-10 flex bg-[#F9E0E3] items-center justify-center shrink-0">
            <Image className="mr-1" src="/earth.svg" alt="logo" width={18} height={18} />
          </span>
          <div className="flex flex-col gap-5 text-sm flex-1">
            <h6 className="font-bold">Traffic source by search engine</h6>
            <span>Google</span>
          </div>
        </div>

        <div className="rounded-2xl bg-white px-4 py-4 flex items-center justify-center gap-3 w-full max-w-55 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]">
          <span className="rounded-full w-10 h-10 flex bg-[#F9E0E3] items-center justify-center shrink-0">
            <Image className="mr-1" src="/steeringWheel.svg" alt="logo" width={18} height={18} />
          </span>
          <div className="flex flex-col gap-5 text-sm flex-1">
            <h6 className="font-bold">Traffic source by country</h6>
            <span>Iran</span>
          </div>
        </div>
      </div>

      <TopViewedTable />
    </section>
  );
}

export default Dashboard;

const TopViewedTable = () => {
  return (
    <div className="w-full max-w-[950px] mx-auto my-5 bg-white shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h6 className="text-base font-bold text-stone-700  min-w-50">Top Viewed PNGs</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Size</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Resolution</h6>
        <h6 className="text-base font-bold text-stone-700  min-w-30 text-center">Date</h6>
      </div>
      {/* Table or list of top viewed items would go here */}

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <span className=" min-w-50 text-start font-bold">hot-deal.png</span>
          <span className=" min-w-30 text-center">1.248</span>
          <span className=" min-w-30 text-center">3000*3000</span>
          <span className=" min-w-30 text-center">Jun 2025</span>
        </div>
      </section>
    </div>
  );
};
