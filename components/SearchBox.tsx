import Image from "next/image";

function SearchBox() {
  return (
    <div className="flex items-center gap-2 mt-5 bg-white rounded-[20px] w-full max-w-[800px] mx-auto p-3 border border-[#C9F1E3] ">
      {/* icon */}
      <button>
        <Image src="/search-icon.svg" className="w-[24px] h-[24px]" alt="search" width={24} height={24} />
      </button>
      {/* input */}
      <input type="text" placeholder="Search PNG image..." className="w-full" />
    </div>
  );
}

export default SearchBox;
