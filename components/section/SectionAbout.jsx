import React from "react";
import Image from "next/image";
import Button from "./Button";

function Sectionabout() {
  return (
    <>
      <div className="w-[90%] flex mx-auto rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-[50%] ">
            <Image src={"/images/about1.jpeg"} className="rounded-xl" height={600} width={500} alt="about" />
          </div>

          <div className="flex flex-col gap-6 p-8 pe-4 justify-center h-full bg-gray-100/[0.1] rounded-3xl w-full md:w-[50%] text-white">
            <div className="">
              <p className="text-5xl font-bold text-[--primary]">About Us</p>
            </div>
            <div className="">
              <p className="pb-4">
                Welcome to{" "}
                <span className="text-[--primary]">Bytevision Solutions</span>,
                where creativity meets technology. We are a passionate team of
                digital enthusiasts dedicated to transforming ideas into
                extraordinary online experiences.
              </p>
              <p className="">
                Welcome to Bytevision Solutions, where creativity meets
                technology. We are a passionate team of digital enthusiasts
                dedicated to transforming ideas into extraordinary online
                experiences.
              </p>
            </div>
            <div className="">
              <Button>See More</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionabout;
