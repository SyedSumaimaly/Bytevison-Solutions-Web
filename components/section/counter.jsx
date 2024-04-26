"use client";
import Atropos from "atropos/react";
import React from "react";
function Counter() {
  return (
    <>
      <Atropos highlight={false}>
        <div className="flex flex-col md:flex-row justify-center md:w-[90%] w-[95%] mt-28 mb-16 mx-auto rounded-2xl gap-10 md:gap-16 lg:gap-28 bg-gray-100/[0.1] py-14">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-40 h-40 rounded-full border-4 border-dashed border-[--primary] animate-[spin_7s_linear_infinite]">
              <span className="text-5xl font-bold text-white text_animation">
                09
              </span>
            </div>
            <span className="mt-2 text-2xl font-bold text-white ">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-40 h-40 rounded-full  border-dashed border-4 border-[--primary] animate-[spin_7s_linear_infinite]">
              <span className="text-5xl font-bold text-white text_animation">
                23
              </span>
            </div>
            <span className="mt-2 text-2xl font-bold text-white ">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-40 h-40 rounded-full  border-dashed border-4 border-[--primary] animate-[spin_7s_linear_infinite]">
              <span className="text-5xl font-bold text-white text_animation">
                38
              </span>
            </div>
            <span className="mt-2 text-2xl font-bold text-white ">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-40 h-40 rounded-full  border-dashed border-4 border-[--primary] animate-[spin_7s_linear_infinite]">
              <span className="text-5xl font-bold text-white text_animation">
                16
              </span>
            </div>
            <span className="mt-2 text-2xl font-bold text-white ">Seconds</span>
          </div>
        </div>
      </Atropos>
    </>
  );
}

export default Counter;
