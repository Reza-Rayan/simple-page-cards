import React from "react";

const Card = ({ extraClasses, title, content }) => {
  return (
    <div
      className={`${extraClasses} 
    shadow-xl mb-10 md:card-styles sm:mb-card-styles px-8 py-5 relative min-w-[90%] max-w-[90%] mx-auto
    hover:shadow-2xl transition-all`}
    >
      <h3 className="font-semibold text-[#4D4F62]  text-[20px]">{title}</h3>
      <p className="mt-5 text-[13px] text-[#4D4F6280] lg:pr-16 sm:pr-10 ">{content}</p>

      <div className="mt-24 flex flex-row-reverse"></div>
    </div>
  );
};

export default Card;
