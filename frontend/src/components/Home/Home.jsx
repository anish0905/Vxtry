import React from 'react';
import { CiPhone } from 'react-icons/ci';

const Home = () => {
  return (
    <div className="bg-gray-100 p-6">

      <div className="flex items-center space-x-4">
        <div className="text-blue-500">
          <CiPhone size={24} />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-700">Phone</p>
          <p className="text-base text-gray-600">7260858715</p>
        </div>
        <div
    class="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-red-100"></div>
  <p class="ps-6">Text</p>
</div>
      </div>
  
  );
}

export default Home;
