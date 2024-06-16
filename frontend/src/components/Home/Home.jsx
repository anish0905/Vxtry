import React from 'react';
import { CiPhone } from 'react-icons/ci';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-blue-500">
            <CiPhone size={24} />
          </div>
          <span className="text-lg font-bold text-gray-700">Phone</span>
          <span className="text-base text-gray-600">75222</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
