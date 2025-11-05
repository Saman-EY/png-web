"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const t = useTranslations("Landing");

  useEffect(() => {
    setSearchValue(search ?? "");
  }, [search]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    // Clear previous debounce timer
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        params.set("search", value.trim());
      } else {
        params.delete("search");
      }

      params.set("page", "1");

      const queryString = params.toString();
      router.push(queryString ? `/?${queryString}` : "/");
    }, 500);
  };

  return (
    <div className="flex items-center gap-2 mt-5 bg-white rounded-[20px] w-full max-w-[800px] mx-auto p-3 border border-[#C9F1E3] ">
      {/* icon */}
      <button>
        <Image src="/search-icon.svg" className="w-[24px] h-[24px]" alt="search" width={24} height={24} />
      </button>
      {/* input */}
      <input
        name="search"
        value={searchValue}
        onChange={handleSearch}
        type="text"
        placeholder={t("searchPlaceHolder")}
        className="w-full outline-none"
      />
    </div>
  );
}

export default SearchBox;
