import CustomDropdown from "./CustomDropdown";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ id }) {
  return (
    <div className="ml-6 flex h-10 items-center text-sm shadow-sm">
      <input
        id={id}
        type="text"
        placeholder="Search something..."
        className="px-4 py-2    sm:w-64 md:w-40  lg:w-72 outline-none h-full text-inherit bg-[#f4f6f8]  text-gray-700 border rounded-l-md "
      />

      <CustomDropdown />
      <button className="bg-black h-full rounded-r-md text-white px-4 py-2">
        <FiSearch />
      </button>
    </div>
  );
}
