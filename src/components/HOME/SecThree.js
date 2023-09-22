import React, { useState } from "react";
import SecThreeItems from "./SecThreeItems"; // Import your data here
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SecThree() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < SecThreeItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const settings = {
    dots: true, // Display navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default value for screens smaller than 'lg'
    slidesToScroll: 1,
    nextArrow: (
      <div className="arrow next" onClick={handleNext}>
        Next
      </div>
    ),
    prevArrow: (
      <div className="arrow prev" onClick={handlePrev}>
        Prev
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // 'lg' and up
        settings: {
          slidesToShow: 5, // Number of items for screens 'lg' and up
        },
      },
      {
        breakpoint: 768, // 'md'
        settings: {
          slidesToShow: 4, // Number of items for screens 'md' and up
        },
      },
      {
        breakpoint: 640, // 'sm'
        settings: {
          slidesToShow: 2, // Number of items for screens 'sm' and up
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-row gap-2">
        <svg
          className="mt-2"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="40"
          viewBox="0 0 20 40"
          fill="none"
        >
          <rect width="20" height="40" rx="4" fill="#DB4444" />
        </svg>
        <h1 className="text-red-500 text-2xl font-bold pt-5">Categories</h1>
      </div>
      <h1 className="text-2xl font-bold">Browse By Category</h1>
      <div className="relative mt-4  ">
        <Slider {...settings}>
          {SecThreeItems.map((item, index) => (
            <div key={index} className="w-20  ml-2 "> {/* Adjusted margin here */}
              <Link className="" to="">
                <img
                  src={item.image}
                  alt={`Category ${index}`}
                  className="w-full  md:w-1/4 lg:w-1/3 xl:w-full"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
