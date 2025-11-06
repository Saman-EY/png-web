import PNGContainer from "@/components/PNGContainer";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import SearchBox from "@/components/SearchBox";
import { getTranslations } from "next-intl/server";
import { ProductTag } from "@/types";
import TagsList from "./components/TagsList";

// Move the PNGContainer to a separate component that can be suspended

async function PNGContainerWithData({ searchParams, locale }: { searchParams: any; locale: string }) {
  try {
    // Base API endpoint
    let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;

    if (searchParams && Object.keys(searchParams).length > 0) {
      // ✅ Create URLSearchParams instance from params
      const query = new URLSearchParams(searchParams as Record<string, string>);

      // ✅ Always keep locale
      if (locale) query.set("locale", locale);

      endpoint += `?${query.toString()}`;
    } else if (locale) {
      // ✅ if no other params, just add locale
      endpoint += `?locale=${locale}`;
    }

    // Fetch data
    const response = await fetch(endpoint);

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    // console.log("**loca", endpoint, searchParams, locale);

    return <PNGContainer meta={data?.meta} data={data?.data} />;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div className="text-red-500 p-4">Failed to load images. Please try again later.</div>;
  }
}

export default async function Home({
  searchParams,
  params,
}: {
  searchParams: Promise<{
    search?: string;
    tag?: string;
    per_page?: string;
    locale?: string;
    page?: string;
  }>;
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("Landing");
  const params2 = await searchParams;
  const { locale } = await params;

  // console.log("**8", locale);

  // set default per_page
  if (!params2.per_page) params2.per_page = "42";

  let tagsData: ProductTag[] = [];

  const tagsEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/tags?page=1&per_page=5&search=&sort_by=name&sort_order=desc`;
  try {
    const response = await fetch(tagsEndpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    tagsData = data?.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

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
        <TagsList list={tagsData} />
      </div>

      {/* PNGs CONTAINER */}
      {/* Dynamic content with loading fallback */}
      <Suspense fallback={<Loader />}>
        <PNGContainerWithData locale={locale} searchParams={params2} />
      </Suspense>
    </section>
  );
}
