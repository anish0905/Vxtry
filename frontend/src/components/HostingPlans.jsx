// src/HostingPlans.js
import React from 'react';

const HostingPlans = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20 lg:px-20 px-4">
      <div className="text-center">
        <h1 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-1">Our Service</h1>
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-4">Choose Your Perfect & Best</h2>
        <h3 className="text-2xl font-semibold text-red-600 mb-12">Hosting Plans</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Shared Hosting */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-green-500 transition-transform duration-500 hover:scale-105 hover:bg-gray-700 hover:text-white">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4">Share Hosting</h4>
              <p className="text-3xl font-bold text-green-500 mb-2">&#x20B9;100.00 <span className="text-lg text-gray-600">/ Month</span></p>
              <p className="text-white-600 mb-4">Our Share Hosting is SSD powered, a robust, high-performance solution for your website needs with cPanel.</p>
              <ul className="text-left text-white-700">
                <li>20GB SSD Storage</li>
                <li>1TB Bandwidth</li>
                <li>cPanel Control Panel</li>
                <li>1 Domain Hosting</li>
                <li>1 Sub-Domain</li>
                <li>10 Databases</li>
                <li>10 Email</li>
              </ul>
              <div className="mt-4 text-red-500 text-lg font-bold">&#x20B9;1100/Year</div>
            </div>
          </div>
          {/* WordPress Hosting */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-green-500 transition-transform duration-500 hover:scale-105 hover:bg-gray-700 hover:text-white">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4">WordPress Hosting</h4>
              <p className="text-3xl font-bold text-green-500 mb-2">&#x20B9;300.00 <span className="text-lg text-gray-600">/ Month</span></p>
              <p className="text-white-600 mb-4">Our WordPress Hosting is SSD powered, a robust, high-performance solution for your website needs with cPanel.</p>
              <ul className="text-left text-white-700">
                <li>20GB SSD Storage</li>
                <li>1TB Bandwidth</li>
                <li>cPanel Control Panel</li>
                <li>1 Domain Hosting</li>
                <li>1 Sub-Domain</li>
                <li>10 Databases</li>
                <li>10 Email</li>
              </ul>
              <div className="mt-4 text-red-500 text-lg font-bold">&#x20B9;3600/Year</div>
            </div>
          </div>
          {/* Cloud Hosting */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-green-500 transition-transform duration-500 hover:scale-105 hover:bg-gray-700 hover:text-white">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4">Cloud Hosting</h4>
              <p className="text-3xl font-bold text-green-500 mb-2">&#x20B9;500.00 <span className="text-lg text-gray-600">/ Month</span></p>
              <p className="text-white-600 mb-4">Our Cloud Hosting is SSD powered, a robust, high-performance solution for your website needs with cPanel.</p>
              <ul className="text-left text-white-700">
                <li>20GB SSD Storage</li>
                <li>1TB Bandwidth</li>
                <li>Direct Control Panel</li>
                <li>1 Domain Hosting</li>
                <li>1 Sub-Domain</li>
                <li>10 Databases</li>
                <li>10 Email</li>
              </ul>
              <div className="mt-4 text-red-500 text-lg font-bold">&#x20B9;6000/Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingPlans;
