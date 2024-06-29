import React from "react";
import SixthSectionCard from "./SixthSectionCard";

const SixthSection = () => {
  return (
    <div>
      <div className="w-full text-center  lg:text-3xl text-xl font-semibold leading-tight mb-6">
        <button className="">Our Service</button>
        <h1>Choose Your Perfect & Best</h1>
        <h1 className="text-red-500">Hosting Plans</h1>
      </div>
      <div className="lg:flex items-center mx-auto lg:space-x-4 text-center space-y-4 lg:space-y-0 justify-center mb-24">
        <SixthSectionCard />
        <SixthSectionCard />
        <SixthSectionCard />
      </div>
    </div>
  );
};

export default SixthSection;
