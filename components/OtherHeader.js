import Link from "next/link";
import OtherNavbar from "./OtherNavbars";
import HiddenNavbar from "./HiddenNavbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const OtherHeader = ({text}) => {
    const router = useRouter();
  
    const [activeLink, setActiveLink] = useState("Home");
      useEffect(() => {
        const path = router.pathname.split("/")[1];
        setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
      }, [router.pathname]);
  return (
    <div className="bg-[white] w-[95%] mx-auto max-w-screen-2xl">
      <div className="relative bg-[white] z-20 flex items-center justify-between">
          {/* Left Section: Logo and Links */}
          <div className="flex items-center space-x-4">
            {/* Microsoft Logo */}
            <a href="/">
              <img
                src="assets/grid_logo_dark3.png"
                alt="Grid Logo"
                className="h-12"
              />
            </a>
            {/* Separator */}
            <span className="text-gray-400">|</span>
            {/* Title */}
            {/* UMER CHANGE: Removing the GRID text in navbar when Screen is Medium (SiM) (why would we have that in the first place?) */}
            {/* <span className="hidden lg:inline font-medium text-[black] text-lg">
              Gamers
            </span> */}

            {/* UMER CHANGE: Change spacing to be closer when SiM */}
            {/* Dropdown Links */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
              {/* <button className="text-gray-600 hover:text-gray-900">
            For personal use
          </button> */}
              <div className="relative group">
                <div className="flex items-center">
                  <p className={"text-[black]"}>For Individuals</p>
                  <img
                    className="mx-2"
                    src="/assets/dropdown_img.png"
                    height="10px"
                    width="15px"
                  />
                </div>
                {/* Dropdown Menu */}
                <div className="bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2 text-black">
                    <li>
                      <Link href="/GridAI">
                        <a
                          className="block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          Grid AI
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/GridAI">
                        <a
                          className="block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          Grid Mobile
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <button className="text-gray-600 hover:text-gray-900">
              For organizations
            </button> */}
              <div className="relative group">
                <div className="flex items-center">
                  <p className={"text-[black]"}>For Organizations</p>
                  <img
                    className="mx-2"
                    src="/assets/dropdown_img.png"
                    height="10px"
                    width="15px"
                  />
                </div>
                {/* Dropdown Menu */}
                <div className="bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2 text-black">
                    <li>
                      <Link href="/GridAI">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          Grid AI Pro
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/GridAI">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("GridAI")}
                        >
                          Grid Web
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("")}
                        >
                          GRID Scheduler
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <div className="flex items-center">
                  <p className={"text-[black]"}>Company</p>
                  <img
                    className="mx-2"
                    src="/assets/dropdown_img.png"
                    height="10px"
                    width="15px"
                  />
                </div>
                <div className="bg-[#f2f2f2] absolute lg:w-[200px] left-0 mt-2 shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2 text-black">
                    <li>
                      <Link href="/CareersPage">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("CareersPage")}
                        >
                          Careers
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Accessibility">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("Accessibility")}
                        >
                          Accessibility 
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/DevicesSafety">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("DevicesSafety")}
                        >
                          Sustainability
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/AccessibilityNewPg">
                        <a
                          className="block px-4 py-2 text-sm hover:bg-[#E6E6E6]"
                          onClick={() => setActiveLink("AccessibilityNewPg")}
                        >
                          New page
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* UMER CHANGE: New Dropdown added when SiM (GRID text comes back in spirit) made new component because of added state*/}
            <HiddenNavbar />
          </div>

          {/* Right Section: Buttons */}
          <div className="hidden xsm:flex items-center space-x-4">
            {/* Try GRID Button */}
            {/* <a href="https://chatbot-new-ui.netlify.app/#/admin/dashboard">
            <button 
              
              className="bg-[black] text-white-300 px-4 py-2  font-medium hover:bg-gray-800">
              Try GRID AI
            </button>
            </a> */}
            {/* Sign In Link */}
            <a href="https://adminweb.stage.gridgamers.com/#/auth/sign-in/default">
            <button className="bg-[black] text-white-300 px-4 py-2  font-medium hover:bg-gray-800 rounded-md">
              Sign in
            </button>
            </a>
          </div>
        </div>
      {/* <div className="xsm:hidden">
        <OtherNavbar text={text} />
      </div> */}
    </div>
  );
};

export default OtherHeader;
