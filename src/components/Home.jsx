import MenuSection from "./MenuSection"
import OffersSection from "./OffersSection.jsx"
import AvailableprdctSection from "./AvailableprdctSection.jsx"
import AboutUs from "./AboutUs.jsx"
import Subscribe from "./Subscribe.jsx"

function Home() {
  return (
   <>
    <MenuSection />
    <OffersSection displaySettings={2}/>
    <AvailableprdctSection/>
    <AboutUs/>
    <Subscribe />
   </>
  )
}

export default Home