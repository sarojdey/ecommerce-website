import SearchBar from "./SearchBar";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const [show, setShow] = useState("show");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("show");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`${
        show === "hide" ? "-translate-y-14" : ""
      } fixed w-full h-14 z-10 transition-all ease-in bg-white py-3 px-6 shadow-sm flex justify-between items-center`}
    >
      <Logo />
      <div className=" hidden md:flex">
        <SearchBar
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
          setIsSearchOpen={setIsSearchOpen}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          id="product-search"
        />
      </div>
      <NavMenu
        isSearchOpen={isSearchOpen}
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
        setIsSearchOpen={setIsSearchOpen}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </nav>
  );
};

export default Navbar;
