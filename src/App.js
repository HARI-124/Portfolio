import Navbar from './scenes/Navbar';
import React,{useEffect, useState} from 'react';
import './App.css';
import useMediaQuery from './hooks/useMediaQuery';
import DotGroup from "./scenes/DotGroup"
import Landing from './scenes/Landing';
import LineGradient from "./components/LineGradient";
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Testimonial from "./scenes/Testimonial";
import Contact from "./scenes/Contact";
import Footer from './scenes/Footer';
function App() {
  const [ selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopPage,setIsTopPage] = useState(true);
  
  useEffect(()=>{
    
    const handleScroll=()=>{
      if(window.scrollY === 0) setIsTopPage(true);
      if(window.screenY !== 0) setIsTopPage(false);
    }
    window.addEventListener("scroll",handleScroll);
      return () => window.removeEventListener("scroll",handleScroll);
  },[]);
  
  return (
   
    
    <div className="App bg-deep-blue">
      <Navbar 
      isTopPage={isTopPage}
      selectedPage={selectedPage} 
      setSelectedPage = {setSelectedPage}
      ></Navbar>

      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens &&(
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage = {setSelectedPage}
          />
        )}

        <Landing
          setSelectedPage={setSelectedPage}
          ></Landing>
      </div>

          <LineGradient></LineGradient>
          <div className='w-5/6 mx-auto md:h-full'>
          <MySkills></MySkills>
          </div>
          <LineGradient></LineGradient>
          <div className='w-5/6 mx-auto '>
          <Projects></Projects>
          </div>
          <LineGradient></LineGradient>
          <div className='w-5/6 mx-auto md:h-full'>
          <Testimonial></Testimonial>
          </div>
          <LineGradient></LineGradient>
          <div className='w-5/6 mx-auto md:h-full'>
          <Contact></Contact>
          </div>
          
          <div className=' mx-auto  max-h-0'>
          <Footer></Footer>
          </div>
    </div>
  );
}

export default App;
