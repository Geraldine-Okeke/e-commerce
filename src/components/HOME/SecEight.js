import icon1 from './images/SecSevenImage/icon1.png'
import icon2 from './images/SecSevenImage/icon2.png'
import icon3 from './images/SecSevenImage/icon3.png'
export default function SecEight(){
  return(
    <>
      <div className='flex flex-col md:flex-row  justify-between mt-20 '>
        <div className='flex flex-col p-4'>
          <img className='w-12 h-12 mx-auto' src={icon1} alt='icon'/>
          <span className='font-bold text-xl mx-auto'>FREE AND FAST DELIVERY</span>
          <span className='mx-auto'>Free delivery for all orders over $140</span>
        </div>
        <div className='flex flex-col p-4'>
          <img className='w-12 h-12 mx-auto' src={icon2} alt='icon'/>
          <span className='font-bold text-xl mx-auto'>24/7 CUSTOMER SERVICE</span>
          <span className='mx-auto'>Friendly 24/7 customer support</span>
        </div>
        <div className='flex flex-col p-4'>
          <img className='w-12 h-12 mx-auto' src={icon3} alt='icon'/>
          <span className='font-bold text-xl mx-auto'>MONEY BACK GUARANTEE</span>
          <span className='mx-auto'>We reurn money within 30 days</span>
        </div>
      </div>
    </>
  )
}