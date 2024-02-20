import React from 'react'

const Hero = () => {
  return (
    <section className="p-10 grid grid-cols-3">
      <div className="col-span-1">
        <div className="flex items-center justify-between w-[80%] bg-gray-100/50 py-2 px-4 rounded-full">
          <div className="h-4 w-4 bg-[--secondary] rounded-full"></div>
          <span>We are available for new projects!</span>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </section>
  );
}

export default Hero;