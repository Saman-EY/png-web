import { IImageData, PngItemT } from "@/types";
import { PngOverlayCard } from "./PngOverlayCard";
import { useTranslations } from "next-intl";

export const SimilarCards = ({ landingData }: { landingData: IImageData[] }) => {
  const t = useTranslations("Details");

  return (
    <section className="w-full max-w-[1100px] mx-auto">
      <h2 className="text-2xl font-bold mb-10">{t("similar")}</h2>

      <section className="columns-1 sm:columns-3 md:columns-4 lg:columns-5 gap-4 mt-5 mb-10">
        {landingData.map((png) => (
          <PngOverlayCard item={png} key={png.id} />
        ))}
      </section>
    </section>
  );
};

// description: "Kostenlose Grafik, Analyse, Trends, Visualisierung, Statistik PNG in hochwertiger transparenter Auflösung für persönliche Designprojekte. Dieser Png ist in hochwertiger Auflösung für den persönlichen Gebrauch erhältlich.";
// display_url: "https://packagemahdi.ir/img/webp/Graph-PNG-Clipart.webp";
// downloads_count: "0";
// id: 1;
// similarity_score: 0.43;

// title: "Graph, Analyse, Trends, Visualisierung, Statistik PNG";
// views_count: "0";
