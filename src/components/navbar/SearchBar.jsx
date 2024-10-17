import { useLocation, useNavigate } from "react-router-dom";
import CustomDropdown from "./CustomDropdown";
import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";

export default function SearchBar({
  id,
  setIsSearchOpen,
  isDropDownOpen,
  setIsDropDownOpen,
  selectedOption,
  setSelectedOption,
  searchQuery,
  setSearchQuery,
}) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const navigate = useNavigate();

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
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <button
        onClick={() => {
          if (searchQuery) {
            navigate(
              `/search/${selectedOption.replace(/\s+/g, "")}/${searchQuery}`
            );
          }
          setIsSearchOpen(false);
          setSearchQuery("");
          setIsDropDownOpen(false);
          setSelectedOption("All Categories");
          setSearchQuery("");
        }}
        className="bg-black h-full rounded-r-md text-white px-4 py-2"
      >
        <FiSearch />
      </button>
    </div>
  );
}
