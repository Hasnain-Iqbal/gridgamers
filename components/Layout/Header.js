import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Import react scroll
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/grid-logo-new.svg";
import LogoMobile from "../../public/assets/logo_2.webp";

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const path = router.pathname.split("/")[1];
    setActiveLink(path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home");
  }, [router.pathname]);

  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "hidden lg:block fixed  top-0 w-full h-[120px] lg:px-20 3xl:px-0 z-30 bg-[black] transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl border-b-[1px]  w-full      border-b-black-500  mx-auto grid grid-flow-col py-[50px] sm:py-[20px]">
          <div className="col-start-1 col-end-2 flex items-start">
            <LogoVPN className="h-[75px] w-[200px]" />
          </div>
          <ul className="hidden lg:flex col-start-6 col-end-6 text-white-300    items-center justify-center">
            <Link activeClass="active" href="/">
              <p
                onClick={() => {
                  setActiveLink("Home");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer text-[20px] font-semibold  inline-block relative" +
                  (activeLink === "Home"
                    ? " text-[#19BAEE] animation-active "
                    : " text-white-300 hover:text-[#19BAEE] a")
                }
              >
                Home
              </p>
            </Link>

            <Link
              activeClass="active"
              href="/About"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p
                onClick={() => {
                  setActiveLink("About");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer text-[20px] font-semibold inline-block relative" +
                  (activeLink === "About"
                    ? " text-[#19BAEE] animation-active "
                    : " text-white-300 hover:text-[#19BAEE] ")
                }
              >
                About
              </p>
            </Link>
            <Link
              activeClass="active"
              href="/ConatctUs"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p
                onClick={() => {
                  setActiveLink("ConatctUs");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer text-[20px] font-semibold inline-block relative" +
                  (activeLink === "ConatctUs"
                    ? " text-[#19BAEE] animation-active "
                    : " text-white-300 hover:text-[#19BAEE] ")
                }
              >
                Contact Us{" "}
              </p>
            </Link>
            <Link
              activeClass="active"
              href="/Documentation"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p
                onClick={() => {
                  setActiveLink("Documentation");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer text-[20px] font-semibold inline-block relative" +
                  (activeLink === "Documentation"
                    ? " text-[#19BAEE] animation-active "
                    : " text-white-300 hover:text-[#19BAEE] ")
                }
              >
                Documentation{" "}
              </p>
            </Link>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline
              onClick={() =>
                window.open("https://portal.gridgamers.com/", "_self")
              }
            >
              Become Hub
            </ButtonOutline>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className="lg:hidden px-[15px] flex justify-center  mt-[45px]   relative">
        <Image
          src={LogoMobile}
          layout="fixed"
          height={38}
          width={80}
          // className="h-[38px] w-[80px]  z-30"
        />
        {/* <ButtonOutline onClick={()=>window.open("https://portal.gridgamers.com/","_self")}>Become Hub</ButtonOutline> */}
      </div>
      <div className="lg:hidden flex justify-start  mt-[45px]   relative"></div>
      <nav className="fixed lg:hidden w-full bottom-0 left-0 right-0 z-20  shadow-t ">
        <div className="bg-[black] sm:px-3">
          <ul className="flex w-full justify-center items-center text-white-300">
            <Link activeClass="active" href="/">
              <div
                onClick={() => {
                  setActiveLink("Home");
                }}
                className={
                  "w-[50%]  mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "Home"
                    ? "  border-[#19BAEE] text-[#19BAEE]"
                    : " border-transparent")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Home
              </div>
            </Link>
            <Link href="/About">
              <div
                onClick={() => {
                  setActiveLink("About");
                }}
                className={
                  "w-[50%] mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "About"
                    ? "  border-[#19BAEE] text-[#19BAEE]"
                    : " border-transparent ")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                About
              </div>
            </Link>
            <Link href="/ConatctUs">
              <div
                onClick={() => {
                  setActiveLink("ConatctUs");
                }}
                className={
                  "w-[50%] mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "ConatctUs"
                    ? "  border-[#19BAEE] text-[#19BAEE]"
                    : " border-transparent ")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.294-14.697h-.006a.999.999 0 0 0-.832.555l-1.893 4.447a1 1 0 0 0 .174 1.054c.169.2.42.315.682.315.126 0 .254-.026.378-.081l4.452-1.893a1.001 1.001 0 0 0 .555-.833v-.006a1 1 0 0 0-.338-.69L9.634 7.924a4.496 4.496 0 0 0-.803 1.375c-.073.186-.229.322-.424.371a.991.991 0 0 0-.725.951c.02.392.189.763.491 1.078l1.892 2.36a1 1 0 0 0 1.334.215c.256-.176.439-.437.491-.749.029-.137.089-.273.185-.394a3.498 3.498 0 0 1 1.006-1.007l2.359-1.892c.314-.302.686-.471 1.078-.491a.992.992 0 0 0 .951.725c.332-.041.631-.18.87-.408a4.497 4.497 0 0 0 1.375-.804l-2.358-2.358a.999.999 0 0 0-.69-.339z" />
                </svg>
                Contact Us{" "}
              </div>
            </Link>
            <Link href="/Documentation">
              <div
                onClick={() => {
                  setActiveLink("Documentation");
                }}
                className={
                  "w-[50%] mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "Documentation"
                    ? "  border-[#19BAEE] text-[#19BAEE]"
                    : " border-transparent ")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
                Documentation{" "}
              </div>
            </Link>
          </ul>
        </div>
      </nav>

      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
