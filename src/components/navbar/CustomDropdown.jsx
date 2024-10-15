import { useState } from "react";
import {
  BiExpandVertical,
  BiCollapseVertical,
  BiLaptop,
  BiHeadphone,
} from "react-icons/bi";
import { FaKeyboard } from "react-icons/fa";
import { FaMouse } from "react-icons/fa";

export default function CustomDropdown({ isDropDownOpen, setIsDropDownOpen }) {
  const [selectedOption, setSelectedOption] = useState("All Categories");

  const options = [
    "All Categories",
    "Laptop",
    "Headphone",
    "Keyboard",
    "Mouse",
  ];

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropDownOpen(false);
  };

  const getSelectedIcon = (option) => {
    switch (option) {
      case "Laptop":
        return <BiLaptop className="text-gray-400" />;
      case "Headphone":
        return <BiHeadphone className="text-gray-400" />;
      case "Keyboard":
        return <FaKeyboard className="text-gray-400" />;
      case "Mouse":
        return <FaMouse className="text-gray-400" />;
      default:
        return <BiExpandVertical className="text-gray-400" />;
    }
  };

  return (
    <div
      style={{ fontFamily: "inherit" }}
      className="relative inline-block text-inherit h-full text-left md:w-40 bg-[#f4f6f8]"
    >
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-nowrap justify-between h-full w-full px-3 py-2 border border-x-0 bg-inherit cursor-pointer"
      >
        <span className="text-gray-400 hidden sm:block">{selectedOption}</span>
        {isDropDownOpen ? (
          <BiCollapseVertical className="text-gray-400 " />
        ) : (
          getSelectedIcon(selectedOption)
        )}
      </div>

      {isDropDownOpen && (
        <div className="absolute mt-2 w-40 right-0 overflow-hidden bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-3 text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
