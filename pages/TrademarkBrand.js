import React, { useMemo, useState } from "react";
import OtherHeader from "components/OtherHeader";
const TrademarkBrand = ({}) => {
  const brandList = [
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=380&hei=213&fit=crop",
      title: "Microsoft logo",
      detail:
        "See Specific Brand and Product Guidelines section for more information on use requirements.",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4WQAx-Legal-IP-TM-CP-logo-lockups-740x417-1?wid=380&hei=213&fit=crop",
      title: "Microsoft logo lockups",
      detail:
        "These include logo lockups for flagship offerings, which are offerings that are aligned to and signal Microsoft’s long-term strategic intent. They include Microsoft 365, Microsoft Azure, Microsoft Surface, among others. See Specific Brand and Product Guidelines for more information.",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4Xbkx-Legal-IP-TM-CP-product-icons-740x417-1?wid=380&hei=213&fit=crop",
      title: "Microsoft product icons",
      detail:
        "These include app icons for products such as Microsoft 365, Microsoft Dynamics, Microsoft Azure, and others. See Specific Brand and Product Guidelines section for more information.",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4WQAB-Legal-IP-TM-CP-Surface-badge-740x417-1?wid=380&hei=213&fit=crop",
      title: "Badges",
      detail:
        "This includes badges to show designations or relationships between your product and Microsoft.",
    },
  ];

  const accessibleTechnology = [
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Windows-v2-120x120?wid=120&hei=120",
      name: "Windows",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-M365-v2-120x120?wid=120&hei=120",
      name: "Microsoft 365",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Teams-v2-120x120?wid=120&hei=120",
      name: "Microsoft Teams",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-Xbox-v1-120x120?wid=120&hei=120",
      name: "Xbox",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-VisualStudio-v2-120x120?wid=120&hei=120",
      name: "Visual Studio",
    },
    {
      icon: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accessibility-HomePage-LinkNav-AdaptiveAccessories-v1-120x120?wid=120&hei=120",
      name: "Adaptive accessories",
    },
  ];

  return (
    <div className="bg-[white]">
      <div className="py-5">
        <OtherHeader text="Trademark" />
      </div>
      <div className=" md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto lg:px-0 w-full px-3">
        <div className="relative">
          <img
            className="lg:bg-cover bg-contain lg:flex relative w-full"
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4Xbkl-Legal-IP-TM-Hero-1600x600-1:VP5-1920x600"
          ></img>
          <div className="bg-[white] w-[40%] p-10 hidden lg:block absolute top-1/2 left-16 transform -translate-y-1/2">
            <h1 className="text-start text-[black] font-semibold leading-tight text-3xl ">
              Microsoft Trademark and Brand Guidelines
            </h1>
            {/* <p
                            style={{ fontFamily: "Inter" }}
                            className="text-[black] my-5 text-sm"
                        >
                            The sustainability of our products begins with their design.
                        </p> */}
          </div>
          <div className="bg-[white] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-black p-4 w-[95%] shadow-lg py-12 hidden md:block lg:hidden">
            <h1 className="text-start text-[black] font-semibold text-4xl ml-4">
              Microsoft Trademark and Brand Guidelines
            </h1>
          </div>
          <div className="bg-[white] md:hidden text-start text-[black] font-semibold text-3xl px-6 py-12 text-balance shadow-md">
            Microsoft Trademark and Brand Guidelines
          </div>
        </div>

        <div className="md:mt-20 lg:mt-0">
          <div className="mx-auto py-4 md:py-12 w-full justify-center items-start text-start ">
            <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
              Thank you for helping us protect our trademarks and brand assets
            </h1>
            <p className="text-[black] w-full text-md leading-relaxed mb-8">
              Microsoft is grateful for the trust that people place in our
              products, services, and experiences. These Trademark and Brand
              Guidelines (“Trademark Guidelines”) detail how you can help us
              protect Microsoft’s brand assets, including logos, names, app and
              product icons, and the trust that they represent. We have created
              these Trademark Guidelines to help clarify proper usage of our
              brand assets. Microsoft reserves the right to take action as
              necessary to protect them and, as a result, protect its customers
              and the public.
            </p>
            <p className="text-[black] text-md leading-relaxed">
              Microsoft’s brand assets—including the Microsoft Trademarks (PDF)
              (as updated from time to time), logos, icons, designs, trade
              dress, fonts, names of Microsoft software, products, services,
              sounds, emojis, and any other brand features and elements, whether
              registered or unregistered (“Brand Assets”)—are proprietary assets
              owned exclusively by Microsoft and its group of companies. These
              Trademark Guidelines, which may be updated from time to time,
              detail how our Brand Assets can be used under specific
              circumstances. To help illustrate use cases, Contoso is used as
              the fictitious partner brand. Many uses, including our logos, app
              and product icons, and other designs, will require a license
              first. Unless you have an express license from Microsoft, these
              Trademark Guidelines will exclusively govern your use of our Brand
              Assets.
            </p>
            <div className="mx-auto py-12 w-full justify-center items-start text-start">
              <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
                Examples of uses governed by these Trademark Guidelines
              </h1>
              <p className="text-[black] ml-10">
                <ul style={{ listStyle: "disc" }}>
                  <li className="mb-3">
                    Don’t miss Contoso’s Memorial Day sale featuring a limited
                    time discount on Microsoft Excel software.
                  </li>
                  <li className="mb-3">
                    The Contoso Game can be played on Xbox gaming consoles.
                  </li>
                  <li className="mb-3">
                    The Contoso App works with Microsoft Teams.
                  </li>
                </ul>
              </p>
            </div>

            <div className="mx-auto py-12 w-full justify-center items-start text-start">
              <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4 text-balance">
                Examples of Brand Assets requiring authorization from Microsoft
              </h1>
            </div>

            <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-2 lg:grid-cols-4 space-y-2 pb-9  xl:mt-0 ">
              {brandList.map((data, index) => (
                <div
                  className="flex-start justify-center w-auto p-3"
                  key={index}
                >
                  <div className=" mx-auto w-full md:w-auto">
                    <div className="flex items-center justify-center m-auto">
                      <img className="" src={data.icon} />
                    </div>
                    <div className="flex flex-col justify-center items-start mt-[12px] xl:mt-[20px] ">
                      <p className="text-2xl text-start text-[black] font-semibold">
                        {data.title}
                      </p>
                      <p className="text-md text-start text-[black] mt-[12px]">
                        {data.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" border-b-[1px] border-b-black-500 mx-auto grid grid-flow-col"></div>

        <div className=" mx-auto">
          <div className="mx-auto py-12 w-full justify-center items-start text-start">
            <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
              Dos and don’ts
            </h1>
            <p className="text-[black] w-full text-md leading-relaxed mb-8">
              To help you understand what you can and can’t do with Microsoft’s
              Brand Assets, we have created this non-exhaustive list of Dos and
              Don’ts. In general, wordmarks can be used to truthfully convey
              information about your product or service, as long as customers
              and the public will not be confused into believing Microsoft is
              affiliated with or endorses your product or service. However, our
              logos, app and product icons, illustrations, photographs, videos,
              and designs can never be used without an express license. Please
              review these additional tips to better understand how you can more
              clearly communicate the role that our Brand Assets convey in your
              communications.
            </p>
          </div>

          <div className="mx-auto w-full justify-center items-start text-start">
            <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
              Dos
            </h1>
            <p className="text-[black] w-full text-md leading-relaxed mb-8">
              In general, you may do the following with Microsoft’s wordmarks
              and names of software, products, or services:
            </p>

            <div className="flex">
              <div>
                <img
                  className="px-3"
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCP5x-1?wid=40&hei=40"
                />
              </div>
              <div>
                <h1 className="text-md w-full font-bold text-[black] mb-4">
                  Note if your product, service, or solution is interoperable or
                  compatible with a Microsoft product, service, or solution.
                  Communicate if your product, service, or solution goes through
                  the approved certification process.
                </h1>
                <p className="text-[black] ml-10">
                  <ul style={{ listStyle: "circle" }}>
                    <li className="mb-3">
                      Contoso headphones are compatible with Microsoft Surface.
                    </li>
                    <li className="mb-3">
                      Contoso app is certified for Microsoft Teams.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full justify-center items-start text-start">
            <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
              Don’ts
            </h1>
            <p className="text-[black] w-full text-md leading-relaxed mb-8">
              Without a written license or express permission under one of
              Microsoft's other published guidelines (e.g., Specific Brand and
              Product Guidelines below), don’t do the following:
            </p>

            <div className="flex">
              <div>
                <img
                  className="px-3"
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCP5y-Legal-IP-Trademarks-List-Icon-Dont-80x35-1?wid=40&hei=40"
                />
              </div>
              <div>
                <h1 className="text-md w-full font-bold text-[black] mb-4">
                  Don’t use Microsoft’s Brand Assets in the name of your
                  business, product, service, app, domain name, social media
                  account, other offering, or business indicator.
                </h1>
                <p className="text-[black] ml-10">
                  <ul style={{ listStyle: "circle" }}>
                    <li className="mb-3">Contoso OneDrive software.</li>
                    <li className="mb-3">Contoso Surface headphones.</li>
                    <li className="mb-3">www.azurevirtualmachine.com</li>
                    <li className="mb-3">@xboxsuperfans</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-[1px] border-b-black-500 mx-auto grid grid-flow-col"></div>

        <div className=" mx-auto">
          <div className="mx-auto pt-12 w-full justify-center items-start text-start">
            <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
              App Guidelines
            </h1>
            <p className="text-[black] w-full text-md leading-relaxed mb-8">
              Without a license arrangement with Microsoft, everything about
              your app (including developer name, app name, logo, description,
              screenshots, and other app collateral) must be unique to you and
              free of Microsoft’s Brand Assets. The only exception is that you
              may truthfully state whether your app is compatible or
              interoperable with a Microsoft product or service within the text
              description about your app. If your app is integrated with a
              Microsoft technology, follow the guidelines for partner-led
              marketing under the Resources section below.
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mx-auto md:py-12 w-full justify-center items-start text-start">
              <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
                Examples of approved app details
              </h1>
              <p className="text-[black] ml-10">
                <ul style={{ listStyle: "disc" }}>
                  <li className="mb-3">Developer: Contoso Developer, Inc.</li>
                  <li className="mb-3">App name: Contoso App</li>
                  <li className="mb-3">
                    Image/screenshots: Microsoft Content Featured
                  </li>
                </ul>
              </p>
            </div>

            <div className="mx-auto py-12 w-full justify-center items-start text-start">
              <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
                Examples of unapproved app details
              </h1>
              <p className="text-[black] ml-10">
                <ul style={{ listStyle: "disc" }}>
                  <li className="mb-3">Developer: Azure Development Co.</li>
                  <li className="mb-3">App name: Azure To Go</li>
                  <li className="mb-3">
                    Image/screenshots: Microsoft Logo, Azure App Icon Featured
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <p className="text-[black] w-full text-md leading-relaxed mb-8">
            You may not use Microsoft’s Brand Assets in a manner that implies
            Microsoft published, developed, endorsed, is affiliated with, or is
            otherwise connected with your app. Furthermore, Microsoft’s logos,
            designs, and icons can never be used as your app icon and can only
            be used in your app advertisements with a license agreement in
            place.
          </p>
        </div>

        <div className="border-b-[1px] border-b-black-500 mx-auto grid grid-flow-col"></div>

        <div className=" mx-auto">
          <div className="mx-auto pt-12 w-full justify-center items-start text-start">
            <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
              Specific Brand and Product Guidelines
            </h1>
            <p className="text-[black] w-full text-md leading-relaxed mb-8">
              Certain Brand Assets have Specific Brand and Product Guidelines
              providing guidance on how to use them. Several of these Specific
              Brand and Product Guidelines are published below and others may be
              provided to you by your relevant Microsoft contact in the context
              of your relationship with Microsoft. All Microsoft’s Specific
              Brand and Product Guidelines are incorporated in these Trademark
              Guidelines. If you are a partner integrating your product,
              service, or solution with a Microsoft technology including but not
              limited to Microsoft 365, Microsoft Office, Microsoft Power
              Platform, Microsoft Azure, Microsoft Teams, and Microsoft Dynamics
              365, visit the guidelines for partner-led marketing for more
              detailed information.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {accessibleTechnology.map((listUsers, index) => (
              <div
                className="flex justify-center items-center bg-white rounded-[24px] w-[120px] h-[120px]"
                key={index}
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <img
                    className="w-[80px] h-[80px] mb-4"
                    src={listUsers.icon}
                    alt={listUsers.name}
                  />
                  <button className="text-[1rem] font-normal text-[#0067b8]">
                    {listUsers.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" border-b-[1px] border-b-black-500 mx-auto grid grid-flow-col py-8"></div>

        <div className=" mx-auto">
          <div className="mx-auto pt-12 w-full justify-center items-start text-start">
            <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
              Copyrighted Content
            </h1>
            <p className="text-[black] w-full text-md leading-relaxed mb-8">
              Visit Use of Microsoft copyrighted content to learn how to use
              photography, box shots, and screenshots.
            </p>
          </div>
        </div>

        <div className="border-b-[1px] border-b-black-500 mx-auto grid grid-flow-col py-8"></div>

        <div className=" mx-auto pb-8">
          <div className="mx-auto pt-12 w-full justify-center items-start text-start">
            <h1 className="xs:text-2xl md:text-4xl w-full font-semibold text-[black] mb-4">
              Legal Notice
            </h1>
            <p className="text-[black] w-full text-md leading-relaxed mb-8">
              Any use of Microsoft’s Brand Assets inures solely to Microsoft’s
              benefit and all use must comply with these Trademark Guidelines,
              or other licensing/contractual arrangements with Microsoft. Third
              parties, including licensees, may never claim ownership rights in
              Microsoft’s Brand Assets, or brands that are confusingly similar
              to Microsoft’s Brand Assets, in any manner, including without
              limitation as a trademark, service mark, company name or
              designation, domain name, social media profile/handle, or in any
              other manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrademarkBrand;
