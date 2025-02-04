import React, { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HiddenNavbar from "components/HiddenNavbar";
import logo from "../public/assets/grid-logo-new.svg";
import BodyNavbar from "components/BodyNavbar";
import VideoModal from "components/VideoModal";
import OrgBodyNavbar from "components/OrgBodyNavbar";
const Organization = ({}) => {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const router = useRouter();
  const [animate, setAnimate] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const path = router.pathname.split("/")[1];
    setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
  }, [router.pathname]);
  useEffect(() => {
    // Trigger animation after the component mounts
    const timeout = setTimeout(() => setAnimate(true), 100); // Small delay for better effect
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        setIsSticky(sectionTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aiCompanionlist = [
    {
      name: "Be confident in growing your business or managing your organizations needs. GRID AI does the hard work, so you don’t have to.",
      number: "Simplify your life",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-01",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-advanced-ai-331170",
    },
    {
      name: "Questions needs fast answers in todays world, let us help you navigate your day with the right answers and insights.",
      number: "Getting help without the wait",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-02",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-seamlessly-integrated-331170",
    },
    {
      name: " Transform manual efforts into simple and quick solutions. Ease of use is the name of the game.",
      number: "Tools you didn’t even know you needed",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-03",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-enterprise-grade-security-331170",
    },
  ];

  const copilotMeetlist = [
    {
      name: "GRID AI Pro",
      textHeading:
        "Drive traffic to your events, utilize analytics to earn directly, manage hundreds of people at a moments notice; the power of knowledge personalized to your needs.",
      heading: "Get priority access",
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Get-priority-access-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1150&qlt=100&fit=constrain",
      btn: "Explore GRID AI Pro (Coming Soon)",
    },
    {
      name: "GRID Enterprise Portal",
      textHeading:
        "Oversee multiple facilities, utilize analytics to boost profits and reduce costs, boost visibility and grow to new heights.",
      heading: "Evolving events management with faster solutions.",
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Discover-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1125&qlt=100&fit=constrain",
      btn: "Explore GRID Enterprise Portal",
    },
    {
      name: "GRID + Scheduler",
      textHeading:
        "Know what your players want, when they want it and we calculate what’s needed to make it work. Convenience of an all-in-one system, to help you succeed.",
      heading: "Start your events right",
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Power-up-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1125&qlt=100&fit=constrain",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-copilot-neutral-life-hero-v2-01"
      btn: "Explore GRID + Scheduler",
    },
  ];

  return (
    <div>
      <div className=" ">
        <div className="relative bg-[white] z-20 flex items-center justify-between px-6 xl:px-40 py-4">
          {/* Left Section: Logo and Links */}
          <div className="flex items-center space-x-4">
            {/* Microsoft Logo */}
            <a href="/">
            <img
              src="assets/grid_logo_dark3.png"
              alt="Grid Logo"
              className="w-full lg:max-w-[100px] xs:max-w-[80px] h-auto mb-3"
            />
            </a>
            {/* Separator */}
            <span className="text-gray-400">|</span>
            {/* Title */}
            {/* UMER CHANGE: Removing the GRID text in navbar when Screen is Medium (SiM) (why would we have that in the first place?) */}
            {/* <span className="hidden lg:inline font-medium text-[black] text-lg">
              GRID
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
                          className="block text-sm px-1 lg:px-4 py-2 hover:bg-[#E6E6E6]"
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
                          Launch Scheduler
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

        {/* Background Video */}
        {/* UMER CHANGE: Made background become its own block on SiM () 
            Honestly, I got no idea how they can make the video get the two elements closer to each other
            which only works on Chrome for some reason.*/}
        {/* Background Video */}
        <div style={{ width: "100%" }}>
          <video
            className=" block md:absolute top-0 left-0 w-full h-full object-cover"
            src="https://s7d2.scene7.com/is/content/microsoftcorp/copilot-neutral-business-hero-331170"
            autoPlay
            muted
            loop={false} // Ensures video only plays once
          ></video>
        </div>

        {/* UMER CHANGE: Added text-balance to prevent orphans + leading-relaxed for pretty */}
        <div
          className={`relative max-w-7xl mx-auto px-6 md:py-16 xs:py-10 md:h-[85vh] md:px-12 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className=" hidden md:block text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
            Empower your organization
          </h1>
          <img 
            src="assets/grid_logo_dark2.png" 
            alt="logo" 
            className="w-full max-w-[230px] h-auto mb-3"
            >
          </img>
          <h1 className=" block md:hidden text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
            Tackle any challenge with GRID
          </h1>
          <p className="text-[black] text-lg mb-6 max-w-3xl text-balance leading-relaxed">
            The Ultimate Solution for Gaming, Sports, and Hobby Events.
          </p>

          {/* UMER CHANGE: Removed lg spacing conditional, made button column flex to better fit  */}
          {/* Buttons */}
          <div className="mb-10">
            <div className="my-5">
              <VideoModal
                addThumNail={true}
               />
              </div>
            {/* <button className="bg-[black] text-white-300 px-6 py-3 rounded-lg font-medium hover:bg-indigo-700">
              Watch video
            </button> */}
            <div ocr-component-name="icon" className="ocr-icon d-inline-flex">
              <span
                className="glyph-prepend glyph-prepend-play-solid"
                role="presentation"
                aria-hidden="true"
              ></span>
            </div>
          </div>
          <div
            className=" flex-col sm:flex-row flex px-2 py-2 bg-[white] rounded-[2.5rem] sm:rounded-[12.5rem] "
            // style={{ borderRadius: "12.5rem" }}
          >
            <Link
              activeClass="active"
              href="/"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p
                onClick={() => {
                  setActiveLink("Home");
                }}
                className={
                  "bg-[white] text-[black] px-14 py-6 font-medium hover:bg-gray-100" +
                  (activeLink === "Home"
                    ? " text-[#19BAEE] animation-active "
                    : " text-[black] hover:text-[black] ")
                }
                style={{ borderRadius: "12.5rem", cursor: "pointer" }}
              >
                For Individuals
              </p>
            </Link>
            <button
              className="bg-[black] text-white-300 px-14 py-6 font-medium hover:bg-gray-200"
              style={{ borderRadius: "12.5rem" }}
            >
              For Organizations
            </button>
          </div>
        </div>
      </div>

      {/* UMER Change: Added Navbar when SiM for both sticky-non-sticky*/}
      {/* Added Dropdown */}
      <div>
        {/* Non-sticky section */}
        <div ref={sectionRef} className="relative bg-[white] xl:px-40">
          <div className=" hidden md:flex justify-between items-center px-6 lg:px-12 py-4">
            {/* Left: Navigation Tabs */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() =>
                  document.getElementById("what-is-GRID").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-800 font-medium hover:text-blue-600 relative"
              >
                What is Grid
                <div className="absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"></div>
              </button>
              <button
                onClick={() =>
                  document.getElementById("Solutions").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                We work for you
              </button>
              <button
                onClick={() =>
                  document.getElementById("Next-steps").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Grow with us
              </button>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-4">
              <a href="#">
              <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                Try GRID Enterprise Portal
              </button>
              </a>
              <a href="https://chatbot-new-ui.netlify.app/#/admin/dashboard">
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                Try GRID AI Pro (coming soon)
              </button>
              </a>
            </div>
          </div>
          <div className="md:hidden py-4">
            <OrgBodyNavbar
              />
          </div>
        </div>

        {/* Sticky navbar */}
        <div
          className={`${
            isSticky
              ? "fixed top-0 left-0 w-full bg-[white] z-50 lg:px-40"
              : "hidden"
          } transition-all duration-300`}
        >
          <div className="hidden md:flex justify-between items-center px-6 lg:px-12 py-4">
            {/* Left: Navigation Tabs */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() =>
                  document.getElementById("what-is-GRID").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-800 font-medium hover:text-blue-600 relative"
              >
                What is Grid
                <div className="absolute left-0 right-0 h-[2px] bg-blue-600 mt-1 rounded-full"></div>
              </button>
              <button
                onClick={() =>
                  document.getElementById("Solutions").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                We work for you
              </button>
              <button
                onClick={() =>
                  document.getElementById("Next-steps").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Grow with us
              </button>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-4">
              <a>
              <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                Try GRID Enterprise Portal
              </button>
              </a>
              <a>
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                Try GRID AI Pro (coming soon)
              </button>
              </a>
            </div>
          </div>
          <div className="md:hidden py-4">
            <OrgBodyNavbar
              />
          </div>
        </div>
      </div>

      {/* UMER CHANGE: Change font size to fit things properly and Fixed dynamic spacing also added box shadow to cards*/}
      <div
        className="bg-[url('/assets/org_sec1.avif')]  bg-repeat-round"
        id="what-is-GRID"
      >
        <div className="max-w-[95%] sm:max-w-[90%] md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl m-auto xs:px-4 lg:px-20 3xl:px-0  py-[40px]  lg:py-[100px]  ">
          <div className="x-auto">
            <div className="flex items-start j justify-center pb-10  w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0">
              <div className=" mx-auto w-full   ">
                <div
                  className={`flex flex-col justify-center items-center transition-all duration-700 ease-in-out transform ${
                    animate
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {/* <p className="  text-center text-white-300 font-medium    text-[14px]	 lg:text-[20px]">
                  HOW IT WORKS
                </p> */}
                  <p className="  text-center text-[black] font-medium leading-10 text-[2rem] md:text-[2.5rem]">
                    Comprehensive Business Essentials
                  </p>
                  {/* <p className=" text-center text-white-300 font-medium  text-[12px]	  xl:text-[20px]	 mt-[12px] xl:mt-[24px]">
                  Let GRID take care of event management, so you can focus on
                  the games
                </p> */}
                </div>
              </div>
            </div>
            <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9  xl:mt-0 ">
              {aiCompanionlist.map((listUsers, index) => (
                <div
                  className="flex-start justify-center  xl:mt-0  bg-[white] rounded-[24px] md:mx-3 w-auto p-5 shadow-sm"
                  key={index}
                >
                  <div className=" mx-auto w-full md:w-auto">
                    <div className="flex items-center justify-center m-auto">
                      <video
                        className="top-0 left-0 w-full h-full rounded-xl"
                        src={listUsers.icon}
                        autoPlay
                        muted
                        loop={false} // Ensures video only plays once
                      ></video>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ">
                      <p className="text-[1.125rem] text-center text-[black] font-semibold">
                        {listUsers.number}
                      </p>
                      <p className="text-[1rem] lg:px-8 xl:px-0    text-center text-[black]   mt-[12px] xl:mt-[20px]">
                        {listUsers.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[url('/assets/org_sec2.avif')] bg-repeat-round"
        id="Solutions"
      >
        <div className="mx-4 min-[540px]:mx-20 2xl:max-w-screen-xl 2xl:mx-auto py-[40px] xl:py-[100px]">
          <div className="x-auto">
            <div className="flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0">
              <div className=" mx-auto w-full   ">
                <div className="flex flex-col justify-center items-center ">
                  {/* <p className="  text-center text-white-300 font-medium    text-[14px]	 lg:text-[20px]">
                  HOW IT WORKS
                </p> */}
                  <p className="  text-center text-[black] font-medium text-5xl">
                    GRID transforms how you manage events.
                  </p>
                  {/* <p className=" text-center text-white-300 font-medium  text-[12px]	  xl:text-[20px]	 mt-[12px] xl:mt-[24px]">
                  Let GRID take care of event management, so you can focus on
                  the games
                </p> */}
                </div>
              </div>
            </div>
            <div className="bg-[white] rounded-3xl shadow-lg gap-16 p-4 mb-8 flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-4  md:grid-rows-1 ">
              <div className=" flex flex-col col-span-2  w-full  justify-between items-start row-start-2 md:row-start-1">
                <div className="border border-[#e6f2fb] p-3 rounded-lg">
                  <img
                    src="assets/just-G-logo.png"
                    width="30px"
                  />
                </div>
                <div>
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="text-[black] mt-[30px] mb-6 text-[11px]"
                  >
                    GRID
                  </p>
                  <h1
                    // style={{ fontFamily: "Sigmar One" }}
                    className="2xl:text-3xl text-2xl font-semibold text-black"
                  >
                    GRID AI PRO brings cutting edge search with quality insights, for optimal resulting. The first of its kind, a tool for the ages.
                  </h1>
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="text-[black] mt-[30px] mb-6 text-[16px]"
                  >
                    Powerful, Personal, and always ready to solve for your needs.
                  </p>
                </div>
                <div className="flex max-w-[470px] justify-between items-start">
                <a>
                  <button className=" bg-[black] text-[white] px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                    Waitlist
                  </button>
                  </a>
                  <a>
                  <button className="border border-blue-900 mx-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                    GRID AI Pro (Coming Soon)
                  </button>
                  </a>
                </div>
              </div>
              <div className=" flex col-span-2 justify-end ">
                <video
                  className="top-0 left-0 w-full h-full rounded-xl"
                  src={
                    "https://s7d2.scene7.com/is/content/microsoftcorp/Desktop-zoom-web"
                  }
                  autoPlay
                  muted
                  loop={false} // Ensures video only plays once
                ></video>
              </div>
            </div>
            <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9  mt-[40px]  xl:mt-0 ">
              {copilotMeetlist.map((listUsers, index) => (
                <div
                  className="flex-start justify-center bg-[white] rounded-[24px] md:mx-3 w-auto p-2 shadow-lg"
                  key={index}
                >
                  <div className=" mx-auto w-full md:w-auto">
                    <div className="flex items-center justify-center m-auto">
                      <img
                        className="top-0 left-0 w-full h-full rounded-xl"
                        src={listUsers.icon}
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start mt-[12px] xl:mt-[20px] p-3">
                      <p className="text-[0.75rem] font-normal xl:px-0 text-[black]">
                        {listUsers.name}
                      </p>
                      <p className="text-[1.125rem] text-[black] font-semibold  mt-[12px] xl:mt-[20px]">
                        {listUsers.heading}
                      </p>
                      <p className="text-[1rem] font-normal xl:px-0 text-[black] mt-[12px] xl:mt-[20px]">
                        {listUsers.textHeading}
                      </p>
                      <div className=" mt-[12px] text-[0.875rem] font-semibold xl:mt-[20px]">
                        <button>{listUsers.btn}</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[url('/assets/bg_sec3.avif')] bg-repeat-round"
        id="Next-steps"
      >
        <div className="mx-4 min-[540px]:mx-16 2xl:max-w-screen-xl 2xl:mx-auto lg:px-20 3xl:px-0  py-[40px]  xl:py-[100px]">
          <div className=" x-auto">
            <div className="flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0">
              <div className=" mx-auto w-full   ">
                <div className="flex flex-col justify-center items-center ">
                  {/* <p className="  text-center text-white-300 font-medium    text-[14px]	 lg:text-[20px]">
                  HOW IT WORKS
                </p> */}
                  <p className="  text-center text-[black] font-medium text-[3rem]">
                    Reach the pinnacle of gaming excellence
                  </p>
                  {/* <p className=" text-center text-white-300 font-medium  text-[12px]	  xl:text-[20px]	 mt-[12px] xl:mt-[24px]">
                  Let GRID take care of event management, so you can focus on
                  the games
                </p> */}
                </div>
              </div>
            </div>
            <div className="bg-[url('/assets/bg_sec1.avif')] rounded-3xl shadow-lg p-4  mb-8">
              <div className=" flex flex-col col-span-2 p-8 w-full  justify-between items-center row-start-2 sm:row-start-1">
                <div>
                  <h1
                    // style={{ fontFamily: "Sigmar One" }}
                    className="text-3xl font-semibold text-black my-5 text-center"
                  >
                    Redesigned and redefined systems
                  </h1>
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="text-[black] mb-6 text-[16px] text-center"
                  >
                    GRIDs end-to-end approach reduces efforts, so you can start your events sooner.
                  </p>
                </div>
                <div className="flex max-w-[470px] justify-between items-start">
                <a>
                  <button className="bg-[black] text-[white] mx-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                    Request access today
                  </button>
                </a>
                </div>
              </div>
            </div>
            <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 pb-9 mt-[40px] xl:mt-0">
              {/* First Card */}
              <div className="bg-[white] flex flex-col mx-2 rounded-3xl shadow-lg h-full">
                <div className="flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-2  md:grid-rows-1 p-4 h-full gap-8">
                  <div className="flex flex-col col-span-1 w-full justify-between items-start row-start-2 sm:row-start-1 h-full gap-16">
                    <div className="flex-grow">
                      <div className="mb-4">
                        <img
                          src="assets/just-G-logo.png"
                          height="32px"
                          width="32px"
                        />
                      </div>
                      <h1 className="text-xl font-semibold text-black">
                        Dive deeper
                      </h1>
                      <p
                        style={{ fontFamily: "Inter" }}
                        className="text-[black] mt-[30px] mb-6 text-sm"
                      >
                        Speak to GRID AI and define any parameters for an event. Let GRID do the work for you, as your personal concierge.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <button className="border border-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-[black] hover:text-[white]">
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="flex col-span-1 justify-end">
                    <img
                      className="rounded-xl object-cover"
                      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/card-2-desktop-331170?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=468&qlt=100&fmt=png-alpha&fit=constrain"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="bg-[white] flex flex-col mx-2 rounded-3xl shadow-lg h-full">
                <div className="flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-2  md:grid-rows-1 p-4 h-full gap-8">
                  <div className="flex flex-col col-span-1 w-full justify-between items-start row-start-2 sm:row-start-1 h-full gap-16">
                    <div className="flex-grow">
                      <div className="mb-4">
                        <img
                          src="assets/just-G-logo.png"
                          height="32px"
                          width="32px"
                        />
                      </div>
                      <h1 className="text-xl font-semibold text-black">
                        Do more with AI
                      </h1>
                      <p
                        style={{ fontFamily: "Inter" }}
                        className="text-[black] mt-[30px] mb-6 text-sm"
                      >
                        Build a community and compete against others, earn more and help your business flourish, its all possible with GRID Enterprise solutions.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <button className="border border-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-[black] hover:text-[white]">
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="flex col-span-1 justify-end">
                    <img
                      className="rounded-xl object-cover"
                      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/card-3-desktop-3311701?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=468&qlt=100&fmt=png-alpha&fit=constrain"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
