import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";


function Letswork() {
  return (
    <>
      <div className="w-[90%] m-auto p-4">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:w-[50%] w-full">
            <Image
              src="/images/Lets-Get-Work.png"
              width={900}
              height={700}
              alt="two man working on laptop"
              className="mx-auto"
            />
          </div>
          <div className="md:w-[50%] w-full md:ml-16 ml-0 ">
            <h1 className="text-white font-bold md:text-5xl text-4xl  pt-8 md:pt-0">Let’s Get Work With <br className="hidden"/>Our Expert</h1>
            <p className=" text-gray-400 pb-4 pt-4 text-lg">
              Empower your brand with our comprehensive suite of services
              designed to propel you to digital excellence
            </p>
            <div className="flex flex-col md:flex-row md:gap-12 gap-2">
              <div>
                <span className=" text-gray-200 pt-8">Professional Experience Team</span>
              </div>
              <div>
                <span className="text-gray-200">Certified Skill Team</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-12 gap-2">
              <div className="pt-2">
                <span className=" text-gray-200">Professional Experience Team</span>
              </div>
              <div className="pt-2">
                <span className="text-gray-200">Certified Skill Team</span>
              </div>
            </div>

          
            <div>
            <button className="bg-[--primary] md:ml-4   mt-4  py-3 px-5 text-sm sm:text-md rounded-full font-semibold hover:bg-[--secondary]  transition-all duration-300 flex items-center">
              Explore Our Work <FaArrowRight className="ms-2" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Letswork;
