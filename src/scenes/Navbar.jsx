import React from 'react'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import {HiMenu} from "react-icons/hi";
import {RiCloseLine} from "react-icons/ri";

const Link = ({page,selectedPage,setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink
        className={`${selectedPage===lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`
        }
        href={`#${lowerCasePage}`}
        onClick={()=> setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
        
    )
}





const Navbar = ({isTopPage, selectedPage,setSelectedPage}) => {
    const [ismenuToggled,setIsMenuToggled] = useState("false");
    const isAboveSmallScreens = useMediaQuery("(min-width:760px)");
    const links = ["Home","skills","Projects","Testimonials","Contact"]
    const navbarBackground = isTopPage? "":"bg-red";
    return (
    <nav className= {`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-3xl font-bold' >JE</h4>
        
        {/* Desktop Nav */}
        {
            isAboveSmallScreens? (<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>

                {links.map((item) => 
                    
                    <Link 
                    page={item}
                    selectedPage={selectedPage}
                    setSelectedPage = {setSelectedPage}
                />
                )}

               

            </div>)
            
            :(
                <button className='rounded-full bg-red p-2'
                    onClick={()=> setIsMenuToggled(!ismenuToggled) }
                >
                    <HiMenu></HiMenu>
                </button>
            )}

            {!isAboveSmallScreens && ismenuToggled && (
                <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
                    {/*close menu  */}
                    <button onClick = {()=>setIsMenuToggled(!ismenuToggled)}>
                            <RiCloseLine></RiCloseLine>
                    </button>

                      
                        {/* Menu Items */}

                    <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>

                            {links.map((item) => 
                            
                            <Link 
                            page={item}
                            selectedPage={selectedPage}
                            setSelectedPage = {setSelectedPage}
                        />
                        )}

                    </div>

                </div>
            )}


        </div>

    </nav>
  )
}

export default Navbar