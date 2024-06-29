import React from "react";
import CountUp from "react-countup";

const CountDown = () => {
  return (
    <div className="container items-center  text-white mb-40">
      <div className="grid gap-4 lg:grid-cols-4 grid-cols-2 ">
        <div className="text-center lg:text-4xl text-xl font-bold">
          <CountUp end={500} duration={5} /> +
          <h3 className="lg:text-xl text-base">Server Managed</h3>
        </div>
        <div className="text-center lg:text-4xl text-xl font-bold">
          <CountUp end={10} duration={5} /> +
          <h3 className="lg:text-xl text-base">Experiences</h3>
        </div>
        <div className="text-center lg:text-4xl text-xl font-bold">
          <CountUp end={50} duration={4} /> K
          <h3 className="lg:text-xl text-base">Satisfied Customers</h3>
        </div>
        <div className="text-center lg:text-4xl text-xl font-bold">
          <CountUp end={25} duration={8} /> +
          <h3 className="lg:text-xl text-base">Global Countries</h3>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
