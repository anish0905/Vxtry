import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
const NavBar = () => {
  return (
    <div className="flex items-center  font-serif content-center bg-slate-100 shadow-md justify-between px-4">
      <div className="flex lg:px-2 py-1 justify-center items-center content-center lg:gap-5 gap-4">
        <div className="flex lg:px-5 px-1 font-semibold py-5 justify-center items-center content-center lg:gap-5 gap-2">
          <MdPhoneInTalk className="lg:text-2xl text-red-600 font-extrabold text-bese" />

          <div>
            <div className=" text-sm lg:text-base">Phone</div>
            <div className="text-red-600 text-sm lg:text-base">8536654555</div>
          </div>
        </div>
        <div className="flex font-semibold  justify-center items-center content-center lg:gap-5 gap-2">
          <MdEmail className="lg:text-2xl text-red-600 font-extrabold text-bese" />
          <div>
            <div className=" text-sm lg:text-base">Mails us</div>
            <div className="text-red-600 text-sm lg:text-base">
              Example@gmail.com
            </div>
          </div>
        </div>
      </div>
      <IoReorderThree className="text-5xl" />
    </div>
  );
};

export default NavBar;
