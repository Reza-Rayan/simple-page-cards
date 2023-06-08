import React from "react";

const Text = () => {
  return (
    <>
      <p className="md:text-4xl text-2xl text-center font-extralight  text-[#4D4F6280]  mb-4">
        Reliable, efficient delivery
      </p>
      <span className="md:text-4xl text-2xl  font-extrabold text-center text-[#4D4F62] mb-4 ">
        Powered by Technology
      </span>
      <span className="text-lg md:w-full lg:w-[80%]  px-6 md:block hidden  md:text-center text-[#4D4F6280] font-extralight ">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </span>
      <span className="text-sm text-justify px-6 md:hidden block  text-[#4D4F6270] font-extralight tracking-wide">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </span>
    </>
  );
};

export default Text;
