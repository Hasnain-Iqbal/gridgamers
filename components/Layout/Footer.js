import React from "react";
import LogoVPN from "../../public/assets/grid-logo-new.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";

const Footer = () => {
  const openLinkfacebook = () => {
    window.open("https://www.facebook.com/gridgamersapp", "_blank");
  };
  const openLinkTwitter = () => {
    window.open("https://twitter.com/GRIDGamersApp", "_blank");
  };
  const openLinkInstagram = () => {
    window.open("https://www.instagram.com/gridgamers/", "_blank");
  };
  return (
    <div className="xs:px-4 lg:px-20 3xl:px-0 m-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  2xl:max-w-screen-2xl   ">
      <div className="py-20 grid xl:grid-rows-1 grid-flow-row xl:grid-flow-col grid-cols-3 xl:grid-cols-12 gap-4">
        <div className="row-span-2 col-span-12 xl:col-span-3 xl:col-start-1 xl:col-end-4 flex flex-col items-start ">
          <img
           className="h-10 w-auto mb-6"
           src="/assets/grid_logo_dark3.png"
           alt="Grid Logo"
            />

          <p className="xl:mb-4 text-[black] w-full">Made for Gamers by Gamers</p>
        </div>
        <div className=" row-span-1 col-span-12 xl:col-span-3 xl:col-start-7 xl:col-end-9 flex flex-col">
          <p className=" mt-[20px] lg:mt-0 text-[black]  font-semibold xs:text-[20px] lg:text-[24px]">
            Quick Links
          </p>
          <ul className="text-[black] ">
            <Link href="/">
              <li className="mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">Home</li>
            </Link>
            <Link href="/Accessibility">
              <li className="mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">Accessibility</li>
            </Link>
            <Link href="/DevicesSafety">
              <li className=" mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">
              Sustainability
              </li>
            </Link>
            <Link href="/TrademarkBrand">
              <li className=" mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">
                Trademark Brand
              </li>
            </Link>
            <Link href="/GridPartners">
              <li className=" mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">
                Grid Partners
              </li>
            </Link>
            {/* <Link href="/TermConditions">
              <li className=" mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">
                Terms and Conditions
              </li>
            </Link>
            <Link href="/career">
              <li className=" mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">
                Career
              </li>
            </Link> */}
          </ul>
        </div>
        <div className="row-span-1 col-span-12 xl:col-span-3 xl:col-start-9 xl:col-end-11 flex flex-col">
          <p className="text-[black] mt-[20px] lg:mt-0  font-semibold xs:text-[20px] lg:text-[24px]">
            Contact us
          </p>
          <ul className="text-[black]">
            <Link href="/CareersPage">
              <li className=" mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">
              Careers
              </li>
            </Link>
            <Link href="/Documentation">
              <li className=" mt-[10px] xs:text-[16px] lg:text-[20px] hover:text-[#298be1] cursor-pointer transition-all text-[black]">
                FAQs
              </li>
            </Link>
            <li className=" mt-[10px] xs:text-[16px] lg:text-[20px]  hover:text-[#298be1] cursor-pointer transition-all">
              info@gridgamers.com{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-1  col-span-12 xl:col-span-3 xl:col-start-11 xl:col-end-13 flex flex-col">
          <p className="text-[black] mt-[20px] lg:mt-0   font-semibold xs:text-[20px] lg:text-[24px]">
            Follow us
          </p>
          <div className="flex w-full mt-2  -mx-2">
            <div
              onClick={openLinkfacebook}
              className="mx-2 bg-[#19BAEE] rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <img 
                src="/assets/Icon/facebook.svg"
                className="h-6 w-6 cursor-pointer" />
            </div>
            <div onClick={openLinkTwitter} className="cursor-pointer mx-2 bg-[#19BAEE] rounded-full items-center justify-center flex p-2 shadow-md">
              <img 
                src="/assets/Icon/twitter.svg"
                className="h-6 w-6" />
            </div>
            <div onClick={openLinkInstagram} className="cursor-pointer mx-2 bg-[#19BAEE] rounded-full items-center justify-center flex p-2 shadow-md">
              <img 
                src="/assets/Icon/instagram.svg"
                className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl border-b-[1px] border-b-black-500 mx-auto grid grid-flow-col py-[10px] xl:py-[20px]"></div>
      
      <p className="my-4 text-[black] text-[12px] xl:text-[18px] text-center pb-[50px] xl:pb-0">
        Copyright © {new Date().getFullYear()}. Grid Platform Inc. All rights reserved.
      </p>
    </div>

  );
};

export default Footer;
