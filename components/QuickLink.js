import React from "react";

const QuickLink = ({ link, text }) => {
  return (
    <a
      href={link}
      className="duration-250 group/article flex flex-row items-center justify-between no-underline sm:py-8 rounded-card-inner text-center"
    >
      <p className="text-[black] text-2xl font-semibold my-auto">{text}</p>
      <svg
        className="block h-8 w-8 text-[black] -rotate-90 mx-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
};

export default QuickLink;
