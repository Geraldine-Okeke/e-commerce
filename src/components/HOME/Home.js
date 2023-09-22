import Header from "./Header"
import SectionOne from "./SectionOne"
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
import sec2 from './SecTwoItems'
import SecFour from './SecTwo'
import sec4 from './SecFourItems'
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
    </>
  )
}