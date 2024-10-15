import { useState } from "react";
import { BiExpandVertical, BiCollapseVertical } from "react-icons/bi";

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Categories");

  const options = [
    "All Categories",
    "Laptop",
    "Headphone",
    "Keyboard",
    "Mouse",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
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
        {isOpen ? (
          <BiCollapseVertical className="text-gray-400 " />
        ) : (
          <BiExpandVertical className="text-gray-400 " />
        )}
      </div>

      {isOpen && (
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
