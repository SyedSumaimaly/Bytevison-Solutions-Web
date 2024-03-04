'use client';
import React from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Avatar, Blockquote } from "flowbite-react";

function Testimonial() {
  return (
    <>
      <div className="h-96 sm:h-96 xl:h-80 2xl:h-96 pt-16 mb-[4%]">
        <Carousel>
          <figure className="mx-auto max-w-screen-md text-center">
            <svg
              className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
              <p className="text-2xl font-medium italic text-white">
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
              </p>
            </Blockquote>
            <figcaption className="mt-6 pb-8 flex items-center justify-center space-x-3">
             
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-white">
                  Micheal Gough
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CEO at Google
                </cite>
              </div>
            </figcaption>
          </figure>

          <figure className="mx-auto max-w-screen-md text-center">
          <svg
            className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="text-2xl font-medium italic text-white">
              Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.
            </p>
          </Blockquote>
          <figcaption className="mt-6 pb-8 flex items-center justify-center space-x-3">
           
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-white">
                Micheal Gough
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                CEO at Google
              </cite>
            </div>
          </figcaption>
        </figure>

        <figure className="mx-auto max-w-screen-md text-center">
        <svg
          className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Blockquote>
          <p className="text-2xl font-medium italic text-white">
            Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application.
          </p>
        </Blockquote>
        <figcaption className="mt-6 pb-8 flex items-center justify-center space-x-3">
          
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-white">
              Micheal Gough
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              CEO at Google
            </cite>
          </div>
        </figcaption>
      </figure>
        </Carousel>
      </div>

      
    </>
  );
}

export default Testimonial;
