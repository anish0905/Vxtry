import React, { useState } from 'react';
import img from "../assets/thridImg.png";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center py-20 px-4 lg:px-20">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <img src={img} alt="ServerImage" className="w-100 h-auto" />
      </div>
      <div className="w-full lg:w-1/2 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-gray-400">GENERAL QUESTIONS</h2>
          <h3 className="text-5xl font-bold text-white mt-2">Frequent Asked <span className="text-red-600">Questions!!</span></h3>
          <p className="text-gray-400 mt-4">Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(0)}>
              <h4 className="text-xl font-bold">Global Search Engine Optimization</h4>
              <span>{openIndex === 0 ? '-' : '+'}</span>
            </div>
            {openIndex === 0 && <p className="mt-4 text-gray-300">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>}
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(1)}>
              <h4 className="text-xl font-bold">We Own And Shape Our Future.</h4>
              <span>{openIndex === 1 ? '-' : '+'}</span>
            </div>
            {openIndex === 1 && <p className="mt-4 text-gray-300">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>}
          </div>
          <div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(2)}>
              <h4 className="text-xl font-bold">How Long Do I Get Support & Updates?</h4>
              <span>{openIndex === 2 ? '-' : '+'}</span>
            </div>
            {openIndex === 2 && <p className="mt-4 text-gray-300">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
