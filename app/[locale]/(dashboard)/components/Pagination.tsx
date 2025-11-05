"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface IMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  search_query?: string | null;
  tag_filter?: string | null;
  locale?: string;
  sort_by?: string;
  sort_order?: string;
}

function Pagination({ meta }: { meta: IMeta }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  if (!meta || meta.last_page <= 1) return null;

  const { current_page, last_page } = meta;

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    if (!params.has("per_page")) {
      params.set("per_page", "42"); // 👈 always keep this
    }
    return `${pathname}?${params.toString()}`;
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    // ✅ Always show first page
    pages.push(1);

    if (last_page <= 7) {
      for (let i = 2; i <= last_page; i++) pages.push(i);
      return pages;
    }

    // ✅ Show start ellipsis
    if (current_page > 3) pages.push("...");

    // ✅ Middle pages
    const start = Math.max(2, current_page - 1);
    const end = Math.min(last_page - 1, current_page + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    // ✅ Show end ellipsis
    if (current_page < last_page - 2) pages.push("...");

    // ✅ Always show last page
    if (last_page > 1) pages.push(last_page);

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <section className="flex items-center gap-3 justify-center mt-8">
      <div className="flex items-center justify-center gap-2 text-gray-700 font-medium">
        {/* Prev Button */}
        {current_page > 1 && (
          <Link href={createPageLink(current_page - 1)} className="px-3 py-1 rounded hover:bg-gray-100">
            ←
          </Link>
        )}

        {/* Page Numbers */}
        {visiblePages.map((page, i) =>
          page === "..." ? (
            <span key={i} className="px-2">
              ...
            </span>
          ) : (
            <Link
              key={i}
              href={createPageLink(page as number)}
              className={`px-3 py-1 rounded ${current_page === page ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
            >
              {page}
            </Link>
          )
        )}

        {/* Next Button */}
        {current_page < last_page && (
          <Link href={createPageLink(current_page + 1)} className="px-3 py-1 rounded hover:bg-gray-100">
            →
          </Link>
        )}
      </div>
    </section>
  );
}

export default Pagination;
