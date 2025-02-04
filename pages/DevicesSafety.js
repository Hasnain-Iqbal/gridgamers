import React, { useMemo, useState } from "react";
import OtherHeader from "components/OtherHeader";
const DevicesSafety = ({}) => {

    const detilList = [
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/EnvironmentalCompliance?wid=834&hei=470&fit=crop",
            title: "Environmental compliance",
            detail: "Microsoft devices fulfill strict environmental criteria including, but not limited to, compliance with all applicable legal and regulatory requirements.",
            btn: "Explore environmental compliance"
        },
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MaterialsSubstances?wid=834&hei=470&fit=crop",
            title: "Materials and substances",
            detail: "When we have concern over a chemical’s potential for damage to health or the environment, we believe actions should be taken to gather and assess additional data.",
            btn: "About materials and substances"
        },
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ProductSafety?wid=834&hei=470&fit=crop",
            title: "Product safety",
            detail: "Microsoft cares about the safety of our customers and employees and is committed to product safety. We plan, design, manufacture, sell, and maintain Surface, Xbox, and HoloLens devices to meet or exceed industry standards. Microsoft devices are certified to applicable international safety standards.",
            btn: "Visit our Product Safety Guidelines"
        },
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Batteries?wid=834&hei=470&fit=crop",
            title: "Batteries",
            detail: "Microsoft complies with global substance restriction, battery marking, consumer information, and transportation and recycling requirements.",
            btn: "Explore battery compliance"
        },
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Energy?wid=834&hei=470&fit=crop",
            title: "Energy",
            detail: "We work to improve energy-saving features throughout our hardware product portfolio to help our customers save energy.",
            btn: "Our energy efficiency commitment"
        },
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/EnvironmentalManagementSystem?wid=834&hei=470&fit=crop",
            title: "Environmental management system",
            detail: "We utilize an internationally recognized framework known as ISO 14001 that establishes a process for entities to manage and continuously improve their environmental performance.",
            btn: "Read about our approach"
        },
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Packaging?wid=834&hei=470&fit=crop",
            title: "Packaging",
            detail: "Packaging for Microsoft products meet heavy metal restrictions, labelling, and essential requirements regarding packaging optimization, manufacturing, composition, recovery, and reuse.",
            btn: "Learn about packaging compliance"
        },
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CloudResponsiblePackaging?wid=834&hei=470&fit=crop",
            title: "Cloud responsible packaging",
            detail: "We ensure that Microsoft cloud infrastructure hardware packaging meets global requirements and creates minimal environmental impact.",
            btn: "View cloud responsible packaging"
        },
        {
            img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/EndOfLife?wid=834&hei=470&fit=crop",
            title: "End-of-life management",
            detail: "We work with recycling companies and supply chain partners to manage the end-of-life process. Find out where to recycle products, batteries, and packaging.",
            btn: "Explore our program"
        },
        
    ]

    return(
        <div className="bg-[white]">
            <div className="py-5">
                <OtherHeader text="Device Safety"/>
            </div>


            <div class="hidden md:block">
              <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
                  <div className="bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4YcYR-Legal_Compliance-Devices-LP_Hero_1600x600:VP5-1920x600')] bg-no-repeat p-24 bg-cover flex">
                      <div className="bg-[white] w-[40%] p-10">
                          <h1 className="text-start text-[black] font-semibold leading-tight text-3xl">
                              Devices safety and eco
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
                    <div className="bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4YcYR-Legal_Compliance-Devices-LP_Hero_1600x600:VP5-1920x600')] bg-no-repeat p-24 bg-cover flex">
                    </div>
                  <div
                    className="mx-auto px-4 py-6 w-11/12 justify-center items-center text-center shadow-md"
                  >
                  <h1 className="text-3xl font-semibold text-[black] mb-4 text-balance">
                    Devices Safety and Eco 
                  </h1>
                  <p className="text-[black] text-md">
                    The sustainability of our products begins with their design
                  </p>
              </div>
            </div>
          </div>
        </div>

            


        <div className="md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
        <div
          className="mx-auto px-6 py-8 w-full justify-center items-center text-center"
        >
          <h1 className="md:text-4xl xs:text-3xl font-semibold text-[black] mb-4 text-balance">
            Product compliance and sustainability
          </h1>
          <p className="text-[black] text-md">
          At Microsoft, product safety, compliance, and sustainability are integral to our mission to design and build products that empower every person and every organization to achieve more.
          </p>
        </div>
        <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 pb-9  xl:mt-0 ">
            {detilList.map((data, index) => (
                <div
                  className="flex-start justify-center w-auto p-3"
                  key={index}
                >
                  <div className=" mx-auto w-full md:w-auto">
                    <div className="flex items-center justify-center m-auto">
                      <img
                        className=""
                        src={data.img}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start mt-[12px] xl:mt-[20px] ">
                      <p className="text-2xl text-start text-[black] font-semibold">
                        {data.title}
                      </p>
                      <p className="text-md lg:px-8 xl:px-0    text-start text-[black]   mt-[12px] xl:mt-[20px]">
                        {data.detail}
                      </p>
                      <div className=" mt-[12px] text-[0.875rem] font-semibold xl:mt-[20px]">
                        <button className="text-[#0067b8]">
                          {data.btn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>


      <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl border-b-[1px] border-b-black-500 mx-auto grid grid-flow-col py-[10px] xl:py-[20px]"></div>


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
    )}
export default DevicesSafety;