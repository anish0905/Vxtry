import React from "react";
import hosting from "../assets/Shared-Hosting.png";
import { FiCheckSquare } from "react-icons/fi";
import FifthSectionCard from "./FifthSectionCard";


// FifthSection Component
const FifthSection = () => {
  return (
    <div className="bg-white-800 text-black py-16">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold">
            Best <span className="text-red-500">Solution</span> To <br />
            Scale Your Business
          </h2>
          <p className="mt-4 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-10">
            <div>
              <div className="flex justify-center items-center content-center gap-2">
                {" "}
                <div>
                  <FiCheckSquare />
                </div>
                <div className="block"> Business E-mail</div>
              </div>

              <div className="flex justify-center items-center content-center gap-2">
                {" "}
                <div>
                  <FiCheckSquare />
                </div>
                <div className="block"> Business E-mail</div>
              </div>
            </div>
            <div>
              {" "}
              <div className="flex justify-center items-center content-center gap-2">
                {" "}
                <div>
                  <FiCheckSquare />
                </div>
                <div className="block"> Business E-mail</div>
              </div>
              <div className="flex justify-center items-center content-center gap-2">
                {" "}
                <div>
                  <FiCheckSquare />
                </div>
                <div className="block"> Business E-mail</div>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded">
            Discover More
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={hosting} // Replace with your image URL
            alt="Hosting Solution"
            className="mx-auto"
            width={350}
            height={350}
          />
        </div>
      </div>

      {/* Services Section */}
     <div className=" container mx-auto px-4 flex flex-wrap justify-between items-center">
     {/* container mx-auto px-4 flex flex-wrap justify-between items-center */}
      <div className="w-1/2">
        <button className="bg-slate-900 text-white p-2 rounded-md" >OUR SERVICES</button>
        <h1 className="text-4xl font-bold">We Provide You World</h1>
        <h1 className="text-4xl font-bold"><span className="text-red-600 m-2">Best Hoisting</span>Services</h1>
      </div>
      <div className="w-1/2">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae id quam cumque repellendus impedit vitae, facere quidem neque ea aspernatur consequuntur maiores, incidunt illum architecto quasi unde deleniti facilis sequi.</p>
      </div>
     </div>
     <div className="flex justify-evenly flex-wrap mt-2">
<FifthSectionCard/>
<FifthSectionCard/>
<FifthSectionCard/>
<FifthSectionCard/>

     </div>
    </div>
  );
};

export default FifthSection;
