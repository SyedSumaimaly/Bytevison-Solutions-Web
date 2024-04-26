import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 py-10 sm:pt-20 sm:pb-10 px-6 text-white">
      <div className="col-span-1">
        <div className="flex items-center justify-between w-full bg-gray-100/[0.1] py-2 px-4 rounded-full">
          <div className="h-4 w-4 bg-[--primary] rounded-full me-2 "></div>
          <span className="text-sm">We are available for new projects!</span>
        </div>
        <div className="py-5 md:py-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
          <span>Digital <span className="text-[--primary]">Elegance</span></span>
        </div>
        <div>
          {/* <button className="bg-[--primary] text-sm sm:text-md py-3 px-5 rounded-full font-semibold hover:bg-[--secondary]  transition-all duration-300 flex items-center">
            Explore Our Work <FaArrowRight className="ms-2" />
          </button> */}
          <Button>Explore Our Work </Button>
        </div>
      </div>
      <div className="col-span-2">
        <Image
          src="/images/Image-Hero-1.png"
          width={700}
          height={500}
          alt="two man working on laptop"
        />
      </div>
      <div className="col-span-1 md:py-10 lg:px-10">
        <div className="w-full h-[1px] mb-5 bg-[--primary]"></div>
        <span>
          Embark on a journey of digital elegance with Bytevision Solutions. Our
          expert team seamlessly blends cutting-edge design and innovative
          technology to create captivating online experiences.
        </span>
      </div>
    </section>
  );
};

export default Hero;
