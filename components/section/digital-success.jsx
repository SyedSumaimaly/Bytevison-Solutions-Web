import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

function Digitalsuccess() {
  return (
    <>
      <div className=" mb-8 w-[90%] m-auto">
        <h1 className="text-center md:text-[40px] text-[25px] font-bold font-serif text-white">
          Bytevison Solutions for
          <br />
          Digital Success
        </h1>
        <p className="text-center mb-4 text-gray-400 font-serif">
          Empower your brand with our comprehensive suite of services <br/>
          designed to propel you to digital excellence
        </p>
        <div className="flex justify-center">
          <button className="bg-[--primary] text-sm sm:text-md py-3 px-5 text-white rounded-full font-semibold hover:bg-[--secondary]  transition-all duration-300 flex items-center">
            Explore Our Work <FaArrowRight className="ms-2" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[33%] w-full  mb-4 ">
            <div class="max-w-sm p-6 m-6  bg-white/10 shadow-lg shadow-cyan-500/50   rounded-2xl">
            <Image className="mx-auto"
            src="/images/Service3.png"
            width={150}
            height={200}
            alt="aboutimage"
        />
              
              <a href="#">
                <h5 class="pb-2 pt-2 text-3xl font-semibold tracking-tight gradient-text">
                Digital Marketing <br/>for your
                </h5>
              </a>
              <p class="mb-3 font-normal text-white">
              Boost your growth with our tailored, insight-driven strategies
              </p>
             
            </div>

            <div class="max-w-sm p-6 m-6 bg-white/10 rounded-2xl shadow-lg shadow-cyan-500/50 ">
            <Image className="mx-auto"
            src="/images/Service2.png"
            width={150}
            height={200}
            alt="aboutimage"
        />
              
              <a href="#">
                <h5 class="pb-2 pt-2 text-3xl font-semibold tracking-tight gradient-text">
                Digital Marketing <br/>for your
                </h5>
              </a>
              <p class="mb-3 font-normal text-white">
              Boost your growth with our tailored, insight-driven strategies
              </p>
             
            </div>
          </div>
          <div className="md:w-[33%] w-full  flex items-center">
            <div class="max-w-sm  p-6 m-6 bg-white/10 shadow-lg shadow-cyan-500/50 rounded-lg " >
            <Image className="mx-auto"
            src="/images/Service1.png"
            width={450}
            height={600}
            alt="aboutimage"
        />
              
              <a href="#">
                <h5 class="pb-2 pt-2 text-3xl font-semibold tracking-tight gradient-text">
                Digital Marketing <br/>for your
                </h5>
              </a>
              <p class="mb-3 font-normal text-white">
              Boost your growth with our tailored, insight-driven strategies
              </p>
             
            </div>
          </div>
          <div className="md:w-[33%] w-full ">
          <div class="max-w-sm p-6 m-6 bg-white/10  rounded-2xl shadow-lg shadow-cyan-500/50">
          <Image className="mx-auto"
          src="/images/Service4.png"
          width={150}
          height={200}
          alt="aboutimage"
      />
            
            <a href="#">
              <h5 class="pb-2 pt-2 text-3xl font-semibold tracking-tight gradient-text">
              Digital Marketing <br/>for your
              </h5>
            </a>
            <p class="mb-3 font-normal text-white">
            Boost your growth with our tailored, insight-driven strategies
            </p>
           
          </div>

          <div class="max-w-sm p-6 m-6 bg-white/10  rounded-2xl shadow-lg shadow-cyan-500/50 ">
            <Image className="mx-auto"
            src="/images/Asset-153.png"
            width={150}
            height={200}
            alt="aboutimage"
        />
              
              <a href="#">
                <h5 class="pb-2 pt-2 text-3xl font-semibold tracking-tight gradient-text">
                Digital Marketing <br/>for your
                </h5>
              </a>
              <p class="mb-3 font-normal text-white">
              Boost your growth with our tailored, insight-driven strategies
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Digitalsuccess;