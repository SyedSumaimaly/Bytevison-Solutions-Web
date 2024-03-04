import React from "react";
import Image from "next/image";

function Contactus() {
  return (
    <>
      <div className="w-[90%] m-auto  gap-2 flex flex-col md:flex-row pb-16">
        <div className="w-full md:w-[50%] md:pb-0 pb-4">
          <Image
            src="/images/Form-Images-1.png"
            width={400}
            height={600}
            alt="aboutimage"
          />
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-pink-500 rounded-2xl w-full md:w-[50%]">
          <h1 className="px-4 py-4 md:text-5xl text-4xl font-bold text-white">
            Message Us
          </h1>
          <div className="m-2 p-2 gap-2 flex flex-col md:flex-row ">
            <div className="w-full md:w-[50%] ">
              <div className="mb-2">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-bold text-white dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
            </div>
            <div className="w-full md:w-[50%] ">
              <div className="">
                <label
                  for="email"
                  class="block mb-2 text-sm font-bold text-white dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="text"
                  id="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
            </div>
          </div>

          <div className="m-2 p-2 gap-2 flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] ">
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-bold text-white dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div class="">
                <label
                  for="email"
                  class="block mb-2 text-sm font-bold text-white dark:text-white"
                >
                  Service
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select Service"
                  required
                />
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <label
              for="message"
              class="block mb-2 text-sm font-bold text-white dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Your Message Here..."
            ></textarea>
          </div>
          <div className="flex md:justify-end justify-start pl-2 pb-2 md:pr-2">
            <button
              type="button"
              class="bg-black text-sm sm:text-md py-3 px-5 text-white rounded-lg font-semibold hover:bg-[--secondary]  transition-all duration-300 flex items-center"
            >
              know More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
