import { useState, useEffect } from "react";
import Link from "next/link";

const AIDropdown = () => {
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
    <nav className="w-full">
      <div className="relative">
        <div className="flex w-full justify-between items-center px-6 lg:px-12 py-4">
          <div className="flex">
            <div
              className="flex items-center cursor-pointer justify-between"
              onClick={toggleDropdown}
            >
              <p className="text-[black] font-medium min-[1490px]:px-40">
                Copilot in Edge
              </p>
              <img
                className="mx-2"
                src="/assets/dropdown_img.png"
                alt="Dropdown Icon"
                height="10px"
                width="15px"
              />
            </div>
            {isDropdownOpen && (
              <div className="bg-[white] absolute left-0 w-screen max-[505px]:mt-10 mt-12 shadow-lg z-50">
                <ul className="pb-2 text-[black]">
                  <li>
                    <button
                      className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                      onClick={() =>
                        document
                          .getElementById("Copilot-in-Edge")
                          .scrollIntoView({
                            behavior: "smooth",
                          })
                      }
                    >
                      Copilot in Edge
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                      onClick={() =>
                        document
                          .getElementById("Discover-Cards")
                          .scrollIntoView({
                            behavior: "smooth",
                          })
                      }
                    >
                      Discover Cards
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                      onClick={() =>
                        document
                          .getElementById("Prompt-Builder")
                          .scrollIntoView({
                            behavior: "smooth",
                          })
                      }
                    >
                      Prompt Builder
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                      onClick={() =>
                        document.getElementById("Scenarios").scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      Scenarios
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                      onClick={() =>
                        document.getElementById("Features").scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      Features
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="block text-sm px-12 font-medium py-3 hover:bg-[#E6E6E6]"
                      onClick={() =>
                        document.getElementById("Copilot-Pro").scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      Copilot Pro
                    </button>
                  </li>
                </ul>
                <div className="min-[505px]:hidden">
                  <div className="h-[1px] bg-[black] mx-4"></div>
                  <div className="py-4 flex flex-col mx-4 space-y-2">
                    <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                      Download the app
                    </button>
                    <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                      Try Copilot
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="max-[505px]:hidden flex items-center space-x-4">
            <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
              Download the app
            </button>
            <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
              Try Copilot
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AIDropdown;
