import { PngItemT } from "@/types";
import { getSlug } from "@/utils/functions";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export const PngOverlayCard = ({ item }: { item: PngItemT }) => {
  const slug = getSlug(item.href);

  return (
    <Link
      href={`/${slug}`}
      key={item.href}
      className="mb-4 border rounded-3xl overflow-hidden shadow-md h-fit w-fit mx-auto relative block"
    >
      <Image
        width={+item.width}
        height={+item.height}
        src={item["data-original"]}
        alt={item.title}
        className="w-full object-cover"
      />

      <div className="bg-white/70 absolute px-5 py-2 bottom-0 left-0 right-0 font-bold">{item.title}</div>
    </Link>
  );
};
