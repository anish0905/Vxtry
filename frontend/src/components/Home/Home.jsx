// import React from "react";
// import { CiPhone } from "react-icons/ci";
// import { FaBars } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div className="bg-gray-100 p-6 background ">
//       <div className="flex  gap-2">
//         {/* First Section */}
//         <div className="flex items-center space-x-2  content-center justify-center">
//           <div className="text-blue-500 flex items-center space-x-2  content-center justify-center">
//             <CiPhone size={24} />
//           </div>
//           <div className=" block items-center   content-center justify-start">
//             <p className="text-sm font-bold text-gray-700">Phone</p>
//             <p className="text-sm text-gray-600">7260858715</p>
//           </div>
//           <div className="inline-block h-[40px] min-h-[1em] w-0.5 self-stretch bg-red-100"></div>
//         </div>

//         {/* Second Section */}
//         <div className="flex items-center space-x-2  content-center justify-center">
//           <div className="text-blue-500 flex items-center space-x-2  content-center justify-center">
//             <CiPhone size={24} />
//           </div>
//           <div className=" block items-center   content-center justify-center">
//             <p className="text-sm font-bold text-gray-700">Phone</p>
//             <p className="text-sm text-gray-600">7260858715</p>
//           </div>
//           {/* <div className="inline-block h-[40px] min-h-[1em] w-0.5 self-stretch bg-red-100"></div> */}
//         </div>
//       </div>
//       <div>
//         <div>{FaBars}</div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { CiPhone } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-100 p-6 background  justify-between ">
      <div className="flex gap-4">
        {/* First Section */}
        <div className="flex items-center gap-2">
          <div className="text-blue-500">
            <CiPhone size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Phone</p>
            <p className="text-sm text-gray-600">7260858715</p>
          </div>
          <div className="inline-block h-[40px] w-0.5 bg-red-100"></div>
        </div>

        {/* Second Section */}
        <div className="flex items-center gap-2">
          <div className="text-blue-500">
            <CiPhone size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Phone</p>
            <p className="text-sm text-gray-600">7260858715</p>
          </div>
        </div>
      </div>

      {/* FaBars Icon */}
      <div className="text-blue-500">
        <FaBars size={24} />
      </div>
    </div>
  );
};

export default Home;
