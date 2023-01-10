import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const DotGroup = ({selectedPage,setSelectedPage}) => {

  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
   <AnchorLink
        className={`${selectedPage==="home"? "" : "bg-dark-grey"} w-3 h-3 rounded-full`
        }
        href={"#home"}
        onClick={()=> setSelectedPage("home")}
        >
            
        </AnchorLink>
    </div>
  )
}

export default DotGroup