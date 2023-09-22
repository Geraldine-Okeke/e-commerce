import React, { useState, useEffect } from 'react';
import speaker from './images/SecFourImages/Sec5Img.png';

export default function SecFive() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5); // Set the target date to 5 days from now

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(targetDate);

      if (newTimeRemaining.total <= 0) {
        clearInterval(intervalId);
      } else {
        setTimeRemaining(newTimeRemaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining(targetDate) {
    const currentTime = new Date();
    const totalSeconds = Math.max(0, Math.floor((targetDate - currentTime) / 1000));
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { total: totalSeconds, days, hours, minutes, seconds };
  }

  return (
    <>
      <div className="bg-black text-white flex flex-col md:flex-row h-auto mt-10">
        <div className="md:w-1/2 flex flex-col mx-5 py-10">
          <span className='text-green-500 font-bold'>Categories</span>
          <h1 className='text-4xl md:w-1/2 font-bold my-5'>Enhance Your Music Experience</h1>
          <div className="text-2xl font-bold flex flex-row gap-1">
              <div className='bg-white text-black text-sm text-center justify-center rounded-full w-16 h-16 flex flex-col'>
                {timeRemaining.days}
                <span className='text-sm' >days</span>
              </div>
              <div className='bg-white text-black text-sm text-center justify-center rounded-full w-16 h-16 flex flex-col'>
                {timeRemaining.hours}
                <span>hours</span>
              </div>
              <div className='bg-white text-black text-sm text-center justify-center rounded-full w-16 h-16 flex flex-col'>
                {timeRemaining.minutes}
                <span>minutes</span>
              </div>
              <div className='bg-white text-black text-sm items-center justify-center text-center rounded-full w-16 h-16 flex flex-col'>
                {timeRemaining.seconds}
                <span>seconds</span>
              </div>
          </div>
          <button className='bg-green-500 w-1/4 py-2 mt-5'>Buy Now</button>
        </div>
        <div className="md:w-1/2 py-10 flex  items-center">
          <img className='w-full h-3/4 md:w-1/2 mx-auto' src={speaker} alt='speaker'/>
        </div>
      </div>
    </>
  );
}
