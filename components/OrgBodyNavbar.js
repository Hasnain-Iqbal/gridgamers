import { useState, useEffect } from "react";
import Link from "next/link";
import QRCodeModal from "./QRCodeModal";

const OrgBodyNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsDropdownOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="">
      <div className="relative">
        <div
          className="flex items-center cursor-pointer px-6 justify-between"
          onClick={toggleDropdown}
        >
          <p className="text-[black] font-medium">What is Grid</p>
          <img
            className="mx-2"
            src="/assets/dropdown_img.png"
            alt="Dropdown Icon"
            height="10px"
            width="15px"
          />
        </div>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="bg-[white] absolute left-0 w-screen mt-4 shadow-lg z-50">
            <ul className="pb-2 text-[black]">
              <li>
                <button
                  className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                  onClick={() =>
                    document.getElementById("what-is-GRID").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  What is Grid
                </button>
              </li>
              <li className="">
                <button
                  className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                  onClick={() =>
                    document.getElementById("Solutions").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                 We work for you
                </button>
              </li>
              <li className="">
                <button
                  className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                  onClick={() =>
                    document.getElementById("Next-steps").scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                   Grow with us
                </button>
              </li>
            </ul>
            <div className="h-[1px] bg-[black] mx-4"></div>
            <div className="py-4 flex flex-col items-center mx-4 space-y-2">
              
              <button className={`w-60 border border-blue-900 mx-4 py-2 rounded-lg font-medium hover:bg-blue-800`}>
                Try Grid Enterprise Portal
              </button>
              <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                Try Grid AI Pro (Comming Soon)
              </button> 
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default OrgBodyNavbar;
