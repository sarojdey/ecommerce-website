import SearchBar from "./SearchBar";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav className="relative bg-white py-3 px-6 shadow-sm flex justify-between items-center">
      <Logo />
      <div className=" hidden md:flex">
        <SearchBar id="product-search" />
      </div>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
