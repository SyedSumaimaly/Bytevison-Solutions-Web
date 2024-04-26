import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Contact from "./Contact";

function Contactus() {
  return (
    <>
      <div className="w-[90%] m-auto gap-2 flex flex-col justify-center items-center md:flex-row py-16">
        <div className="w-full md:w-[50%] md:pb-0 pb-8">
          <Image
            src="/images/Form-Images-1.png"
            width={400}
            height={600}
            alt="aboutimage"
          />
        </div>
        <div className="bg-gray-100/10 rounded-2xl w-full md:w-[50%] p-10 h-full flex flex-col gap-6">
          <h1 className="md:text-5xl text-4xl font-bold text-[--primary]">
            Message Us
          </h1>
          <div className="gap-8 flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] ">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[--primary] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[--primary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
            </div>
            <div className="w-full md:w-[50%] ">
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[--primary] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[--primary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
          </div>

          <div className="gap-8 flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] ">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[--primary] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[--primary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_Services"
                  id="floating_Services"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[--primary] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_Services"
                  className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[--primary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Services (Ex. Google)
                </label>
              </div>
            </div>
          </div>
          <div className="relative z-0 w-full group">
            <textarea
              type="text"
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[--primary] peer"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[--primary] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <div className="flex justify-end pt-2">
            <Button>Explore Our Work</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
