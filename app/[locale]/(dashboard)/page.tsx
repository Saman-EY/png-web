import PNGContainer from "@/components/PNGContainer";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import SearchBox from "@/components/SearchBox";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const TagsData = ["Girl", "Boy", "Cartoon", "Character", "Anime", "Zombie"];

// Move the PNGContainer to a separate component that can be suspended
async function PNGContainerWithData() {
  try {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cleanpng.landing.json`);
    // const detailsData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/details.json`);

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mixpng.json`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);

    return <PNGContainer data={data} />;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load images. Please try again later.</div>;
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string | undefined; category?: string | undefined }>;
}) {
  const { category, search } = await searchParams;

  const t = await getTranslations("Landing");

  // console.log("**queries", category, search);

  const currentQuery = search ? `search=${search}` : "";

  return (
    <section className="w-full max-w-[1320px] mx-auto pb-10 pt-5 px-5">
      {/* titles */}
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className="font-bold text-lg sm:text-3xl  flex items-center gap-3 ">
          <Image
            src="/magnet.svg"
            className="w-[58px] h-[58px] md:w-[78px] md:h-[78px]"
            alt="logo"
            width={78}
            height={78}
          />
          {t("title")}
        </h1>
        <h6 className="text-lg font-semibold">{t("subtitle")}</h6>
      </div>

      {/* SEARCH BOX */}
      <SearchBox />

      {/* Tags */}
      <div className="flex items-center justify-center flex-wrap gap-2 mt-5 mb-10">
        {TagsData.map((tag, index) => (
          <Link
            href={category === tag ? `?${currentQuery}` : `?${currentQuery ? `${currentQuery}&` : ""}category=${tag}`}
            key={index}
            className={`border border-white rounded-full px-6 py-2   ${
              category === tag ? "bg-white" : "bg-green-300"
            }  text-black font-semibold`}
          >
            {tag}
          </Link>
        ))}
      </div>

      {/* <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="5884048699" /> */}

      {/* PNGs CONTAINER */}
      {/* Dynamic content with loading fallback */}
      <Suspense
        fallback={
          // <div className="flex justify-center py-10">
          //   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          // </div>
          <Loader />
        }
      >
        <PNGContainerWithData />
      </Suspense>
    </section>
  );
}
