import React from "react";
import CountDown from "./CountDown";
import CardFourthSection from "./CardFourthSection";

const FourthSection = () => {
  return (
    <div className="relative bg-slate-800 lg:mt-0 md:mt-40 mt-20">
      <div className="lg:absolute  -left-4 -top-1/3 flex  flex-wrap justify-center items-center content-center gap-10 w-full lg:py-0 py-20">
        <CardFourthSection />
        <CardFourthSection />
        <CardFourthSection />
      </div>
      <div className=" w-full flex justify-center items-center content-centern lg:pt-96 ">
        <CountDown />
      </div>
    </div>
  );
};

export default FourthSection;
