import Image from "next/image";

function Dashboard() {
  return (
    <section>
      {/* card container */}
      <div className="w-full max-w-[1320px] mx-auto mt-10 flex gap-5 justify-center">
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
    </section>
  );
}

export default Dashboard;
