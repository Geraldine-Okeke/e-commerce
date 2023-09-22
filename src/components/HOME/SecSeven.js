import ps5 from './images/SecSevenImage/PS-5.png';
import lady from './images/SecSevenImage/Lady.png'
import speaker from './images/SecSevenImage/speaker.png'
import perf from './images/SecSevenImage/perf.png'


export default function SecSeven() {
  
  return (
    <>
      <div className="flex flex-row gap-2 mt-10">
      <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
        <rect width="20" height="40" rx="4" fill="#DB4444"/>
      </svg>
      <h1 className="text-red-500 text-2xl font-bold pt-5">Featured</h1>
      </div>
      <h1 className='text-3xl font-bold'>New Arrivals</h1>
      <div className="flex flex-col md:flex-row text-white h-auto  mt-10 gap-3">
        <div className="w-full md:w-1/2 flex flex-row h-auto bg-black " >
          <div className='flex flex-col pl-4 space-y-4 w-1/2 my-auto pb-2' >
            <span className='text-3xl font-bold'>Play Station 5</span>
            <span className=''>Black and White version of PS5 coming out for sale</span>
            <button className='border w-full md:w-1/3 '>Shop Now</button>
          </div>
          <div className='float-right  w-1/2'>
            <img className='w-full h-full' src={ps5} alt='ps5'/>
          </div>
         
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <div className='bg-black h-1/2 flex flex-col md:flex-row'>
            <div className='flex flex-col my-auto px-4'>
              <span className='text-3xl font-bold'>Women's Collection</span>
              <span className=''>Featured woman collections that give you another vibe.</span>
              <button className='w-full md:w-1/4 border'>Shop Now</button>
            </div>
            <img src={lady} alt='lady' className='h-full '/> 
          </div>
          <div className= ' flex gap-10 flex-col md:flex-row h-1/2 gap-3'>
            <div className='w-full md:w-1/2 relative bg-black pb-20'>
              <img src={speaker} alt='spk'/>
              <div className='absolute flex flex-col bottom-10  px-4 space-y-2'>
                <span className='text-3xl font-bold'>Speakers</span>
                <span>Amazon wireless speakers</span>
                <button className='w-1/2 border'>Shop Now</button>
              </div>
            </div>
            <div className='w-full md:w-1/2 relative bg-black'>
              <img src={perf} alt='perf'/>
              <div className='absolute flex flex-col bottom-10 px-4 space-y-2'>
                <span className='text-3xl font-bold'>Perfumes</span>
                <span>GUCCI INTENSE OUD EDP</span>
                <button className='w-1/2 border'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}