import React from "react";
import { Link } from "react-router-dom";
import SecOneItms from "./SecOneItems";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SectionOne() {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-10">
        {/* Sidebar (visible on large screens) */}
        <div className="w-full md:w-1/4 border">
          <ul className="space-y-10">
            <li>
              <Link>Women's Fashion</Link>
            </li>
            <li>
              <Link>Men's Fashion</Link>
            </li>
            <li>
              <Link>Electronics</Link>
            </li>
            <li>
              <Link>Home and Lifestyles</Link>
            </li>
          </ul>
        </div>
        {/* Content */}
        <div className="w-full md:w-3/4 py-5 bg-black text-white px-10">
          <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
            {SecOneItms.map((item, index) => (
              <div key={index} className="item-container flex flex-row text-white">
                {/* Item Content */}
                <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-20">
                  <div className="flex flex-row items-center">
                    <img className="w-8 h-8" src={item.icon} alt={`Icon ${index + 1}`} />
                    <span className="ml-3 pt-2 text-xl">{item.name}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl pt-4 font-bold">Up to {item.voucher}% voucher</h2>
                  <Link className="text-blue-400 hover:text-blue-200">Shop Now</Link>
                </div>
                <div className="w-full md:w-1/2">
                  <img className="w-full h-auto object-cover" src={item.image} alt={`Item ${index + 1}`} />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
