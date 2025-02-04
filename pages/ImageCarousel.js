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
        viewBox="0 0 100 100"
        style={{ fill: "black" }}
      >
        <path d="M25 93.704c0-1.708.61-3.172 1.83-4.392L66.142 50 26.83 10.688C25.61 9.468 25 8.004 25 6.296c0-1.708.598-3.185 1.794-4.43C27.989.623 29.466 0 31.223 0c1.708 0 3.172.61 4.392 1.83l43.777 43.778c1.22 1.22 1.83 2.684 1.83 4.392 0 1.708-.61 3.172-1.83 4.392L35.615 98.17c-1.22 1.22-2.684 1.83-4.392 1.83-1.757 0-3.234-.622-4.43-1.867C25.599 96.89 25 95.413 25 93.704Z" />
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
        viewBox="0 0 100 100"
        style={{ fill: "black" }}
      >
        <path d="M19 50c0-1.708.61-3.172 1.83-4.392L64.608 1.83C65.828.61 67.292 0 69 0c.878 0 1.696.17 2.452.512a6.618 6.618 0 0 1 1.977 1.355 6.618 6.618 0 0 1 1.354 1.976c.342.757.513 1.574.513 2.453 0 1.66-.635 3.123-1.904 4.392L34.081 50l39.311 39.312c.635.634 1.11 1.293 1.428 1.976.317.684.476 1.489.476 2.416 0 .879-.171 1.696-.513 2.453a6.618 6.618 0 0 1-1.354 1.976 6.618 6.618 0 0 1-1.977 1.355A5.888 5.888 0 0 1 69 100c-1.708 0-3.172-.61-4.392-1.83L20.83 54.392C19.61 53.172 19 51.708 19 50Z" />
      </svg>
    </div>
  );
}

const ImageCarousel = ({ imageArr }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full">
      <div className="slider-container w-full 2xl:max-w-screen-2xl 2xl:mx-auto mt-8 hidden md:block">
        <Slider {...settings}>
          {imageArr?.map((data, i) => (
            <div key={i} className="px-4">
              {" "}
              {/* Add padding here */}
              <div className="w-full aspect-[3/2] rounded-[25px] bg-[white] p-4">
                <img
                  src={data.image}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover rounded-[25px]"
                />
                <p className="text-black-900 text-left text-lg font-bold mt-4 ">
                  {data.title}
                </p>
                <p className="text-black-900 text-left text-md">{data.body}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" w-[95%] mx-auto md:hidden flex flex-col space-y-12">
        {imageArr?.map((data, i) => (
          <div key={i} className="px-4">
            {" "}
            {/* Add padding here */}
            <div className="w-full aspect-[3/2] rounded-[25px] bg-[white] p-4">
              <img
                src={data.image}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover rounded-[25px]"
              />
              <p className="text-black-900 text-left text-lg font-bold mt-4 ">
                {data.title}
              </p>
              <p className="text-black-900 text-left text-md">{data.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
