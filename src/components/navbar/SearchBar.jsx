import { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  id,
  setIsSearchOpen,
  isDropDownOpen,
  setIsDropDownOpen,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="ml-6 flex h-10 items-center text-sm shadow-sm">
      <input
        id={id}
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search something..."
        className="px-4 py-2 w-56 sm:w-64 md:w-40  lg:w-72 outline-none h-full text-inherit bg-[#f4f6f8]  text-gray-700 border rounded-l-md "
      />

      <CustomDropdown
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
      />
      <button
        onClick={() => {
          setIsSearchOpen(false);
          setSearchQuery("");
          setIsDropDownOpen(false);
        }}
        className="bg-black h-full rounded-r-md text-white px-4 py-2"
      >
        <FiSearch />
      </button>
    </div>
  );
}
