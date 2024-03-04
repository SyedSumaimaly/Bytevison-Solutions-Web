import React from "react";
function Counter() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:w-[90%] w-[95%] mt-16 mb-16 m-auto rounded-2xl md:space-x-[90px] bg-white/10 ">
        <div className="flex flex-col items-center mt-12 md:mb-12">
          <div className="flex items-center justify-center w-40 h-40 rounded-full  border-dashed border-t border-4 border-blue-600 ">
            <span className="text-5xl font-bold text-white">09</span>
          </div>
          <span className="mt-2 text-2xl font-bold text-white ">
            Days
          </span>
        </div>
        <div className="flex flex-col items-center mt-12">
          <div className="flex items-center justify-center w-40 h-40 rounded-full  border-dashed border-4 border-blue-600 ">
            <span className="text-5xl font-bold text-white">23</span>
          </div>
          <span className="mt-2 text-2xl font-bold text-white ">
            Hours
          </span>
        </div>
        <div className="flex flex-col items-center mt-12">
          <div className="flex items-center justify-center w-40 h-40 rounded-full  border-dashed border-4 border-blue-600 ">
            <span className="text-5xl font-bold text-white">38</span>
          </div>
          <span className="mt-2 text-2xl font-bold text-white ">
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center mt-12">
          <div className="flex items-center justify-center w-40 h-40 rounded-full  border-dashed border-4 border-blue-600 ">
            <span className="text-5xl font-bold text-white">16</span>
          </div>
          <span className="mt-2 text-2xl font-bold text-white ">
            Seconds
          </span>
        </div>
      </div>
    </>
  );
}

export default Counter;
