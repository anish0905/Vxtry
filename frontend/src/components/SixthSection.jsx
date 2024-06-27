import React from "react";
import SixthSectionCard from "./SixthSectionCard";

const SixthSection = () => {
  return (
    <div>
      <div className="w-full text-center  text-3xl font-semibold leading-tight">
        <button className="">Our Service</button>
        <h1>Choose Your Perfect & Best</h1>
        <h1 className="text-red-500">Hosting Plans</h1>
      </div>
      <div className="lg:flex lg:space-x-4 text-center space-y-4 lg:space-y-0">
        <SixthSectionCard />
        <SixthSectionCard />
        <SixthSectionCard />
      </div>
    </div>
  );
};

export default SixthSection;
