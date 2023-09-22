import Header from "./Header"
import SectionOne from "./SectionOne"
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
import sec2 from './SecTwoItems'
import SecFour from './SecTwo'
import sec4 from './SecFourItems'
import SecFive from "./SecFive"
import SecSix from './SecTwo'
import sec6 from './SecSixItems'
import SecSeven from "./SecSeven"
import SecEight from "./SecEight"
import Footer from "./Footer"
export default function Home(){
  return(
    <>
    <Header/>
    <SectionOne/>
    <SecTwo
      sec2items={sec2}
      heading="Today's"
      title= 'Flash Sales'
      showDiv ={true}
    />
    <SecThree/>
    <SecFour
      sec2items={sec4}
      heading='This Month'
      title= "Best Selling Products"
      showDiv ={false}
    />
    <SecFive/>
    <SecSix
      sec2items={sec6}
      heading='Our Products'
      title='Explore Our Products'
    />
    
    <SecSeven/>
    <SecEight/>
    <Footer/>
   
    </>
  )
}