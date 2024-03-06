import React from "react";
import Image from "next/image";

function Sectionabout() {
  return (
    <>
      <div className="w-[90%] flex  m-auto mb-8 rounded-lg md:p-8 p-1 ">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="w-[50%] md:w-[40%]">
            <Image
              src="/images/About-Us-1.png"
              width={900}
              height={100}
              alt="aboutimage"
              className="px-4 py-4"
            />
          </div>

          <div className="flex items-center  bg-gradient-to-b from-[--secondary] to-[--primary] rounded-3xl py-16 md:py-12 md:w-[60%] lg-w[50%] w-full pl-4 md:pl-10">
            <div>
              <div className="pb-6">
                <h2 className="text-5xl  font-bold text-white ">About Us</h2>
              </div>
              <div className="pe-6 py-2">
                <p className="pb-4 text-white">
                  Welcome to Bytevision Solutions, where creativity meets
                  technology. We are a passionate team of digital enthusiasts
                  dedicated to transforming ideas into extraordinary online
                  experiences{" "}
                </p>
                <p className="text-white">
                  Welcome to Bytevision Solutions, where creativity meets
                  technology. We are a passionate team of digital enthusiasts
                  dedicated to transforming ideas into extraordinary online
                  experiences
                </p>
              </div>

              <div className="py-4">
                <button
                  type="button"
                  class="bg-white  text-[--primary] text-sm sm:text-md py-3 px-5 rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border hover:border-white  transition-all duration-300 flex items-center"
                >
                  know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionabout;
