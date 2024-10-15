import SearchBar from "./SearchBar";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { useState } from "react";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <nav className="relative bg-white py-3 px-6 shadow-sm flex justify-between items-center">
      <Logo />
      <div className=" hidden md:flex">
        <SearchBar
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
          setIsSearchOpen={setIsSearchOpen}
          id="product-search"
        />
      </div>
      <NavMenu
        isSearchOpen={isSearchOpen}
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </nav>
  );
};

export default Navbar;
