import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import Link from "next/link";
import { useRouter } from "next/router";
import HiddenNavbar from "./HiddenNavbar";
import BodyNavbar from "./BodyNavbar";
import logo from "../public/assets/grid_logo_dark2.png";

// import div from "./Layout/div";
// import Android from "../public/assets/Googleplaybutton.svg";
import AndroidSVGComponent from "../components/AndroidSVGComponent";
import Apple from "../public/assets/ApplePlayButton.svg";
// import Apple from "../public/assets/ApplePlayButton.svg";
// import { Pagination, Navigation } from "swiper/modules ";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import { BsChevronRight } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import VideoModal from "./VideoModal";
import QRCodeModal from "./QRCodeModal";
const Home = ({
  listUser = [
    {
      name: "Learn, grow, and gain confidence. GRID breaks down complex concepts and helps you make sense of it all.",
      number: "Try GRID AI",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-01",
    },
    {
      name: "When you need answers, advice, or insights, GRID is in your corner—helping you navigate the everyday.",
      number: "Download Mobile App",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-02",
    },
    {
      name: "Transform ideas into stunning visuals, simplify dense information into clear insights, and polish your writing so your voice shines.",
      number: "Demo Business Portal",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-03",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-copilot-neutral-life-hero-v2-01"
    },
  ],
}) => {
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
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const FeaturesArr = [
    {
      icon: "/assets/Icon/mdi_explore.svg",
      title: "Discover",
      body: "Explore upcoming sports events, news, and trending gaming content effortlessly",
      image: "/assets/test/discovery.webp",
    },
    {
      icon: "/assets/Icon/clarity_connect.svg",
      title: "Connect",
      body: "Stay connected with fellow gamers, create teams, and chat",
      image: "/assets/test/connect.webp",
    },
    {
      icon: "/assets/Icon/pixelarticons_tournament.svg",
      title: "Tournament Management",
      body: "Organize, schedule and promote eSports tournaments with powerful event management tools",
      image: "/assets/test/TournamentManagement.webp",
    },
    {
      icon: "/assets/Icon/fluent_people.svg",
      title: "Team Creation",
      body: "Assemble and manage sports teams efficiently, enhancing your competitve gaming experience",
      image: "/assets/test/TeamCreation.webp",
    },
    {
      icon: "/assets/Icon/entypo_gameController.svg",
      title: "Gaming Database",
      body: "Access a vast repository of games including, stats, guides and eSports insights",
      image: "/assets/test/Games1.webp",
    },
    {
      icon: "/assets/Icon/mingcute_brackets.svg",
      title: "Dynamic Bracketology",
      body: "Experience real-time bracket updates and results for your favorite eSports tournaments",
      image: "/assets/test/DynamicBracketology1.webp",
    },
  ];

  const aiCompanionlist = [
    {
      name: "Understand Esports like never before. GRID AI helps make sense of it all.",
      number: "GRID AI",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-01",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-advanced-ai-331170",
    },
    {
      name: "Build, Manage and Run your events like never before.",
      number: "GRID Mobile",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-02",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-seamlessly-integrated-331170",
    },
    {
      name: "Manage your business, organization, teams and players to the max. Quality insights will shape your business like never before.",
      number: "GRID Enterprise",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-Copilot-Feature-Card-03",
      icon: "https://s7d2.scene7.com/is/content/microsoftcorp/card-business-enterprise-grade-security-331170",
    },
  ];

  const copilotMeetlist = [
    {
      name: "GRID Mobile",
      textHeading:
        "Build local events with old and new friends, find events near you, manage events in minutes and explore games and communities like never before.",
      heading: "Everything you need, in one place",
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Get-priority-access-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1150&qlt=100&fit=constrain",
      btn: "Explore GRID Mobile",
    },
    {
      name: "GRID AI",
      textHeading:
        "Search for information, data & stats, find news, videos and images of what you need, in seconds.",
      heading: "A better way to gain game knowledge",
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Discover-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1125&qlt=100&fit=constrain",
      btn: "Explore GRID AI",
    },
    {
      name: "GRID Platform",
      textHeading:
        "Boost your skills with GRID tools, perform and scale your events in ways that have never been done in Esports.",
      heading: "Be an elite Host",
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Solutions-Power-up-4000x2250?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1125&qlt=100&fit=constrain",
      // icon: "https://s7d2.scene7.com/is/content/microsoftcorp/373238-copilot-neutral-life-hero-v2-01"
      btn: "Explore GRID Platform",
    },
  ];

  const [selectedFeature, setSlectedFeature] = useState({
    icon: "/assets/Icon/mdi_explore.svg",
    title: "Discover",
    body: "Explore upcoming sports events, news, and trending gaming content efforlessly",
    image: "/assets/test/discovery.webp",
  });
  const openLinkAndroid = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.esolutions.grid",
      "_blank"
    );
  };
  const openLinkIOS = () => {
    window.open(
      "https://apps.apple.com/us/app/grid-tournaments-events/id6447766313",
      "_blank"
    );
  };
  return (
    <div>
      {/* <div
        className="hidden lg:block xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl     mt-24 mx-auto"
        id="Home"
      >
        <div className=" px-20 3xl:px-0 sm:grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-5 gap-16 py-6 sm:py-16">
          <div className=" flex flex-col col-span-3  w-full  justify-center items-start row-start-2 sm:row-start-1">
            <h1
              style={{ fontFamily: "Sigmar One" }}
              className="text-2xl text-[44px] 2xl:text-[64px]   font-normal  text-white-300 leading-[72.13px]"
            >
              Tournaments Made
              <strong className="text-[#298be1]"> Simple</strong>
            </h1>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-white-300 mt-[30px] mb-6 text-[16px] 2xl:text-[20px] font-medium "
            >
              GRID is A Mobile and Web Solution For Organizing Gaming Events End
              To End.
            </p>

            <div className="flex max-w-[470px]         justify-between items-start   ">
              <AndroidSVGComponent
                onClick={openLinkAndroid}
                className="w-[218px]    cursor-pointer 	 border-[1px] border-r-2 border-transparent "
              />
              <Apple
                onClick={openLinkIOS}
                className=" w-[218px]    ml-[20px]   cursor-pointer 	 border-[1px] border-r-2 border-transparent "
              />
            </div>
          </div>
          <div className=" flex col-span-2  justify-end">
            <div className="    w-[100%]   ">
              <Image
                src="/assets/test/banner.webp"
                alt="banner"
                priority={true}
                quality={100}
                width={610}
                height={848}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div> */}

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

        {/* UMER CHANGE: Made background become its own block on SiM () 
            Honestly, I got no idea how they can make the video get the two elements closer to each other
            which only works on Chrome for some reason.*/}
        {/* Background Video */}
        <div style={{ width: "100%" }}>
          <video
            className=" block md:absolute top-0 left-0 w-full h-full object-cover"
            src="https://s7d2.scene7.com/is/content/microsoftcorp/373238-copilot-neutral-life-hero-v2-01"
            autoPlay
            muted
            loop={false} // Ensures video only plays once
          ></video>
        </div>

        {/* UMER CHANGE: Added text-balance to prevent orphans + leading-relaxed for pretty */}
        <div
          className={`relative max-w-7xl mx-auto px-6 md:py-16 xs:py-10 md:py-0 md:h-[85vh] md:px-12 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className=" hidden md:block text-5xl lg:text-6xl font-semibold text-gray-900 lg:mb-4 xs:mb-2">
            Tournaments Made Simple
          </h1>
          <img 
              src="assets/grid_logo_dark2.png" 
              alt="logo" 
              className="w-full max-w-[230px] h-auto mb-3"
            />
          <h1 className=" block md:hidden text-4xl lg:text-6xl font-semibold text-gray-900 mb-4">
            Tackle any challenge with GRID
          </h1>
          <p className="text-[black] text-lg mb-6 max-w-3xl text-balance leading-relaxed">
          The Ultimate Solution for Gaming, Sports, and Hobby Events.
          </p>

          {/* UMER CHANGE: Removed lg spacing conditional, made button column flex to better fit  */}
          {/* Buttons */}
          
          <div className="lg:mb-10 xs:mb-6">
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
            <button
              className="bg-[black] text-white-300 px-14 py-6 font-medium hover:bg-gray-200"
              style={{ borderRadius: "12.5rem" }}
            >
              For Individuals
            </button>

            {/* <button
                  className="bg-[white] text-gray-700 px-14 py-6 font-medium hover:bg-gray-100"
                  style={{ borderRadius: "12.5rem" }}
                >
                  For organizations
                </button> */}
            <Link
              activeClass="active"
              href="/Organization"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p
                onClick={() => {
                  setActiveLink("Organization");
                }}
                className={
                  "bg-[white] text-gray-700 px-14 py-6 font-medium hover:bg-gray-100" +
                  (activeLink === "Organization"
                    ? " text-[#19BAEE] animation-active "
                    : " text-[black] hover:text-[black] ")
                }
                style={{ borderRadius: "12.5rem", cursor: "pointer" }}
              >
                For Organizations
              </p>
            </Link>
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
                How it works
              </button>
              <button
                onClick={() =>
                  document.getElementById("Next-steps").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Future of Esports
              </button>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* <a href="https://apps.apple.com/us/app/grid-tournaments-events/id6447766313">
              <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                Download the app
              </button>
              </a> */}
              <QRCodeModal/>
              <a href="https://chatbot-new-ui.netlify.app/#/admin/dashboard">
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                Try GRID AI
              </button>
              </a>
            </div>
          </div>
          <div className="md:hidden py-4">
            <BodyNavbar />
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
                How it works
              </button>
              <button
                onClick={() =>
                  document.getElementById("Next-steps").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-gray-600 hover:text-blue-600"
              >
                Future of Esports
              </button>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* <a href="https://apps.apple.com/us/app/grid-tournaments-events/id6447766313">
              <button className="bg-[black] text-white-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                Download the app
              </button>
              </a> */}
              <QRCodeModal/>
              <a href="https://chatbot-new-ui.netlify.app/#/admin/dashboard">
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                Try GRID AI
              </button>
              </a>
            </div>
          </div>
          <div className="md:hidden py-4">
            <BodyNavbar />
          </div>
        </div>
      </div>

      {/* <div className="block mt-[40px] m-auto  xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl  lg:hidden   ">
        <div className="flex-col    ">
          <h1
            style={{ fontFamily: "Sigmar One" }}
            className="  text-[26px] text-center   font-normal  text-white-300 leading-[29.3px]"
          >
            Tournaments Made
            <strong className="text-[#298be1]"> Simple</strong>
          </h1>
          <p
            style={{ fontFamily: "Inter" }}
            className="text-[14px] text-center  mt-[30px]  text-white-300 leading-[22.3px] font-medium "
          >
            GRID is A Mobile and Web Solution For Organizing Gaming Events End
            To End.
          </p>

          <div className=" flex mt-[30px]   justify-center           ">
            <div className="w-[110px] h-[30px]  relative   cursor-pointer 	      ">
              <img
                src={"../assets/GooglePlayButton.png"}
                onClick={openLinkAndroid}
                width={"110px"}
                height={"30px"}
              />
            </div>

            <Apple
              onClick={openLinkIOS}
              className=" w-[110px]  h-[30px]      ml-[20px]   cursor-pointer 	      "
            />
          </div>
        </div>
      </div> */}

      {/* UMER CHANGE: Change font size to fit things properly and Fixed dynamic spacing also added box shadow to cards*/}
      <div
        className="bg-[url('/assets/bg_sec1.avif')]  bg-repeat-round"
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
                  Powerful Tools Suite
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

      {/* <div className="    m-auto  xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl  xs:px-4 lg:px-20 3xl:px-0 mt-[60px]  xl:mt-[140px]   mx-auto  ">
        <div className=" relative w-full py-[24px] sm:py-[48px]    ">
          <YouTube
            videoId={"tKK1W3ADNCA"} // defaults -> ''
            id={"tKK1W3ADNCA"} // defaults -> ''
            className="container rounded-[9px] xl:rounded-[24px]"
            // style={{objectFit:'contain'}}
            // style={{ borderRadius: 24 }}
            iframeClassName={"responsive-iframe"} // defaults -> ''
          />
        </div>
      </div> */}

      {/* UMER CHANGE: Changed how div is resized, also made the cat image like Microsoft, but still dont like it and not sure what to do */}
      <div
        className="bg-[url('/assets/bg_sec2.avif')] bg-repeat-round"
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
                    Create better tournament experiences
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
                    GRID AI helps you find events near you, connect with like-minded individuals, and focus on the games
                  </h1>
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="text-[black] mt-[30px] mb-6 text-[16px]"
                  >
                    Answers to any gaming questions, at a moments notice.
                    
                  </p>
                </div>
                <div className="flex max-w-[470px] justify-between items-start">
                <a href="https://chatbot-new-ui.netlify.app/#/admin/dashboard">
                  <button className=" bg-[black] text-[white] px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                    Try GRID AI
                  </button>
                  </a>
                  {/* <a href="https://apps.apple.com/us/app/grid-tournaments-events/id6447766313">
                  <button className="border border-blue-900 mx-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                    Download the app
                  </button>
                  </a> */}
                  <QRCodeModal/>
                </div>
              </div>
              <div className=" flex col-span-2 justify-end ">
                <img
                  className="rounded-xl md:object-cover"
                  src="/assets/cat_sec2_img.avif"
                  alt="Image"
                />
              </div>
            </div>
            <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9  mt-[40px]  xl:mt-0 ">
              {copilotMeetlist.map((listUsers, index) => (
                <div
                  className="flex-start justify-center bg-[white] rounded-[24px] md:mx-3 w-auto p-2 shadow-sm"
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

      {/* <div className="xl:flex relative w-full  mt-[60px]  xl:mt-[140px]" id="Next-steps">
        <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl  xs:px-4 lg:px-20 3xl:px-0      mx-auto">
          <div className="md:grid grid-flow-row md:grid-flow-col grid-rows-2 md:grid-rows-1 md:grid-cols-5 gap-16  py-6 md:py-16    ">
            <div className="flex flex-col xl:items-start justify-center    col-span-3     ">
              <p
                style={{ fontFamily: "Sigmar One" }}
                className="    text-white-300 font-bold text-center lg:text-left   	text-[24px] xl:text-[48px]   "
              >
                Game on
              </p>
              <p className="text-[13px]   text-white-300 font-semibold w-full lg:w-[80%]   text-center lg:text-left  	  xl:text-[20px] leading-[25px] xl:leading-8	 mt-[20px] xl:mt-[24px]">
                GRID Makes It Easy To Find Local Community Gaming Events. You
                Can Create Or Join eSports Teams And Explore Gaming HUBs Near
                You To Participate In Tournaments.
              </p>
            </div>
            <div className="hidden lg:flex items-end justify-end    col-span-2       ">
              <div className="sm:w-[80%] ">
                <Image
                  src={"/assets/images-aEPCiQvtEXXtnTUnYGPmqyVZKWw.png"}
                  alt="banner"
                  quality={100}
                  width={472}
                  height={505}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="bg-[url('/assets/bg_sec3.avif')] bg-repeat-round"
        id="Next-steps"
      >
        <div className="mx-4 min-[540px]:mx-16 2xl:max-w-screen-xl 2xl:mx-auto lg:px-20 3xl:px-0  py-[40px]  xl:py-[100px]  ">
          <div className="x-auto">
            <div className="flex items-start j justify-center pb-10 w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0">
              <div className=" mx-auto w-full   ">
                <div className="flex flex-col justify-center items-center ">
                  {/* <p className="  text-center text-white-300 font-medium    text-[14px]	 lg:text-[20px]">
                  HOW IT WORKS
                </p> */}
                  <p className="  text-center text-[black] font-medium text-[3rem]">
                  The first dedicated Esports AI 
                  </p>
                  {/* <p className=" text-center text-white-300 font-medium  text-[12px]	  xl:text-[20px]	 mt-[12px] xl:mt-[24px]">
                  Let GRID take care of event management, so you can focus on
                  the games
                </p> */}
                </div>
              </div>
            </div>
            <div className="bg-[url('/assets/bg_sec2.avif')] rounded-3xl shadow-lg p-4  mb-8">
              <div className=" flex flex-col col-span-2 p-8 w-full  justify-between items-center row-start-2 sm:row-start-1">
                <div>
                  <h1
                    // style={{ fontFamily: "Sigmar One" }}
                    className="text-3xl font-semibold text-black my-5 text-center"
                  >
                    Easy to use and very capable
                  </h1>
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="text-[black] mb-6 text-[16px] text-center"
                  >
                    Features that help you improve your daily lives, save you time, help you grow and make you money.
                  </p>
                </div>
                <div className="flex max-w-[470px] justify-between items-start">
                  {/* <button className="bg-[black] text-[white] mx-4 px-4 py-2 rounded-lg font-medium hover:bg-blue-800">
                    Download the GRID app
                  </button> */}
                  <QRCodeModal/>
                </div>
              </div>
            </div>
            <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 pb-9 mt-[40px] xl:mt-0">
              {/* First Card */}
              <div className="bg-[white] flex flex-col mx-2 rounded-3xl shadow-lg h-full">
                <div className="flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-2  md:grid-rows-1 p-4 h-full gap-8">
                  <div className="flex flex-col col-span-1 w-full justify-between items-start row-start-2 sm:row-start-1 h-full">
                    <div className="flex-grow">
                      <div className="mb-4">
                        <img
                          src="assets/just-G-logo.png"
                          height="32px"
                          width="32px"
                        />
                      </div>
                      <h1 className="text-xl font-semibold text-black">
                        Current Offerings
                      </h1>
                      <p
                        style={{ fontFamily: "Inter" }}
                        className="text-[black] mt-[30px] mb-6 text-sm"
                      >
                        Find out everything you can do with the GRID App right now – Brackets, Events Management, Player & Event Search and more.
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
                      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/364825-media2-vp1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=468&qlt=100&fmt=png-alpha&fit=constrain"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="bg-[white] flex flex-col mx-2 rounded-3xl shadow-lg h-full">
                <div className="flex flex-col-reverse md:grid grid-rows-2 md:grid-flow-col md:grid-cols-2  md:grid-rows-1 p-4 h-full gap-8">
                  <div className="flex flex-col col-span-1 w-full justify-between items-start row-start-2 sm:row-start-1 h-full">
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
                        Learn as you go. Your personal dedicated concierge for all things gaming. Never not know.
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
                      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/373238-ai-Journey-tile-3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=640&hei=796&qlt=100&fmt=png-alpha&fit=constrain"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="  xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl     xs:px-4 lg:px-20 3xl:px-0 mt-[60px]  xl:mt-[140px]    mx-auto  ">
        <div className="  w-full justify-end">
          <div className="  ">
            <div className=" relative w-full py-[24px] sm:py-[48px]    ">
              <div>
                <YouTube
                  videoId={"4hkw_0R66pA"} // defaults -> ''
                  id={"4hkw_0R66pA"} // defaults -> ''
                  // style={{ borderRadius: 24 }}
                  className="container rounded-[9px] xl:rounded-[24px]"
                  iframeClassName={"responsive-iframe"} // defaults -> ''
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="hidden lg:block px-20 3xl:px-0  xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl  mx-auto  py-[48px]   w-full     mt-[44px]   ">
        <div className="">
          <div className="flex justify-center justify-items-center items-center  mt-[20px]   gap-[10%]">
            <div className="flex  justify-between flex-wrap    sm:w-[60%] sm:gap-[5%]  ">
              <p className="text-xl w-full   text-[#19BAEE] font-semibold   leading-10	 text-[26px]  sm:text-[30px]">
                Our Mobile App Features
              </p>
              {FeaturesArr.map((x, i) => {
                return (
                  <div
                    onClick={() => setSlectedFeature(x)}
                    key={i}
                    style={{
                      backgroundColor:
                        selectedFeature.title === x.title
                          ? "#1C2A5B"
                          : "transparent",
                    }}
                    className="flex justify-center items-center w-[47%] mt-[30px] h-[130px] cursor-pointer hover:bg-[#1C2A5B]  p-[15px] border-[1px] border-[#585858] rounded-[16px]"
                  >
                    <div className="flex justify-center items-center   gap-[5%]">
                      <div className="w-[90%]  ">
                        <div className="flex              ">
                          <div className="  flex items-center   ">
                            <Image
                              src={x.icon}
                              alt=""
                              quality={100}
                              width={"20px"}
                              height={"20px"}
                              layout="fixed"
                            />
                          </div>
                          <p className="  w-[80%] ml-[10px]   text-[#fff] font-semibold    text-[12px]	    2xl:text-[18px]">
                            {x.title}
                          </p>
                        </div>
                        <div className="flex  items-center justify-items-center  justify-between mt-[5px]  ">
                          <p className="  w-full  text-[#fff]    text-[8px]    2xl:text-[14px]">
                            {x.body}
                          </p>
                        </div>
                      </div>
                      <div className="w-[5%] ">
                        <BsChevronRight className="text-white-300 font-semibold  text-[20px]" />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex  w-[700px]   mt-[40px]        justify-between items-center   ">
                <p className="text-xl w-full   text-[#fff] font-semibold   leading-10	text-[14px] xl:text-[18px]   ">
                  Available For Download
                </p>
                <div className="flex          justify-between items-start   ">
                  <AndroidSVGComponent
                    onClick={openLinkAndroid}
                    className="w-[110px] xl:w-[150px] 2xl:w-[218px]    cursor-pointer 	 border-[1px] border-r-2 border-transparent "
                  />
                  <Apple
                    onClick={openLinkIOS}
                    className=" w-[110px] xl:w-[150px] 2xl:w-[218px]    ml-[20px]   cursor-pointer 	 border-[1px] border-r-2 border-transparent "
                  />
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end w-full sm:w-[30%]        ">
              <div className="w-[200px]  xl:w-[300px] h-[400px] xl:h-[600px]  ">
                <Image
                  src={selectedFeature.image}
                  priority={true}
                  alt=""
                  width={300}
                  height={600}
                  // className="bg-orange-100"
                  layout="fixed"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:hidden   mt-[40px]   m-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl  justify-center items-center ">
        <p className=" text-xl w-full text-center   text-[#19BAEE] font-semibold   leading-10	 text-[26px]  sm:text-[30px]">
          Our Mobile App Features
        </p>
        <Swiper
          modules={[Pagination, Navigation]}
          className="border-0 mt-[24px] lg:mt-[80px] "
          spaceBetween={48}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {FeaturesArr.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center ">
                  <div className="      ">
                    <Image
                      src={data.image}
                      priority={true}
                      alt=""
                      width={"172px"}
                      height={"342px"}
                      // className="w-[300px] h-[600px]"
                      layout="fixed"
                    />
                  </div>
                </div>
                <div
                  onClick={() => setSlectedFeature(x)}
                  className="w-full mt-[20px] max-h-[130px] cursor-pointer hover:bg-[#1C2A5B]  p-[15px]  rounded-[16px]"
                >
                  <div className="flex justify-center items-center   ">
                    <div className="w-[100%]  ">
                      <div className="flex    items-center justify-center          ">
                        <div className="  flex items-center   bg justify-center">
                          <Image
                            src={data.icon}
                            alt=""
                            quality={100}
                            width={"20px"}
                            height={"20px"}
                            layout="fixed"
                            priority
                          />
                        </div>
                        <p className="   ml-[10px]   text-[#fff] font-semibold    	   text-[18px]">
                          {data.title}
                        </p>
                      </div>
                      <div className="flex  justify-center    mt-[5px]  ">
                        <p className="   text-center text-[#fff]         text-[12px]">
                          {data.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
      {/* <div className="   relative w-full bg-[#298BE2] ">
        <div className=" m-auto  xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl      py-[48px]   w-full     mt-[44px]   ">
          <div className="flex flex-col  items-center justify-center xl:w-[60%] m-auto       ">
            <p className="text-xl text-center font-semibold xs:w-2/3 xs:leading-[30px] text-white-300  mt-[24px] lg:leading-10	 text-[24px]  xl:text-[30px]">
              Hassle-free Events Management
            </p>
            <p className="text-lg text-center  text-white-300 text-[12px] xl:text-[18px] leading-8	mt-[20px] lg:mt-[24px]">
              Simple and intuitive event planning, dynamic bracketology system,
              social profiles and quick communication systems, a marketplace,
              analytics and funds management.
              <br />
       
              <br />
              Truly a super-app to connect gamers by!
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
