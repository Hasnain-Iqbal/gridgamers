import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
// import Android from "../public/assets/Googleplaybutton.svg";
import AndroidSVGComponent from "../components/AndroidSVGComponent";

import Apple from "../public/assets/ApplePlayButton.svg";
import YouTube from "react-youtube";
const Hubss = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

const About = () => {
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
    <>
      <div
        className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl  2xl:max-w-screen-2xl lg:max-w-screen-lg  lg:py-[40px]  mt-[40px] lg:mt-24 mb-6 md:mt-14 md:mb-14   mx-auto"
        
      >
        <ScrollAnimationWrapper>
          <div className="grid   grid-flow-row md:grid-flow-col grid-rows-2 md:grid-rows-1   md:grid-cols-2 gap-8 py-6 md:py-16 xs:px-4 lg:px-20 3xl:px-0 ">
            <div className=" flex flex-col    ">
              <h1 className="text-[24px] xl:text-[45px] text-center lg:text-left  font-medium  text-white-300  ">
                What is GRID.
              </h1>
              <p
                style={{ fontFamily: "Inter" }}
                className="text-white-300 mt-4 mb-6 text-center lg:text-left"
              >
                GRID is a first of its kind mobile events and gaming app where
                you can meet other gamers and show your skills by attending
                events and tournaments. Compete against top ranked gamers and
                claim your spot on national scoreboards.
              </p>

              <div className="hidden xl:flex       xl:max-w-[500px]   mt-[20px]  justify-start     xl:justify-start items-center     ">
                <p className="text-xl w-full   text-[#fff] font-semibold   leading-10	 text-[18px]   ">
                  Available For Download
                </p>
                {/* <AndroidSVGComponent
                  onClick={openLinkAndroid}
                  className=" w-[218px]   cursor-pointer rounded-[12px]	 border-[1px] border-r-2 border-transparent "
                />
                <Apple
                  onClick={openLinkIOS}
                  className="  w-[218px]  ml-[10px]    cursor-pointer rounded-[12px]	 border-[1px] border-r-2 border-transparent "
                /> */}
              </div>
            </div>
            <div className="flex w-full   ">
              <div className=" w-full  ">
                <YouTube
                  videoId={"0vrkk_Bk0BU"} // defaults -> ''
                  id={"0vrkk_Bk0BU"} // defaults -> ''
                  className="container"
                  style={{ borderRadius: 24 }}
                  iframeClassName={"responsive-iframe"} // defaults -> ''
                />
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
        <div className=" xs:hidden flex lg:block xl:hidden       w-full   mt-[20px]  justify-start  xs:px-4 lg:px-20 3xl:px-0     xl:justify-start items-center     ">
          <p className="text-xl w-full   text-[#fff] font-semibold   leading-10	 text-[18px]   ">
            Available For Download
          </p>
          {/* <AndroidSVGComponent
            onClick={openLinkAndroid}
            className=" w-[218px]   cursor-pointer rounded-[12px]	 border-[1px] border-r-2 border-transparent "
          />
          <Apple
            onClick={openLinkIOS}
            className="  w-[218px]  ml-[10px]    cursor-pointer rounded-[12px]	 border-[1px] border-r-2 border-transparent "
          /> */}
        </div>
      </div>
      <div className="relative w-full bg-[#298BE2]  ">
        <div className="max-w-screen-xl py-[40px] mt-8  md:mt-14 md:mb-14  md:px-8   mx-auto  xs:px-4 lg:px-20 3xl:px-0 ">
          <ScrollAnimationWrapper className="  w-full justify-end">
            <div className="relative w-full ">
              <div className=" mx-auto w-full sm:w-auto">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl text-center text-white-300 font-bold mt-[24px] leading-10	  text-[20px]  xl:text-[41px]">
                    Our Background
                  </p>
                  <p className="text-lg text-center text-white-300 text-[12px] xl:text-[24px] leading-10	 mt-[24px]">
                    GRID was started in 2021 by two brothers in Dallas, Texas,
                    who were passionate about gaming. We started out as an
                    events management company, but soon realized the need for an
                    automated solution for both businesses to host and manage
                    events, and for gamers to get equal access to competitions.
                    At the same time, we noticed that the top 10% of gamers get
                    access to all the earning opportunities in the space, while
                    the bottom 90% are left out.
                  </p>
                  <p className="text-lg text-center   text-white-300 text-[12px] xl:text-[24px] leading-10	 mt-[48px]">
                    And so, GRID was born as a B2B2C solution. For businesses,
                    we developed a first-of-its-kind mobile events and gaming
                    app where gamers can meet other gamers and show their skills
                    by attending events and tournaments, compete against
                    top-ranked gamers, and claim their spot on national
                    scoreboards. For gamers, we developed a mobile app to allow
                    them to connect with like-minded gamers and quickly engage
                    in competitions, by equipping them with the best tournament
                    tools in the market.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default About;
