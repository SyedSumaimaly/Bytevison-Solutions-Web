import React from "react";
import Image from "next/image";

function Sectionabout() {
  return (
    <>
      <div className="w-[90%] flex  m-auto mb-8 rounded-lg md:p-8 p-1 ">
        <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="w-[50%]">
        <Image
          src="/images/About-Us-1.png"
          width={500}
          height={600}
          alt="aboutimage"
          className="px-4 py-4"
        />
      </div>

          <div className="flex items-center rounded-3xl h-[90%] md:w-[50%] w-full bg-rgb(48, 112, 138);  py-4  pl-4 md:pl-10">
            <div>
              <div className="py-2">
                <h2 className="text-[70px] font-bold text-white ">About Us</h2>
              </div>
              <div className="px-2 py-2">
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
                  class="bg-[--primary] text-sm sm:text-md py-3 px-5 rounded-lg font-semibold hover:bg-[--secondary]  transition-all duration-300 flex items-center"
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
