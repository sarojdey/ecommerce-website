import { FiShoppingCart, FiHeart, FiUser, FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function NavMenu({
  setIsSearchOpen,
  isSearchOpen,
  isDropDownOpen,
  setIsDropDownOpen,
  selectedOption,
  setSelectedOption,
  searchQuery,
  setSearchQuery,
}) {
  const navigate = useNavigate();

  const loggedIn = true;
  return (
    <div className="flex items-center space-x-6">
      <div
        className="cursor-pointer md:hidden"
        onClick={() => {
          setIsSearchOpen(true);
        }}
      >
        <FiSearch className="text-2xl text-gray-700" />
      </div>

      <div
        className={`absolute z-10 flex  right-5 sm:right-36 md:hidden gap-4 -bottom-14 transform transition-transform duration-500 ease-out ${
          isSearchOpen ? "translate-x-[0%]" : "translate-x-[200%]"
        }`}
      >
        <SearchBar
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
          setIsSearchOpen={setIsSearchOpen}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          id={"mobile-search"}
        />
        <div
          onClick={() => {
            setIsSearchOpen(false);
            setIsDropDownOpen(false);
            setSelectedOption("All Categories");
            setSearchQuery("");
          }}
          className="flex justify-center items-center cursor-pointer"
        >
          <RxCross1 />
        </div>
      </div>

      <div
        onClick={() => {
          navigate("/cart");
        }}
        className="relative cursor-pointer  "
      >
        <FiShoppingCart className="text-2xl text-gray-700" />
        <span
          style={{ fontSize: "9px" }}
          className="absolute top-3 left-4 bg-red-600 text-white rounded-full px-1"
        >
          21
        </span>
      </div>
      <div
        onClick={() => {
          navigate("/wishlist");
        }}
        className="relative cursor-pointer "
      >
        <FiHeart className="text-2xl text-gray-700" />
        <span
          style={{ fontSize: "9px" }}
          className="absolute top-3 left-3 bg-red-600 text-white rounded-full px-1"
        >
          50
        </span>
      </div>

      <div
        className={`${
          loggedIn &&
          "border bg-[#f4f6f8]  rounded-full py-1 px-1 items-center space-x-2"
        }  text-gray-700 cursor-pointer hidden sm:flex`}
      >
        <FiUser
          className={`text-2xl ${
            loggedIn && "bg-white border rounded-full p-1"
          } `}
        />
        {loggedIn && (
          <span className="font-semibold text-sm pr-2">Saroj Dey</span>
        )}
      </div>
      <div className="cursor-pointer sm:hidden" onClick={() => {}}>
        <FiUser className="text-2xl text-gray-700" />
      </div>
    </div>
  );
}
