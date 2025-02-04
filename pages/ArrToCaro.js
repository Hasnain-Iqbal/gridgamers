import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer"
      style={{ maxWidth: "40px", maxHeight: "40px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 120 100"
        style={{ fill: "black" }}
      >
        <path d="m70.2373565 0c1.6990435 0 3.1569652.61020408 4.3707131 1.82959184l43.5708004 43.77857146c1.213747 1.2183673 1.82113 2.6836734 1.82113 4.3918367s-.607383 3.172449-1.82113 4.3918367l-43.5708004 43.7785715c-1.2137479 1.2193877-2.6696348 1.8295918-4.3707131 1.8295918-1.749913 0-3.2190261-.622449-4.4093739-1.8673469-1.188313-1.2428572-1.7845043-2.7193878-1.7845043-4.4285715 0-1.7081632.6073826-3.1724489 1.8211304-4.3918367l33.0326609-33.1897959h-92.79292177c-3.37133822 0-6.10434783-2.7411138-6.10434783-6.122449s2.73300961-6.122449 6.10434783-6.122449h92.79292177l-33.0326609-33.1897959c-1.2137478-1.21836734-1.8211304-2.68367347-1.8211304-4.39183673 0-1.70816327.5951739-3.18469388 1.7855217-4.42959184 1.1893304-1.24387755 2.6594609-1.86632653 4.4083565-1.86632653z" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer"
      style={{ maxWidth: "40px", maxHeight: "40px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 120 100"
        style={{ fill: "black" }}
      >
        <path d="m49.7626435 0c-1.6990435 0-3.1569652.61020408-4.3707131 1.82959184l-43.57079997 43.77857146c-1.21374782 1.2183673-1.82113043 2.6836734-1.82113043 4.3918367s.60738261 3.172449 1.82113043 4.3918367l43.57079997 43.7785715c1.2137479 1.2193877 2.6696348 1.8295918 4.3707131 1.8295918 1.749913 0 3.2190261-.622449 4.4093739-1.8673469 1.188313-1.2428572 1.7845043-2.7193878 1.7845043-4.4285715 0-1.7081632-.6073826-3.1724489-1.8211304-4.3918367l-33.0326609-33.1897959h92.7929216c3.371338 0 6.104348-2.7411138 6.104348-6.122449s-2.73301-6.122449-6.104348-6.122449h-92.7929216l33.0326609-33.1897959c1.2137478-1.21836734 1.8211304-2.68367347 1.8211304-4.39183673 0-1.70816327-.5951739-3.18469388-1.7855217-4.42959184-1.1893304-1.24387755-2.6594609-1.86632653-4.4083565-1.86632653z" />
      </svg>
    </div>
  );
}

function ArrToCaro({ imageArr }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full">
      <div className="slider-container w-full max-w-[500px] mx-auto mt-8 md:hidden">
        <Slider {...settings}>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b2d8b087d1c44d46a3610ba4da6cb290.png"
              className="max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
/>
            <p className="text-[black] text-3xl mt-4 font-bold">Prepare for a pet</p>
          </div>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/fa28de91a3c1429e8c52fec3b1376816.png"
              className="max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
/>
            <p className="text-[black] text-3xl mt-4 font-bold">Get a pros vs. cons list</p>
          </div>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/bf2da9b421774258afd238777c007cd9.png"
              className="max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
/>
            <p className="text-[black] text-3xl mt-4 font-bold">Plan a trip</p>
          </div>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/d0dcb72a360a4879b569f3f0eb74664f.png"
              className="max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
/>
            <p className="text-[black] text-3xl mt-4 font-bold">Write something</p>
          </div>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/63b0cf4b50514ecaac0ac9b8b51ae40f.png"
              className="max-w-[450px] max-h-[450px] mx-auto w-full px-[40px]"
/>
            <p className="text-[black] text-3xl mt-4 font-bold">Ask for feedback</p>
          </div>
        </Slider>
      </div>
      <div className="hidden md:flex">
        <div className="flex p-8 bg-[white] rounded-[50px] w-full justify-between">
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b2d8b087d1c44d46a3610ba4da6cb290.png"
              height="200px"
              width="200px"
            />
            <p className="text-[black] font-bold">Prepare for a pet</p>
          </div>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/fa28de91a3c1429e8c52fec3b1376816.png"
              height="200px"
              width="200px"
            />
            <p className="text-[black] font-bold">Get a pros vs. cons list</p>
          </div>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/bf2da9b421774258afd238777c007cd9.png"
              height="200px"
              width="200px"
            />
            <p className="text-[black] font-bold">Plan a trip</p>
          </div>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/d0dcb72a360a4879b569f3f0eb74664f.png"
              height="200px"
              width="200px"
            />
            <p className="text-[black] font-bold">Write something</p>
          </div>
          <div className="">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/63b0cf4b50514ecaac0ac9b8b51ae40f.png"
              height="200px"
              width="200px"
            />
            <p className="text-[black] font-bold">Ask for feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrToCaro;
