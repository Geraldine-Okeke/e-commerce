import React, { useState, useEffect } from "react";
import SectTwoItems from "./SecTwoItems";
import StarRating from "./StarRating";
export default function SecTwo({sec2items, heading, title, showDiv}) {
  const targetEndTime = new Date();
  targetEndTime.setDate(targetEndTime.getDate() + 3);

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = targetEndTime - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    if (targetEndTime <= new Date()) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div >
      <div className="flex flex-row gap-2 mt-10">
      <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
        <rect width="20" height="40" rx="4" fill="#DB4444"/>
      </svg>
      <h1 className="text-red-500 text-2xl font-bold pt-5">{heading}</h1>
      </div>
    
      <div className="flex flex-col md:flex-row md:w-1/2 mt-4">
        <div>
            <span className="text-3xl font-bold">{title}</span>
        </div>
        {showDiv && (
        <div className="flex flex-row items-center  md:ml-auto">
          
          <div className="flex flex-col items-center mx-2 ">
            <span className="text-xs">days</span>
            <span className="text-2xl font-extrabold">{timeRemaining.days}</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-xs">hrs</span>
            <span className="text-2xl font-extrabold">{timeRemaining.hours}</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-xs">mins</span>
            <span className="text-2xl font-extrabold">{timeRemaining.minutes}</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-xs">sec</span>
            <span className="text-2xl font-extrabold">{timeRemaining.seconds}</span>
          </div>
        </div>
        )}

        
      </div>

      <div className="grid grid-cols-1  gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {sec2items.map((item, index) => (
          <div key={index} className="m-4 border flex flex-col pl-4 relative">
            {showDiv && <span className="bg-red-500 text-white absolute p-2 top-0 left-0">-{item.minus}$</span>}
            <img className="w-3/4 h-1/2" src={item.image} alt={`Item ${index + 1}`} />
            <button className="bg-red-500 w-1/2 mx-auto rounded-lg text-white ">Add to Cart</button>
            <span className="font-semibold">{item.name}</span>
            <div className="flex flex-row gap-2">
              <span className="text-gray-700 font-bold">
                <s>${item.price}</s>
              </span>
              <span className="text-red-500 font-bold"> 
                ${(item.price - (item.price * (item.minus / 100))).toFixed(2)}
              </span>
            </div>
            <div className="text-center flex flex-row gap-1">
                <StarRating rating={item.rating} /> {/* Display the StarRating component */}
                <span className="text-grey-700">({item.num})</span>
              </div>
          </div>
        ))}
       
      </div> 
      <div className="flex justify-center w-full ">
          <button className="bg-red-500 text-white px-6 rounded-full py-2">View All Products</button>
      </div>
    </div>
      
      </>
  );
}
