"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function SearchBox() {
  const [serachValue, setSearchValue] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const searchParams = useSearchParams();
  const search = searchParams.get("search"); 

  useEffect(() => {
    if (search) {
      setSearchValue(search);
    } else {
      setSearchValue("");
    }
  }, [search]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setSearchValue(value);

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Debounce navigation
    timeoutRef.current = setTimeout(() => {
      const query = value.trim();
      if (query) {
        router.push(`/?search=${encodeURIComponent(query)}`);
      } else {
        router.push("/"); // ✅ clear query params
      }
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
        value={serachValue}
        onChange={handleSearch}
        type="text"
        placeholder="Search PNG image..."
        className="w-full"
      />
    </div>
  );
}

export default SearchBox;
