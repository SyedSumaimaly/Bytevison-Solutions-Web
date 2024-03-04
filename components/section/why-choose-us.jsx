import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";



function Whychooseus() {
  return (
   <>
   <div className="w-[90%] m-auto p-4 pt-16">
   <div className="flex flex-col md:flex-row gap-8 items-center">
   <div className="md:w-[50%] w-full md:ml-16 ml-0 ">
     <h1 className="text-white font-bold md:text-5xl text-4xl  pt-8 md:pt-0">Let’s Get Work With <br className="hidden"/>Our Expert</h1>
     <p className=" text-gray-400 pb-4 pt-4 text-lg">
       Empower your brand with our comprehensive suite of services
       designed to propel you to digital excellence
     </p>
     <div className="flex justify-between ">
  <span className="text-base font-medium text-white dark:text-white pb-2">Digital Strategy</span>
  <span className="text-sm font-medium text-white dark:text-white">85%</span>
</div>
<div class="bg-white/10 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full w-[85%]"></div>
</div>

<div className="flex justify-between mt-8 ">
  <span className="text-base font-medium text-white dark:text-white pb-2 ">Digital Productivity</span>
  <span className="text-sm font-medium text-white dark:text-white">69%</span>
</div>
<div class="bg-white/10 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full w-[69%]"></div>
</div>

<div className="flex justify-between mt-8 ">
  <span className="text-base font-medium text-white dark:text-white pb-2">Digital Planning</span>
  <span className="text-sm font-medium text-white dark:text-white">73%</span>
</div>
<div class="bg-white/10 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full w-[73%]"></div>
</div>


 
    

   
   </div>
     <div className="md:w-[50%] w-full">
       <Image
         src="/images/Lets-Get-Work.png"
         width={900}
         height={700}
         alt="two man working on laptop"
         className="mx-auto"
       />
     </div>
   </div>
 </div>
   
   
   </>
  )
}

export default Whychooseus