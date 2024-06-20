import React from "react";
import CountUp from "react-countup";

const CountDown = () => {
  return (
    <div className="container items-center  text-white">
      <div className="flex  justify-center gap-32 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <CountUp end={500} duration={5} /> +
          </h1>
          <h3>Server Managed</h3>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <CountUp end={10} duration={5} /> +
          </h1>
          <h3>Experiences</h3>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <CountUp end={50} duration={4} /> K
          </h1>
          <h3>Satisfied Customers</h3>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            <CountUp end={25} duration={8} /> +
          </h1>
          <h3>Global Countries</h3>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
