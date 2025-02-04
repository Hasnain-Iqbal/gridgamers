import React from "react";
import PropTypes from "prop-types";

const ArticleContainer = ({ href, numberOfArticles, title, imgSrc, text }) => {
  return (
    <a
      // flex grow overflow-hidden border border-solid no-underline transition ease-linear hover:border-primary items-center gap-6 px-6 py-6 border-[#e6e6e6] bg-white-300 rounded-[24px] hover:text-primary"
      className="lg:flex xs:block grow items-center justify-center gap-6 px-6 py-6 hover:text-primary shadow-md hover:shadow-lg rounded-xl border-[1px] border-gray-500"
    >
      <div className="order-1 xs:order-1 items-center justify-center bg-cover bg-center xs:mb-5 md:mb-0">
        <img 
          className="h-[200px] rounded-xl border-[1px] border-gray-500 shadow-md"
          src={imgSrc} 
          alt="Placeholder" />
      </div>
      <div className="order-2 xs:order-2 w-3/4 flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-3">{title}</h1>
          <p className="text-sm text-[#737373]">{numberOfArticles}</p>
        </div>
        <a
          href={href}
          className="flex items-center gap-1 text-[#0067b8] text-md"
        >
          {text}
          <svg
            fill="#0067b8"
            height="12px"
            width="12px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </a>
      </div>
    </a>
  );
};

ArticleContainer.propTypes = {
  href: PropTypes.string.isRequired,
  numberOfArticles: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ArticleContainer;
