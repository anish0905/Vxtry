import React from "react";
import img from "../assets/thridImg.png";

const ThirdSection = () => {
  return (
    <div className="flex justify-center content-center items-center font-serif">
      <div className="lg:flex  block justify-center content-center gap-10 items-center px-10  w-full">
        <div className=" lg:w-1/2 w-full my-10">
          <img src={img} alt="" />
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-start content-center mb-4">
            <span className="text-center bg-blue-900 lg:text-xl text-sm shadow-md px-2 py-1 rounded-md lg:font-semibold text-white ">
              SIMPLE EASY WEB HOSTING
            </span>
          </div>

          <div className="mb-2">
            <h1 className="lg:text-4xl text-2xl font-bold mb-2 tracking-wide leading-tight">
              Affordable <span className=" px-4 text-red-600">Hosting</span>
              <br className="my-2" />
              Soluution Website
            </h1>
            <p className="lg:text-xl text-base">
              Lorem ipsum dolor site, saepe! Expedita, magni et consectetur
              dolorum quidem natus dicta cumque aspernatur repudiandae, delectus
              nostrum hic!!
            </p>
          </div>
          <div>
            <button className="bg-red-600 px-4 text-white py-2 rounded-md shadow-md">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
