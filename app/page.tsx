import Image from "next/image";

export default function Home() {
  // return null;

  return (
    <section className="w-full max-w-[1320px] mx-auto pb-10 pt-5 px-5">
      {/* titles */}
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className="font-bold text-lg sm:text-3xl  flex items-center gap-3 ">
          {/* <Image src="/lock.svg" className="w-10 " alt="logo" width={60} height={82} />  */}
          Free PNG Image
        </h1>
        <h6 className="text-lg">With Transparent Backgrounds</h6>
      </div>
      LANDING PAGE
    </section>
  );
}
