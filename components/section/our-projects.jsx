import React from "react";
import Image from "next/image";
function Ourprojects() {
  return (
    <>
    <div className=" w-[90%] m-auto p-4 mb-16 ">
    <div className="m-4 flex flex-col md:flex-row">
      <h1 className="md:text-[50px] text-[30px] font-extrabold text-white">
        Check Out Our <br className="hidden md:flex" /> featured Projects 
        
       
      </h1>
      <div className="md:pl-[300px] pl-0px mt-4">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Doloremque consequuntur dolorum unde deleniti quod <br />{" "}
          provident illo laborum optio quam alias?
        </p>
        <button
          type="button"
          class="text-white mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-fll text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Explore Our Work
        </button>
      </div>
    </div>
   <div className=" flex flex-col md:flex-row gap-16 mt-8">
        <div className=" md:w-[50%] w-full">
          <Image
          src="/images/Featured-Project3.png"
          width={800}
          height={900}
          alt="aboutimage"
          className="px-4 py-4 rounded-3xl"
        />
        <div>
           <h1 className="text-center font-bold text-white">Smart watch Design</h1>
           <p className="text-gray-400 text-center capitalize">App Design & Development</p>
        
        </div>
        
        
        </div>
        <div className="md:w-[50%] w-full md:mt-16">
        <Image
        src="/images/Featured-Project2.png"
        width={800}
        height={900}
        alt="aboutimage"
        className="px-4 py-4 rounded-3xl"
      />
      <div>
         <h1 className="text-center font-bold text-white">Smart watch Design</h1>
         <p className="text-gray-400 text-center">App Design & Development</p>
      
      </div>
        
        </div>
       
   
   
   </div>

   <div className=" flex flex-col md:flex-row gap-16 mt-8">
   <div className=" md:w-[50%] w-full">
     <Image
     src="/images/Featured-Project1.png"
     width={800}
     height={400}
     alt="aboutimage"
     className="px-4 py-4 rounded-3xl"
  />
   <div>
      <h1 className="text-center font-bold text-white">Smart watch Design</h1>
      <p className="text-gray-400 text-center">App Design & Development</p>
   
   </div>
   
   
   </div>
   <div className="md:w-[50%] w-full md:mt-16">
   <Image
   src="/images/Featured-Project4.png"
   width={800}
   height={900}
   alt="aboutimage"
   className="px-4 py-4 rounded-3xl"
 />
 <div>
    <h1 className="text-center font-bold text-white">Smart watch Design</h1>
    <p className="text-gray-400 text-center">App Design & Development</p>
 
 </div>
   
   </div>
  


</div>
  </div>
     
    </>
  );
}

export default Ourprojects;
