import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";


function Ourstory() {
  return (
    <>

    <div className="w-[90%] m-auto  gap-2 flex flex-col md:flex-row pb-16 mt-[12%]">

  <div className="w-full relative h-[70vh] our_story_bg rounded-2xl md:w-[40%] md:pb-0 pb-4 flex justify-center">
    <Image
      src="/images/our-story.png"
      width={250}
      height={300}
      alt="aboutimage"
      className="hidden z-1 absolute sm:flex translate-y-[-20%]"
    />

</div>
    <div className="rounded-2xl w-full md:w-[60%] md:pl-16 pl-0">
         <div className='mt-16 mb-8'>
             <h1 className='px-4 py-4 font-bold text-white text-4xl'>Our Story</h1>
             <p className='px-4 text-white text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
         </div>

         <div>
         <h1 className='px-4 py-4 font-bold text-white text-4xl'>Our Mission</h1>
         <p className='px-4 text-white text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
     </div>

     <div>
     <button className="bg-[--primary] text-sm sm:text-md py-3 px-5 mt-6 ml-4 rounded-full font-semibold text-white hover:bg-[--secondary]   transition-all duration-300 flex items-center">
       Explore Our Work <FaArrowRight className="ms-2" />
     </button>
   </div>
     
  </div>
  </div>
    
    </>
  )
}

export default Ourstory