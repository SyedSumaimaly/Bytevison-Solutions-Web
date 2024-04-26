import React from "react";

function Contact({ heading }) {
  return (
    <>
      <div className={`md:w-[90%] w-[85%] m-auto pt-10 `}>
        <div className="bg-gradient-to-br from-[--secondary] to-[--primary] rounded-2xl mb-16 ">
          <h1 className="text-center pt-14 font-bold text-white text-4xl">
            {heading}
          </h1>
          <p className="text-center pt-2 text-gray-400 pb-16">
            We create, scale, and refine what you need.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
