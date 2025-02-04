import React from "react";
import QuickLink from "../../components/QuickLink";
import ArticleContainer from "../../components/ArticleContainer";
import FAQ from "../../components/FAQ";
import OtherNavbars from "../../components/OtherNavbars";
import VideoModal from "../../components/VideoModal";
import OtherHeader from "components/OtherHeader";
const index = () => {
  return (
    <div className="bg-[white]">
      <div className="bg-[white] py-5">
        <OtherHeader text=""/>
      </div>
        {/* <div className="py-5 xsm:hidden">
          <OtherNavbars />
        </div> */}
        {/* <div className=" max-w-screen-2xl w-[95%] mx-auto text-white">
          <h1 className=" text-4xl font-bold ">
            Advice and answers from the GRID Team
          </h1>
          <div className="flex justify-center mt-4 relative group">
            <div className="absolute top-1/3 -left-1 pointer-events-none flex items-center fill-[black] ps-5 group-focus-within:fill-black">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                xmlns="http://www.w3.org/2000/svg"
                className="group-focus-within:fill-black-500"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.27485 8.7001C3.27485 5.42781 5.92757 2.7751 9.19985 2.7751C12.4721 2.7751 15.1249 5.42781 15.1249 8.7001C15.1249 11.9724 12.4721 14.6251 9.19985 14.6251C5.92757 14.6251 3.27485 11.9724 3.27485 8.7001ZM9.19985 0.225098C4.51924 0.225098 0.724854 4.01948 0.724854 8.7001C0.724854 13.3807 4.51924 17.1751 9.19985 17.1751C11.0802 17.1751 12.8176 16.5627 14.2234 15.5265L19.0981 20.4013C19.5961 20.8992 20.4033 20.8992 20.9013 20.4013C21.3992 19.9033 21.3992 19.0961 20.9013 18.5981L16.0264 13.7233C17.0625 12.3176 17.6749 10.5804 17.6749 8.7001C17.6749 4.01948 13.8805 0.225098 9.19985 0.225098Z"
                ></path>
              </svg>
            </div>
            <input
              className="w-full rounded-[10px] border border-[#000000cc] bg-[#ffffff33] p-4 ps-12 text-lg text-[#ffffff] shadow-sm outline-none transition ease-linear hover:bg-[#efefef] focus:border-transparent focus:bg-white-300 focus:text-black-600 placeholder:focus:text-black-600 hover:shadow-search-bar-hover focus:shadow-search-bar-focused peer"
              type="text"
              placeholder="Search for articles..."
            />
          </div>
        </div> */}

          <div class="hidden md:block">
              <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
                  <div className="bg-[url('https://cxcs.microsoft.net/static/public/central/neutral/4ee76be2-dfde-4b30-9fd9-94e8aeb0cbf2/bf2d747a5c6d2b3fe0e445914944bf0d19ecd5b6.jpg')] bg-no-repeat p-24 bg-cover flex">
                      <div className="bg-[white] w-[40%] p-10">
                          <h1 className="text-start text-[black] font-semibold leading-tight text-3xl">
                            Frequently Asked Questions
                          </h1>
                          <p
                              style={{ fontFamily: "Inter" }}
                              className="text-[black] my-5 text-sm"
                          >
                              The sustainability of our products begins with their design.
                          </p>
                      </div>
                  </div>
              </div>
            </div>  

            <div class="block md:hidden">
              <div className="md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
                  <div class="flex flex-col w-full">
                    <div className="bg-[url('https://cxcs.microsoft.net/static/public/central/neutral/4ee76be2-dfde-4b30-9fd9-94e8aeb0cbf2/bf2d747a5c6d2b3fe0e445914944bf0d19ecd5b6.jpg')] bg-no-repeat p-24 bg-cover flex">
                    </div>
                  <div
                    className="mx-auto px-4 py-6 w-11/12 justify-center items-center text-center shadow-md"
                  >
                  <h1 className="text-3xl font-semibold text-[black] mb-4 text-balance">
                    Frequently Asked Questions
                  </h1>
                  <p className="text-[black] text-md">
                    The sustainability of our products begins with their design
                  </p>
              </div>
            </div>
          </div>
        </div>



        {/* Cards Section */}

      <div className=" xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
                  <div className="bg-[white] w-full p-10">
                          <h1 className="text-center text-[black] font-semibold leading-tight text-3xl">
                            Explore
                          </h1>
                          <p
                              className="text-center text-[black] my-5 text-sm"
                          >
                              The sustainability of our products begins with their design.
                          </p>
                      </div>
        <div className="grid auto-rows-auto gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 md:grid-cols-2 pb-12">
          <ArticleContainer
            href="/Documentation/Welcome-to-Grid"
            numberOfArticles="Create amazing artwork with just a few words. Microsoft Paint Cocreator will help you unleash your creativity and make your own artworks with the help of AI."
            title="Generate single stage tournament"
            text="Learn more"
            imgSrc="https://cxcs.microsoft.net/static/public/cross-app/neutral/2fcacd1f-1fc3-491b-a0a1-10efef238958/43d70089ab2c824e8a3fecba37cf3b839b362740.jpg"
          />

          <ArticleContainer
            href="#"
            numberOfArticles="Grid AI pro is the platform to provide centralized AI assistance. Learn how to achieve and create more with Copilot on Windows."
            title="What is GRID AI Pro"
            text="Learn more"
            imgSrc="https://cxcs.microsoft.net/static/public/windows/neutral/82caca01-ad9b-4d44-bfd6-3274eae6cf04/6104754660f1c7290496e758e0706c7a7af5994a.jpg"
          />
          <ArticleContainer
            href="#"
            numberOfArticles="The Microsoft 365 Copilot app is your everyday productivity app for work and life. Your starting place to ask, create, and draft with Copilot, plus your favorite apps and content in one place."
            title="The Microsoft 365 Copilot app is here"
            text="Learn more"
            imgSrc="https://cxcs.microsoft.net/static/public/cross-app/neutral/be822cca-c6ba-478d-8885-171897317c74/f3904449a66ad8e150ba67a58151c6d7527adf8f.png"
          />
          <ArticleContainer
            href="#"
            numberOfArticles="Get productive quickly with these Microsoft 365 videos, tutorials, and resources."
            title="Microsoft 365 Training Center"
            text="Learn more"
            imgSrc="https://cxcs.microsoft.net/static/public/cross-app/neutral/e8353844-a8a1-4be1-8fca-18c6281bfb14/c7c64d5fb915b9ab342019d45e7482bc82d60606.jpg"
          />
        </div>
      </div>

        <div className="max-w-[95%] sm:max-w-[90%] md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl 3xl:max-w-screen-3xl m-auto xs:px-4 lg:px-20 3xl:px-0  py-[40px]  lg:py-[100px]  ">
          <div className="x-auto">
            <div className="flex items-start j justify-center pb-10  w-full px-[10px] xl:px-4 sm:w-auto mx-auto sm:mx-0">
              <div className=" mx-auto w-full   ">
                <div
                  className={`flex flex-col justify-center items-center transition-all duration-700 ease-in-out transform`}
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
              
                <div
                  className="border-2 border-[#f2f2f2] flex-start justify-center  xl:mt-0 rounded-[24px] md:mx-3 w-auto p-5 shadow-sm"
                  
                >
                  <div className="mx-auto w-full md:w-auto">
                    <div className="flex items-center justify-center m-auto">
                      <VideoModal
                        thumb={"https://cxcs.microsoft.net/static/public/cross-app/neutral/e8353844-a8a1-4be1-8fca-18c6281bfb14/c7c64d5fb915b9ab342019d45e7482bc82d60606.jpg"}
                        thumbWidth={"500px"}               // Thumbnail Width
                        thumbHeight={"500px"}              // Thumbnail Height
                        thumbAlt="Video Thumbnail"              // Video Height
                        addThumNail={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ">
                      <p className="text-[1.125rem] text-center text-[black] font-semibold">
                        What is Grid?
                      </p>
                      <p className="text-[1rem] lg:px-8 xl:px-0  text-pretty  text-center text-[black]   mt-[12px] xl:mt-[20px]">
                        GRID is a first of its kind mobile events and gaming app where you can meet other gamers and show your skills by attending events and tournaments.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="border-2 border-[#f2f2f2] flex-start justify-center  xl:mt-0 rounded-[24px] md:mx-3 w-auto p-5 shadow-sm"
                  
                >
                  <div className="mx-auto w-full md:w-auto">
                    <div className="flex items-center justify-center m-auto">
                      <VideoModal
                        thumb={"https://cxcs.microsoft.net/static/public/cross-app/neutral/2fcacd1f-1fc3-491b-a0a1-10efef238958/43d70089ab2c824e8a3fecba37cf3b839b362740.jpg"}
                        thumbWidth={"500px"}               // Thumbnail Width
                        thumbHeight={"500px"}              // Thumbnail Height
                        thumbAlt="Video Thumbnail"              // Video Height
                        addThumNail={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ">
                      <p className="text-[1.125rem] text-center text-[black] font-semibold">
                        What is Grid AI?
                      </p>
                      <p className="text-[1rem] lg:px-8 xl:px-0    text-center text-[black]   mt-[12px] xl:mt-[20px]">
                        GRID is a first of its kind mobile events and gaming app where you can meet other gamers and show your skills by attending events and tournaments.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="border-2 border-[#f2f2f2] flex-start justify-center  xl:mt-0 rounded-[24px] md:mx-3 w-auto p-5 shadow-sm"
                  
                >
                  <div className="mx-auto w-full md:w-auto">
                    <div className="flex items-center justify-center m-auto">
                      <VideoModal
                        thumb={"https://cxcs.microsoft.net/static/public/cross-app/neutral/be822cca-c6ba-478d-8885-171897317c74/f3904449a66ad8e150ba67a58151c6d7527adf8f.png"}
                        thumbWidth={"500px"}
                        thumbHeight={"500px"}
                        thumbAlt="Video Thumbnail"
                        addThumNail={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-[12px] xl:mt-[20px] ">
                      <p className="text-[1.125rem] text-center text-[black] font-semibold">
                        What is Grid AI?
                      </p>
                      <p className="text-[1rem] lg:px-8 xl:px-0    text-center text-[black]   mt-[12px] xl:mt-[20px]">
                        GRID is a first of its kind mobile events and gaming app where you can meet other gamers and show your skills by attending events and tournaments. 
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>


        <div className="">
          <div className="bg-[#f2f2f2] xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 xs:p-4 lg:p-10">
              <div className="bg-[#f2f2f2] p-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-[black] mb-6">
                  Achieve the extraordinary with a Grid AI Pro subscription
                </h2>
                <p className="text-[black] text-base mb-6">
                  Our grant program supports researchers, startups, nonprofits, and
                  assistive technology companies around the world to develop
                  innovative technologies that empower people living with
                  disabilities.
                </p>
                <button className="text-[#0067b8] text-base font-medium">
                  Learn about
                </button>
              </div>

              <div className="">
                <img
                  className="w-full h-auto rounded-lg"
                  src="https://cxcs.microsoft.net/static/public/cross-app/neutral/ba7b1ade-c3a1-4b8f-aae9-d4f524e937b5/4d8e204eb8b455737d30cfbf2d4059003452f9c2.png"
                  alt="Driving impact"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Popular Articles */}
        <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
          {/* <div className="flex gap-6 mx-5">
            <div className="flex flex-col justify-stretch basis-[40%]">
              <QuickLink link="#" text="Enrollment Steps" />
              <hr className="mt-2 border-gray-300" />
              <QuickLink link="#" text="Enrollment Steps" />
              <hr className="mt-2 border-gray-300" />
              <QuickLink link="#" text="Enrollment Steps" />
              <hr className="mt-2 border-gray-300" />
              <QuickLink link="#" text="Enrollment Steps" />
              <hr className="mt-2 border-gray-300" />
              <QuickLink link="#" text="Enrollment Steps" />
              <hr className="mt-2 border-gray-300" />
              <QuickLink link="#" text="Enrollment Steps" />
            </div>
            <div className="flex justify-center items-center basis-[60%]">
              <div className="w-full h-full flex">
                <img
                  className="object-contain w-full h-full"
                  src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/6ab6c535d3de4a1c8488506aaf8cf851.png"
                  alt="Enrollment"
                />
              </div>
            </div>
          </div> */}

          <FAQ />
        </div>
        {/* <section className=" flex flex-col items-center py-14  rounded-[24px] border border-solid border-[#e6e6e6] bg-primary px-6">
          <header
            className="text-center text-[28px] font-medium"
            data-testid="content-block-title"
          >
            PlayVS Experience Walkthrough
          </header>
          <div className="mt-2 text-center md:w-1/2">
            From account creation and enrollment, to match day setup and
            playoffs, this YouTube playlist will be your source of truth for
            competing within our community.
          </div>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            className="mt-6 rounded-content-button bg-white-300 px-[14px] py-2 font-semibold text-primary rounded-md"
          >
            View the Playlist
          </a>
        </section> */}

    <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto pb-10">
          <div className="relative w-full bg-[#e6e6e6]">
            <div className="m-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl py-[28px] w-full mt-[44px]">
              <div className="flex flex-col items-center justify-center xl:w-[60%] m-auto">
                <p className="text-4xl text-[black] text-center font-semibold xs:w-2/3 xs:leading-[30px] mt-[24px] lg:leading-10">
                    Contact us
                </p>
                <p className="text-md text-center  text-[black] leading-8 mb-3	mt-[20px] lg:mt-[24px]">   
                    Questions? Send an inquiry to the Environmental Compliance team.
                </p>
                <button className="text-[#0067b8]">
                    Email our team
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default index;
