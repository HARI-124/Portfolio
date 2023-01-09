import Navbar from './scenes/Navbar';
import React,{useEffect, useState} from 'react';
import './App.css';
import useMediaQuery from './hooks/useMediaQuery';
import DotGroup from "./scenes/DotGroup"

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
      </div>

    </div>
  );
}

export default App;
