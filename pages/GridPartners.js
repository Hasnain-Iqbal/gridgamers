import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "../public/assets/Icon/search_icon.svg"
import DropdownSearch from "../components/DropdownSearch"
import OtherHeader from "components/OtherHeader";
const GridPartners = ({}) => {
      const [checkedTitles, setCheckedTitles] = useState([]);
      const [searchText, setSearchText] = useState("");
    
      const handleCheckboxChange = (title, isChecked) => {
        setCheckedTitles((prev) =>
          isChecked ? [...prev, title] : prev.filter((t) => t !== title)
        );
      };


    const gridPartnerslist = [
        {
            icon:"https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2MxODlkZTM3LWU3ODQtNDljYS1iM2E0LTc1MjU4MWZmNjc5Ny9lNWI3OTNhZS1jOTFiLTQyMDItODBlZS0wNGZlYzRhODNiZGIucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0=",
            title:"Myers Holum",
            detail:"Accelerate your online transactions using Stripe with Myers-Holum expert services. Experts in Stripe Payments, Billing & Connect, NetSuite, Boomi, & Google Cloud Platform",
            btn:["Specialized partner", "ERP"],
        },
        {
            icon:"https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzk5YjUxZTEwLThiMDAtNGQ4YS05MDFiLTczYmZkMDViZjFjNi83MzU4ZDA2Ni1hMDNjLTQzMzEtODk3OS02OTk1NzRiZTI2NjcucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0=",
            title:"Square 1 Software",
            detail:"Accelerate your online transactions using Stripe with Myers-Holum expert services. Experts in Stripe Payments, Billing & Connect, NetSuite, Boomi, & Google Cloud Platform",
            btn:["Specialized partner", "Ecommerce"],
        },
        {
            icon:"https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2MxODlkZTM3LWU3ODQtNDljYS1iM2E0LTc1MjU4MWZmNjc5Ny9lNWI3OTNhZS1jOTFiLTQyMDItODBlZS0wNGZlYzRhODNiZGIucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0=",
            title:"Klarna",
            detail:"Accelerate your online transactions using Stripe with Myers-Holum expert services. Experts in Stripe Payments, Billing & Connect, NetSuite, Boomi, & Google Cloud Platform",
            btn:["CRM"],
        },
        {
            icon:"https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2FiOGEzOGE1LTlhY2MtNDIxMi04NjQ4LTk4ZWMwZmVlNWNiNi82YzQ2ZWYxNS1mZjMwLTQ3ZmItYWNiOS0xYmJlNDZhNDdlMTIucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0=",
            title:"Amazon Web Services",
            detail:"Accelerate your online transactions using Stripe with Myers-Holum expert services. Experts in Stripe Payments, Billing & Connect, NetSuite, Boomi, & Google Cloud Platform",
            btn:["Data and analytics"],
        },

      ];
      const [filteredPartners, setFilteredPartners] = useState(gridPartnerslist);
      const handleSearchText = (data) => {
        setSearchText(data);
        const filtered = gridPartnerslist.filter((item) =>
          item.title.toLowerCase().includes(data.toLowerCase())
        );
        console.log("🚀 ~ handleSearchText ~ filteredasdfsdf214343:", filtered)

        setFilteredPartners(filtered);
      };

      useEffect(()=>{

        const filteredList =
        checkedTitles.length === 0
          ? gridPartnerslist
          : gridPartnerslist.filter((item) => checkedTitles.includes(item.title));

          setFilteredPartners(filteredList)

      },[checkedTitles])



    return(
        <>
    <div className="bg-[white] py-5">
        <OtherHeader text="Grid Partners"/>
    </div>

    <div className="bg-[#F6F9FC] p-8">
        <div class="hidden md:block">
            <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
                <div className="h-[500px] p-20 flex justify-between items-center gap-4">
                    <div class="flex max-w-[500px] flex-col gap-y-4 xl:max-w-[700px]">
                        <h1 class ="text-5xl font-bold leading-tight">Find a Stripe partner with the solution or services you need</h1>
                        <div class="z-20 typography-base-public">Work with experts that specialize in solving your business problems.</div>
                    </div>
                    <div>
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2FiOGEzOGE1LTlhY2MtNDIxMi04NjQ4LTk4ZWMwZmVlNWNiNi82YzQ2ZWYxNS1mZjMwLTQ3ZmItYWNiOS0xYmJlNDZhNDdlMTIucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2I1MjcxMDBiLTE4NjMtNGUzOS05ZGVjLTlkMTE5MDIyNmMyMC82MjA0ZmYwNy1lMmIwLTRjYzItYWQ2MC03OTY5YWQ4MjljZGUucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzI3NTYwZmY3LWNiNTgtNDU0Ni1hNTdlLTg1NmJkYTBiZWRjYy83Yjg0Y2U5NS03NjM0LTRmZGItYjRlNS1jMWQ0NWNkMmQ2YWEucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                    </div>
                    <div>
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2QyZDg2MmQ5LTMwZTAtNDA1NC1hMjU3LTVkYTgyZWNhYTY5NS80YmIzNDkyMC1jNDQ4LTQyNzctYThiMC1mYjdiMzI4MzgwNTQucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzAzNDNiYmM4LTdiNWQtNDU2YS04MDFmLTU0YjQ1NzZhOGVkNi8wNTJhY2M3Yi05MTI3LTRkNjktYjBlMy1mOWIxNTY3ZGE2N2MucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2U2NTNkMTk5LWE5ZGUtNGE0My1hZmFiLTc0OTI4ZGI1MTM5ZS9kZmRmZWRiMy02NzBlLTQ1ZGMtODI5Yi1mMmUyYjQwYWI0NDMucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                    </div>
                    <div>
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzL2Q4ZWIwOWEzLWE1NjEtNGIzYy04Yjg4LTkwOGUwYmU1ZWJmNC85Y2RjOTA5ZS1lNTE4LTQ4MWItODEzMy01OTM2ZDllZGFiZTMucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzhlYzI2YzYzLTQ5OWItNDg3ZS05NzM4LTRlYzgwOGMwMWNlYS8yMjU3N2JmNC00N2NhLTRkODAtODg3Zi1hZDU2YmIxY2Y0MmEuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                        <img
                        className="my-10"
                        src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvZGlyZWN0b3JpZXMvaW1hZ2VzLzg0ODRmNjlmLTMxOTgtNDZlOS05OGMzLTdkOWNlZDZlMTVjYy9kYjI2ODQ0MS1kNjI1LTQxYTktYTM5OS1hNWJkZDU5OTlhN2EucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxNTAsImhlaWdodCI6MzAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9LCJwb3NpdGlvbiI6ImNlbnRyZSJ9fX0="
                        />
                    </div>
                </div>
            </div>
        </div>


        <div class="block md:hidden">
            <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
                <div class="flex max-w-[500px] flex-col gap-y-4 xl:max-w-[700px]">
                    <h1 class ="md:text-5xl xs:text-3xl font-bold leading-tight">Find a Stripe partner with the solution or services you need</h1>
                    <div class="z-20 typography-base-public">Work with experts that specialize in solving your business problems.</div>
                </div>
            </div>
        </div>
    </div>



    <div className="bg-[white] py-10">
    <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">

        <div className="mx-auto w-full mb-10">
            <div className="flex flex-col justify-start">
                <p className="text-start text-[black] font-bold text-2xl">
                    Specialized partners
                </p>
            </div>
        </div>

        <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 pb-9 mt-[40px] xl:mt-0">
              {/* First Card */}
              <div className="bg-[white] flex mx-2 rounded-3xl shadow-md hover:shadow-xl h-full">
                <div>
                  <div>
                    <img
                      className="rounded-xl"
                      src="https://assets.partnerpage.io/Stripe/services-implementation.png"
                      alt="Image"
                    />
                  </div>
                    <div className="p-5">
                      <p className="text-md font-semibold text-[black]">
                        Services implementation partners
                      </p>
                      <p
                        style={{ fontFamily: "Inter" }}
                        className="text-[black] mt-[30px] mb-6 text-sm"
                      >
                        These partners specialize in implementing Stripe payments across broad use cases and industries. 
                        They have achieved Stripe's highest levels of technical and business requirements as a Specialized
                        partner.
                      </p>
                      <button className="text-[#0067b8] font-semibold">
                        View partners
                      </button>
                    </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="bg-[white] flex mx-2 rounded-3xl shadow-md hover:shadow-xl h-full">
                <div>
                  <div>
                    <img
                     style={{width:"-webkit-fill-available"}}
                      className="rounded-xl"
                      src="https://assets.partnerpage.io/Stripe/billing.png"
                      alt="Image"
                    />
                  </div>
                    <div className="p-5">
                      <p className="text-md font-semibold text-[black]">
                        Billing partners
                      </p>
                      <p
                        style={{ fontFamily: "Inter" }}
                        className="text-[black] mt-[30px] mb-6 text-sm"
                      >
                        These partners specialize in implementing Stripe payments across broad use cases and industries. 
                        They have achieved Stripe's highest levels of technical and business requirements as a Specialized
                        partner.
                      </p>
                      <button className="text-[#0067b8] font-semibold">
                        View partners
                      </button>
                    </div>
                </div>
              </div>


            </div>
        </div>
    </div>




    <div className="bg-[#F6F9FC] pb-14">
        <div className="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
            <div className="mx-auto w-full py-10">
                <div className="flex flex-col justify-start">
                    <p className="text-start text-[black] font-bold text-2xl">
                        Find partners
                    </p>
                </div>
            </div>

            <div className="">
                {/* Parent container to divide into two sections */}
                <div class="hidden md:block">
                    <div className="grid grid-cols-12 gap-4">
                        {/* Column 1 - Multiselect */}
                        <div className="col-span-3 px-3"> 
                        {/* 1/4 of the width (3/12) */}
                            <div className="mb-10">
                                <DropdownSearch
                                    component="careers"
                                    name={"Category"}
                                    data={gridPartnerslist}
                                    selectedData={handleCheckboxChange}
                                    checkedTitles={checkedTitles}
                                /> 
                            </div>
                            <div>             
                                <DropdownSearch 
                                    component="careers"
                                    name={"Locations"}
                                    data={gridPartnerslist}
                                    selectedData={handleCheckboxChange}
                                    checkedTitles={checkedTitles}
                                />   
                            </div>               
                        </div>
                        {/* Column 2 - Grid Partners List */}
                        <div className="col-span-9">
                        <div className="flex items-center rounded border bg-surface border-transparent shadow-2dp grow mb-10 relative">
                            {/* Search Icon */}
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <SearchIcon />
                            </div>
                            
                            {/* Input Field */}
                            <input
                                className="shadow-md p-2 pl-10 rounded-md text-sm w-3/4 border border-[#E7ECF1] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search Partners"
                                value={searchText}
                                onChange={(e) => handleSearchText(e.target.value)}
                            />
                            </div>
                        <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 gap-5">
                            {filteredPartners.map((data, index) => (
                                <div
                                className="flex-start justify-center bg-[white] rounded-[24px] p-2 w-auto shadow-md hover:shadow-xl"
                                key={index}
                                >
                                <div className=" mx-auto w-full md:w-auto">
                                    <div className="flex items-center h-[68px] justify-center m-auto border-b-[1px] border-[#E7ECf6]">
                                        <img
                                            src={data.icon}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-start items-start p-3">
                                        <p className="text-md text-[black] font-semibold  mt-2">
                                            {data.title}
                                        </p>
                                        <p className="text-sm font-normal xl:px-0 text-[black] mt-3">
                                            {data.detail}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-5 text-sm ">
                                            {data.btn.map((x)=>(
                                                <div className="px-2 bg-[#E7ECF1] rounded-xl">
                                                <p className="text-[black]">
                                                    {x}
                                                </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block md:hidden">
                    <div className="flex flex-col gap-4 focus:outline-none">

                            {/* Column 2 - Grid Partners List */}
                                {/* Search Icon */}
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    <SearchIcon />
                                </div>                            {/* 1/4 of the width (3/12) */}
                                <DropdownSearch
                                    name={"Category"}
                                />            
                                <DropdownSearch 
                                    name={"Locations"}
                                />             
                                
                                {/* Input Field */}
                                <input
                                    className="shadow-md p-2 pl-10 rounded-md text-sm w-full border border-[#E7ECF1] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search Partners"
                                />
                            <div className="rounded-lg w-full grid grid-flow-row md:grid-flow-row grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 gap-5">
                                {gridPartnerslist.map((data, index) => (
                                    <div
                                    className="flex-start justify-center bg-[white] rounded-[24px] p-2 w-auto shadow-md hover:shadow-xl"
                                    key={index}
                                    >
                                    <div className=" mx-auto w-full md:w-auto">
                                        <div className="flex items-center h-[68px] justify-center m-auto border-b-[1px] border-[#E7ECf6]">
                                            <img
                                                src={data.icon}
                                            />
                                        </div>
                                        <div className="flex flex-col justify-start items-start p-3">
                                            <p className="text-md text-[black] font-semibold  mt-2">
                                                {data.title}
                                            </p>
                                            <p className="text-sm font-normal xl:px-0 text-[black] mt-3">
                                                {data.detail}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-5 text-sm ">
                                                {data.btn.map((x)=>(
                                                    <div className="px-2 bg-[#E7ECF1] rounded-xl">
                                                    <p className="text-[black]">
                                                        {x}
                                                    </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
      </>
    )
}
export default GridPartners;