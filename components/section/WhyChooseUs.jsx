import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <>
      <div className="w-[90%] mx-auto pt-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-[50%] w-full text-white">
            <h1 className="font-bold md:text-5xl text-4xl pt-8 md:pt-0">
              Let's Get Work With <span className="text-[--primary]">Our Expert</span>
            </h1>
            <p className=" text-gray-400 pb-4 pt-4 text-lg">
              Empower your brand with our comprehensive suite of services designed to propel you to digital excellence
            </p>
            <div className="flex justify-between">
              <span className="text-base font-medium pb-2">
                Digital Strategy
              </span>
              <span className="text-sm font-medium">
                85%
              </span>
            </div>
            <div className="bg-white/10 rounded-full h-2.5">
              <div className="bg-[--primary] h-2.5 rounded-full w-[85%]"></div>
            </div>

            <div className="flex justify-between mt-8 ">
              <span className="text-base font-medium pb-2 ">
                Digital Productivity
              </span>
              <span className="text-sm font-medium">
                69%
              </span>
            </div>
            <div className="bg-white/10 rounded-full h-2.5">
              <div className="bg-[--primary] h-2.5 rounded-full w-[69%]"></div>
            </div>

            <div className="flex justify-between mt-8 ">
              <span className="text-base font-medium pb-2">
                Digital Planning
              </span>
              <span className="text-sm font-medium">
                73%
              </span>
            </div>
            <div className="bg-white/10 rounded-full h-2.5">
              <div className="bg-[--primary] h-2.5 rounded-full w-[73%]"></div>
            </div>
          </div>
          <div className="md:w-[50%] w-full">
          <iframe className="" frameBorder={0} height={400} width={400} src="https://lottie.host/embed/7054bf83-a4a1-4615-b611-a358e3ed121e/dD8eyRnXQi.json"></iframe>
            {/* <Image
              src="/images/Lets-Get-Work.png"
              width={900}
              height={700}
              alt="two man working on laptop"
              className="mx-auto"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
