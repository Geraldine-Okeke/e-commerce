import React, { useState, useEffect } from "react";

export default function SecTwo() {
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
      <h1 className="text-red-500 text-2xl font-bold pt-5">Today</h1>
      <div className="flex flex-col md:flex-row md:w-1/2 mt-4">
        <div>
            <span className="text-3xl font-bold">Flash Sales</span>
        </div>
        <div className="flex flex-row items-center md:ml-auto">
          
          <div className="flex flex-col items-center mx-2">
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
        
      </div>
    </>
  );
}
