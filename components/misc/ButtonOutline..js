import React from "react";

const ButtonOutline = ({ children ,onClick}) => {
  return (
    <button onClick={onClick} className="font-medium tracking-wide py-2 px-5 text-[15px] lg:text-[20px]    sm:px-8 border border-[#298be1] text-[#298be1]   outline-none  rounded-lg capitalize hover:bg-[#298be1] hover:text-white-500 transition-all   ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
