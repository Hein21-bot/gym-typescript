import Navbar from '@/snenes/navbar';
import Home from '@/snenes/home';
import Benefits from '@/snenes/benefits';
import OurClasses from '@/snenes/ourClasses';
import ContactUs from '@/snenes/contactUs'
import Footer from '@/snenes/footer';
import { useState,useEffect } from 'react';
import { SelectedPage } from './shared/type';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<Boolean>(true)

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0 ) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  },[])

  return <div className="app bg-gray-20">
    <Navbar 
    isTopOfPage = {isTopOfPage}
    selectedPage = {selectedPage}
    setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer />
  </div>;
}

export default App;
