"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Button from "./Button";
import Atropos from "atropos/react";

function Digitalsuccess() {
  return (
    <>
      <div className=" mb-8 w-full m-auto">
        <h1 className="text-center md:text-5xl text-[25px] font-bold text-white">
          Bytevison Solutions for
          <br />
          <span className="text-[--primary]">Digital Success</span>
        </h1>
        <p className="text-center my-4 text-gray-400 ">
          Empower your brand with our comprehensive suite of services designed
          to propel you to digital excellence.
        </p>

        <div className="flex justify-center flex-col lg:flex-row">
          <div className="lg:w-[33%] w-full mb-4 flex flex-col items-center">
            <Atropos highlight={false}>
              <div className="max-w-sm p-6 m-6 bg-white/10 mx-auto cursor-pointer hover:bg-[--primary] rounded-2xl transition-all duration-500 delay-0">
                <Image
                  className="mx-auto"
                  src="/images/Service3.png"
                  width={150}
                  height={200}
                  alt="aboutimage"
                />

                <a href="#">
                  <h5 className="pb-2 pt-2 text-3xl font-semibold text-white">
                    Digital Marketing <br />
                    for your
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white">
                  Boost your growth with our tailored, insight driven strategies
                </p>
              </div>
            </Atropos>

            <Atropos highlight={false}>
              <div className="max-w-sm p-6 m-6 bg-white/10 mx-auto cursor-pointer transition-all duration-500 delay-0 hover:bg-[--primary] rounded-2xl ">
                <Image
                  className="mx-auto"
                  src="/images/Service2.png"
                  width={150}
                  height={200}
                  alt="aboutimage"
                />

                <a href="#">
                  <h5 className="pb-2 pt-2 text-3xl font-semibold text-white">
                    Digital Marketing <br />
                    for your
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white">
                  Boost your growth with our tailored, insight-driven strategies
                </p>
              </div>
            </Atropos>
          </div>
          <div className="lg:w-[33%] w-full flex items-center">
            <Atropos highlight={false} className="mx-auto">
              <div className="max-w-sm mx-auto p-6 m-6 bg-[--primary] rounded-lg cursor-pointer">
                <Image
                  className="mx-auto"
                  src="/images/Service1.png"
                  width={450}
                  height={600}
                  alt="aboutimage"
                />

                <a href="#">
                  <h5 className="pb-2 pt-2 text-3xl font-semibold text-white">
                    Digital Marketing <br />
                    for your
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white">
                  Boost your growth with our tailored, insight-driven strategies
                </p>
              </div>
            </Atropos>
          </div>
          <div className="lg:w-[33%] w-full ">
            <Atropos highlight={false}>
            <div className="max-w-sm p-6 m-6 bg-white/10 mx-auto cursor-pointer transition-all duration-500 delay-0 hover:bg-[--primary] rounded-2xl ">
              <Image
                className="mx-auto"
                src="/images/Service4.png"
                width={150}
                height={200}
                alt="aboutimage"
              />

              <a href="#">
                <h5 className="pb-2 pt-2 text-3xl font-semibold text-white">
                  Digital Marketing <br />
                  for your
                </h5>
              </a>
              <p className="mb-3 font-normal text-white">
                Boost your growth with our tailored, insight-driven strategies
              </p>
            </div>
            </Atropos>

            <Atropos highlight={false}>
            <div className="max-w-sm p-6 m-6 bg-white/10 mx-auto cursor-pointer transition-all duration-500 delay-0 hover:bg-[--primary] rounded-2xl  ">
              <Image
                className="mx-auto"
                src="/images/Asset-153.png"
                width={150}
                height={200}
                alt="aboutimage"
              />

              <a href="#">
                <h5 className="pb-2 pt-2 text-3xl font-semibold text-white">
                  Digital Marketing <br />
                  for your
                </h5>
              </a>
              <p className="mb-3 font-normal text-white">
                Boost your growth with our tailored, insight-driven strategies
              </p>
            </div>
            </Atropos>
          </div>
        </div>
        <div className="flex justify-center">
          <Button>Explore Our Work</Button>
        </div>
      </div>
    </>
  );
}

export default Digitalsuccess;
