import React, { useState, useEffect } from "react";
import HiddenNavbar from "../components/HiddenNavbar";
import Link from "next/link";
import SearchIcon from "../public/assets/Icon/search_icon.svg";
import DropdownSearch from "../components/DropdownSearch";
import FindJob from "../public/assets/FindJob.svg";
import { useRouter } from "next/router";

const CareersPage = () => {
  const [clickedJob, setClickedJob] = useState();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("Home");
    useEffect(() => {
      const path = router.pathname.split("/")[1];
      setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
    }, [router.pathname]);

  const style = {
    background: `linear-gradient(90.71deg, rgba(169, 124, 196, 0.33) 1.08%, rgba(117, 219, 255, 0.33) 100%), 
                 linear-gradient(0deg, rgb(238, 234, 243), rgb(238, 234, 243))`,
  };

  const promotingDisability = [
    {
      title: "Senior Software Engineer",
      time: "Today",
      location: "Redmond, Washington",
      jobNum: 2413432,
      workSite: "Remote",
      detail: "The AI Frameworks team at Microsoft develops AI software that enables running AI models everywhere, from world's fastest AI supercomputers, to servers, desktops, mobile phones, IoT devices, and internet browsers.",
      btn: "See details"
    },
    {
      title: "Member of Technical Staff - Data Infrastructure Engineer",
      time: "2 days ago",
      location: "Redmond, Washington",
      jobNum: 6543345,
      workSite: "On-Site",
      detail: "As Microsoft continues to push the boundaries of AI, we are on the lookout for passionate individuals to work with us on the most interesting and challenging AI questions of our time. Our vision is bold and broad — to build systems that have true artificial intelligence across agents, applications, services, and infrastructure.",
      btn: "See details"
    },
    {
      title: "Product Marketing Manager",
      time: "3 days ago",
      location: "Redmond, Washington",
      jobNum: 5685445,
      workSite: "Remote",
      detail: 'Do you like to think in pictures? Do you look at a communication asset and think, "That can be simplified and elevated with a more visual approach?" If so, the Microsoft Edge for Business go-to-market team is looking for you.',
      btn: "See details"
    },
  ];

  return (
    <div className="bg-[white]">
      <div className="relative bg-[white] z-20 flex items-center justify-between px-6 xl:px-40 py-4">
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

      <div style={style} className="w-full">
        <div className="bg-no-repeat p-4 md:p-12 bg-cover flex justify-center">
          <div className="bg-[white] w-full md:w-[90%] lg:w-[80%] p-4 md:p-10">
            <div className="flex flex-col md:flex-row justify-between mb-3 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                <div className="relative w-full md:w-auto">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <img src="/assets/Icon/search_icon.svg" />
                  </div>
                  <input
                    className="shadow-md w-full md:w-[22vw] p-3 pl-10 rounded-md text-sm border border-[#E7ECF1] focus:outline-none focus:ring-[1px] focus:border-[black]"
                    placeholder="Search by job title, ID, or keyword"
                  />
                </div>

                <div className="relative w-full md:w-auto">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <img src="/assets/Icon/search_icon.svg" />
                  </div>
                  <input
                    className="shadow-md w-full md:w-[22vw] p-3 pl-10 rounded-md text-sm border border-[#E7ECF1] focus:outline-none focus:ring-[1px] focus:border-[black]"
                    placeholder="City, state, or country/region"
                  />
                </div>
              </div>

              <button className="bg-[#1A59C8] rounded-md text-white-300 px-4 py-2 font-medium hover:bg-gray-800 w-full md:w-auto">
                Find Jobs
              </button>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <DropdownSearch component="careers" name="Experience" />
              <DropdownSearch component="careers" name="Profession" />
              <DropdownSearch component="careers" name="Employment type" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4 bg-[#fafafa] shadow-lg">
            {promotingDisability.map((listUsers, index) => (
              <div
                className="flex-start justify-center border-b-[1px] border-gray-400 hover:bg-[white] bg-[#fafafa] px-3 w-auto cursor-pointer"
                key={index}
                onClick={() => setClickedJob(listUsers)}
              >
                <div className="mx-auto w-full">
                  <div className="flex flex-col justify-start items-start p-4">
                    <p className="text-md text-[black] font-semibold">
                      {listUsers.title}
                    </p>
                    <p className="text-sm font-light text-[black] mt-3">
                      {listUsers.detail}
                    </p>
                    <button className="text-[#0067b8] text-sm mt-3">
                      {listUsers.btn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8">
            {clickedJob ? (
              <div className="bg-[#fafafa] shadow-lg p-4 md:p-5">
                <h1 className="text-xl md:text-2xl font-bold mb-3 text-[black]">
                  {clickedJob.title}
                </h1>
                <p className="text-gray-400 text-sm mb-5">
                  {clickedJob.location}
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-[#1A59C8] rounded-md text-white-300 px-4 py-1 font-medium hover:bg-gray-800">
                    Apply
                  </button>
                </div>

                <div className="mt-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">
                        Date posted <span className="text-[black] px-12 font-semibold">{clickedJob.time}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">
                        Job number <span className="text-[black] px-12 font-semibold">{clickedJob.jobNum}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">
                        <span className="pr-3">Work site</span>
                        <span className="text-[black] font-semibold">{clickedJob.workSite}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex w-full justify-center items-center min-h-[50vh]">
                <div className="text-center">
                  <img src="/assets/FindJob.svg" />
                  <p className="text-2xl font-bold text-[black] mb-3">
                    Select a job
                  </p>
                  <p className="text-sm text-[black]">
                    Nothing is selected
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;