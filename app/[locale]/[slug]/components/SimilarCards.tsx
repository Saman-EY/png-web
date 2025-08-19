import { PngItemT } from "@/types";
import { PngOverlayCard } from "./PngOverlayCard";
import { useTranslations } from "next-intl";

export const SimilarCards = ({ landingData }: { landingData: PngItemT[] }) => {
  const t = useTranslations("Details");

  return (
    <section className="w-full max-w-[1100px] mx-auto">
      <h2 className="text-2xl font-bold mb-10">{t('similar')}</h2>

      <section className="columns-1 sm:columns-3 md:columns-4 lg:columns-5 gap-4 mt-5 mb-10">
        {landingData.slice(0, 15).map((png: PngItemT) => (
          <PngOverlayCard item={png} key={png.href} />
        ))}
      </section>
    </section>
  );
};
