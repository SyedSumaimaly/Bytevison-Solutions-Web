"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import Atropos from "atropos/react";
function Ourprojects() {
  return (
    <>
      <div className="w-[90%] mx-auto m-14">
        <div className="m-4 flex flex-col md:flex-row">
          <h1 className="md:text-5xl text-[30px] font-extrabold text-white">
            Check Out Our{" "}
            <span className="text-[--primary]">Featured Projects</span>
          </h1>
          <div className="md:pl-[300px] pl-0px mt-4">
            <p className="text-white mb-4">
              Lorem ipsum dolor amet consectetur adipisicing. <br /> Doloremque
              consequuntur dolorum unde deleniti <br /> provident illo laborum
              optio quam alias?
            </p>
            <Button>Explore Our Work</Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 mt-8 w-full">
          <div className="md:w-[50%] w-full">
            <Atropos highlight={false}>
              <div className="cursor-pointer">
                <Image
                  src="/images/Featured-Project3.png"
                  width={800}
                  height={900}
                  alt="aboutimage"
                  className="px-4 py-4 rounded-3xl"
                />
                <div>
                  <h1 className="text-center font-bold text-white">
                    Smart watch Design
                  </h1>
                  <p className="text-gray-400 text-center capitalize">
                    App Design & Development
                  </p>
                </div>
              </div>
            </Atropos>
          </div>
          <div className="md:w-[50%] w-full">
            <Atropos highlight={false}>
              <div className="md:mt-16 cursor-pointer">
                <Image
                  src="/images/Featured-Project2.png"
                  width={800}
                  height={900}
                  alt="aboutimage"
                  className="px-4 py-4 rounded-3xl"
                />
                <div>
                  <h1 className="text-center font-bold text-white">
                    Smart watch Design
                  </h1>
                  <p className="text-gray-400 text-center">
                    App Design & Development
                  </p>
                </div>
              </div>
            </Atropos>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 mt-8">
          <div className="md:w-[50%] w-full">
            <Atropos highlight={false}>
              <div className="cursor-pointer">
                <Image
                  src="/images/Featured-Project1.png"
                  width={800}
                  height={400}
                  alt="aboutimage"
                  className="px-4 py-4 rounded-3xl"
                />
                <div>
                  <h1 className="text-center font-bold text-white">
                    Smart watch Design
                  </h1>
                  <p className="text-gray-400 text-center">
                    App Design & Development
                  </p>
                </div>
              </div>
            </Atropos>
          </div>
          <div className="w-full md:w-[50%]">
            <Atropos highlight={false}>
              <div className="md:mt-16 cursor-pointer">
                <Image
                  src="/images/Featured-Project4.png"
                  width={800}
                  height={900}
                  alt="aboutimage"
                  className="px-4 py-4 rounded-3xl"
                />
                <div>
                  <h1 className="text-center font-bold text-white">
                    Smart watch Design
                  </h1>
                  <p className="text-gray-400 text-center">
                    App Design & Development
                  </p>
                </div>
              </div>
            </Atropos>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourprojects;
