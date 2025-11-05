"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

function TagsList({ list }: { list: any[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <>
      {list.map((item) => {
        const currentTag = searchParams.get("tag");
        const params = new URLSearchParams(searchParams.toString());
        const isActive = currentTag === item.name;

        if (isActive) {
          // ✅ Remove tag if clicked again
          params.delete("tag");
        } else {
          // ✅ Add or change tag and reset pagination
          params.set("tag", item.name);
          params.set("page", "1");
        }

        const href = params.toString()
          ? `${pathname}?${params.toString()}`
          : pathname;

        return (
          <Link
            key={item.id}
            href={href}
            className={`border border-white rounded-full px-6 py-2 transition-all ${
              isActive ? "bg-white text-black" : "bg-green-300 text-black"
            } font-semibold`}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}

export default TagsList;
