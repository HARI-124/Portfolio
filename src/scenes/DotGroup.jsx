import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const DotGroup = ({selectedPage,setSelectedPage}) => {

  const SelectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
  before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  const links = ["home","skills","projects","testimonials","contact"]
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
   
   {links.map(item => 
    <AnchorLink
        className={`${selectedPage===item? SelectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`
        }
        href={`#${item}`}
        onClick={()=> setSelectedPage(item)}
        >
            
        </AnchorLink>
   )}
   
   
   
    </div>
  )
}

export default DotGroup