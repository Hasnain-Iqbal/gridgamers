import { useState, useEffect } from "react";
import Link from "next/link";

const HiddenNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPersonalUseDropdownOpen, setIsPersonalUseDropdownOpen] =
    useState(false);
  const [isOrganizationDropdownOpen, setIsOrganizationDropdownOpen] =
    useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] =
    useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePersonalUseDropdown = () => {
    setIsPersonalUseDropdownOpen(!isPersonalUseDropdownOpen);
  };

  const toggleOrganizationDropdown = () => {
    setIsOrganizationDropdownOpen(!isOrganizationDropdownOpen);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsPersonalUseDropdownOpen(false);
    setIsOrganizationDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".relative");
      if (navbar && !navbar.contains(event.target)) {
        closeDropdown();
      }
    };

    const handleScroll = () => {
      closeDropdown();
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="md:hidden">
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <p className="text-[black]">GRID</p>
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
          <div className="bg-[#f2f2f2] fixed left-0 w-screen mt-7 shadow-lg z-50">
            <ul className="pb-1 text-[black]">
              <li className="border-b border-[#e6e6e6]">
                <div
                  className="flex justify-between items-center text-sm px-4 py-3 cursor-pointer hover:bg-[#E6E6E6]"
                  onClick={togglePersonalUseDropdown}
                >
                  For Individuals
                  <img
                    src="/assets/dropdown_img.png"
                    alt="Dropdown Icon"
                    height="10px"
                    width="15px"
                    className={
                      isPersonalUseDropdownOpen ? "rotate-180" : "rotate-0"
                    }
                  />
                </div>
                {isPersonalUseDropdownOpen && (
                  <ul className="">
                    <li className=" border-[#e6e6e6] ">
                      <Link href="/GridAI">
                        <a
                          className="block  hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          <p className="text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ">
                            Grid AI
                          </p>
                        </a>
                      </Link>
                    </li>
                    <li className=" border-[#e6e6e6] ">
                      <Link href="/GridAI">
                        <a
                          className="block  hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          <p className="text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ">
                            Grid Mobile
                          </p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="border-b border-[#e6e6e6]">
                <div
                  className="flex justify-between items-center text-sm px-4 py-3 cursor-pointer hover:bg-[#E6E6E6]"
                  onClick={toggleOrganizationDropdown}
                >
                  For Organizations
                  <img
                    src="/assets/dropdown_img.png"
                    alt="Dropdown Icon"
                    height="10px"
                    width="15px"
                    className={
                      isOrganizationDropdownOpen ? "rotate-180" : "rotate-0"
                    }
                  />
                </div>
                {isOrganizationDropdownOpen && (
                  <ul className="">
                    <li className=" border-[#e6e6e6] ">
                      <Link href="/GridAI">
                        <a
                          className="block  hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          <p className="text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ">
                            Grid AI Pro
                          </p>
                        </a>
                      </Link>
                    </li>
                    <li className=" border-[#e6e6e6] ">
                      <Link href="/GridAI">
                        <a
                          className="block  hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          <p className="text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ">
                            Grid Web
                          </p>
                        </a>
                      </Link>
                    </li>
                    <li className=" border-[#e6e6e6] ">
                      <Link href="/">
                        <a
                          className="block  hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("")}
                        >
                          <p className="text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ">
                            Grid Scheduler
                          </p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="border-b border-[#e6e6e6]">
                <div
                  className="flex justify-between items-center text-sm px-4 py-3 cursor-pointer hover:bg-[#E6E6E6]"
                  onClick={toggleCompanyDropdown}
                >
                  Company
                  <img
                    src="/assets/dropdown_img.png"
                    alt="Dropdown Icon"
                    height="10px"
                    width="15px"
                    className={
                      isCompanyDropdownOpen ? "rotate-180" : "rotate-0"
                    }
                  />
                </div>
                {isCompanyDropdownOpen && (
                  <ul className="">
                    <li className=" border-[#e6e6e6] ">
                      <Link href="/CareersPage">
                        <a
                          className="block  hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("CareersPage")}
                        >
                          <p className="text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ">
                            Careers
                          </p>
                        </a>
                      </Link>
                    </li>
                    <li className=" border-[#e6e6e6] ">
                      <Link href="/Accessibility">
                        <a
                          className="block  hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("Accessibility")}
                        >
                          <p className="text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ">
                            Accessibility
                          </p>
                        </a>
                      </Link>
                    </li>
                    <li className=" border-[#e6e6e6] ">
                      <Link href="/DevicesSafety">
                        <a
                          className="block  hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("DevicesSafety")}
                        >
                          <p className="text-sm mx-10 border-t border-[#e6e6e6] py-3 text-[black] ">
                            Sustainability
                          </p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul> 
            <div className="h-[1px] bg-[black] mx-4"></div>
            <div className="py-4 flex flex-col mx-4 space-y-2">
              {/* <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                Download the app
              </button> */}
              <a href="https://adminweb.stage.gridgamers.com/">
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                Sign In
              </button>
              </a>
            </div>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default HiddenNavbar;
