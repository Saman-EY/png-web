import { IImageData, PngItemT } from "@/types";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export const PngOverlayCard = ({ item }: { item: IImageData }) => {
  return (
    <Link
      href={`/${item.id}`}
      key={item.id}
      className="mb-4 border rounded-3xl overflow-hidden shadow-md h-fit w-fit mx-auto relative block"
    >
      <Image
        width={500}
        height={500}
        src={item.display_url}
        alt={item.title}
        className="w-full object-cover min-h-40"
      />

      <div className="bg-white/70 absolute px-5 py-2 bottom-0 text-sm left-0 right-0 font-bold">
        {item.title}
      </div>
    </Link>
  );
};
